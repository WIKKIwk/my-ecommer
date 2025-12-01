const PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000/api";
const INTERNAL_API_BASE_URL = process.env.INTERNAL_API_BASE_URL ?? PUBLIC_API_BASE_URL;

const getBaseUrl = () => (typeof window === "undefined" ? INTERNAL_API_BASE_URL : PUBLIC_API_BASE_URL);

async function request<T>(path: string, options: RequestInit = {}) {
  const res = await fetch(`${getBaseUrl()}${path}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });
  if (!res.ok) {
    throw new Error(await res.text());
  }
  return (await res.json()) as T;
}

export function sendLoginCode(phone: string) {
  return request<{ detail: string; is_new: boolean }>("/auth/send-code/", {
    method: "POST",
    body: JSON.stringify({ phone }),
  });
}

export function verifyLoginCode(payload: {
  phone: string;
  code: string;
  fullName?: string;
  cartToken?: string;
}) {
  const body: Record<string, unknown> = {
    phone: payload.phone,
    code: payload.code,
  };

  if (payload.fullName && payload.fullName.trim().length > 0) {
    body.full_name = payload.fullName.trim();
  }

  if (payload.cartToken) {
    body.cart_token = payload.cartToken;
  }

  return request<{ token: string; expires_at: string; customer: { id: number; full_name: string; phone: string } }>(
    "/auth/verify/",
    {
      method: "POST",
      body: JSON.stringify(body),
    },
  );
}

export function fetchProfile(token: string) {
  return request<{ id: number; full_name: string; phone: string; is_verified: boolean }>("/me/profile/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function updateProfileName(token: string, fullName: string) {
  return request<{ id: number; full_name: string; phone: string; is_verified: boolean }>("/me/profile/", {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ full_name: fullName }),
  });
}
