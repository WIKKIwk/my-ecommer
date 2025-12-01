import type { Branch, Category, HeroSlide } from "@/types";
import { categories as mockCategories, heroSlides as mockSlides } from "@/data/mock";

const PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000/api";
const INTERNAL_API_BASE_URL = process.env.INTERNAL_API_BASE_URL ?? PUBLIC_API_BASE_URL;
const MEDIA_BASE_URL = process.env.NEXT_PUBLIC_MEDIA_BASE_URL ?? "http://localhost:8001";

const getApiBaseUrl = () => (typeof window === "undefined" ? INTERNAL_API_BASE_URL : PUBLIC_API_BASE_URL);

const normalizeMediaUrl = (url?: string | null) => {
  if (!url) return null;
  if (url.startsWith("http://backend")) {
    return url.replace("http://backend:8001", MEDIA_BASE_URL).replace("http://backend", MEDIA_BASE_URL);
  }
  return url;
};

async function safeFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${getApiBaseUrl()}${path}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Request failed ${res.status}`);
    }
    return (await res.json()) as T;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[api] Falling back to mock data:", error);
    }
    return null;
  }
}

export async function getCategories(): Promise<Category[]> {
  const data = await safeFetch<Category[]>("/catalog/categories/");
  if (data && data.length) {
    return data.map((category) => ({
      ...category,
      image: normalizeMediaUrl(category.image),
      products: category.products.map((product) => ({
        ...product,
        image: normalizeMediaUrl(product.image),
      })),
    }));
  }
  return mockCategories;
}

export async function getHeroSlides(): Promise<HeroSlide[]> {
  type HeroBannerResponse = {
    id: number;
    title: string;
    subtitle?: string;
    description?: string;
    cta_label: string;
    cta_url?: string;
    badge?: string;
    image?: string | null;
  };
  const data = await safeFetch<HeroBannerResponse[]>("/hero/banners/");
  if (data && data.length) {
    return data.map((item) => ({
      id: item.id,
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      ctaLabel: item.cta_label,
      ctaUrl: item.cta_url,
      badge: item.badge,
      image: normalizeMediaUrl(item.image) ?? "",
    }));
  }
  return mockSlides;
}

export async function getBranches(): Promise<Branch[]> {
  type DeliveryZoneResponse = {
    id: number;
    name: string;
    min_order_amount: string | number;
    delivery_fee: string | number;
    eta_minutes: number;
  };
  type BranchResponse = {
    id: number;
    name: string;
    slug: string;
    address: string;
    phone: string;
    map_url?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    working_hours?: string | null;
    delivery_radius_km?: number | null;
    zones: DeliveryZoneResponse[];
  };

  const data = await safeFetch<BranchResponse[]>("/branches/");
  if (!data) {
    return [];
  }

  return data.map((branch) => ({
    id: branch.id,
    name: branch.name,
    slug: branch.slug,
    address: branch.address,
    phone: branch.phone,
    mapUrl: branch.map_url ?? null,
    latitude: branch.latitude ?? null,
    longitude: branch.longitude ?? null,
    workingHours: branch.working_hours ?? null,
    deliveryRadiusKm: branch.delivery_radius_km ?? null,
    zones: (branch.zones ?? []).map((zone) => ({
      id: zone.id,
      name: zone.name,
      minOrderAmount: Number(zone.min_order_amount),
      deliveryFee: Number(zone.delivery_fee),
      etaMinutes: zone.eta_minutes,
    })),
  }));
}
