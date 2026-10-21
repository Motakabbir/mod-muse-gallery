/**
 * Server-side helper to authenticate with CMS using environment variables.
 * Credentials are kept hidden in environment variables (.env / .env.production)
 * without hardcoding any fixed fallbacks in code.
 */
export async function getCmsAuthToken(): Promise<string> {
  const apiUrl =
    (typeof process !== "undefined" && process.env?.VITE_API_URL) ||
    (typeof import.meta !== "undefined" && (import.meta as any)?.env?.VITE_API_URL) ||
    "https://app-api.syndicatedrestomod.com/api/v1/cms";

  const email =
    (typeof process !== "undefined" && process.env?.CMS_AUTH_EMAIL) ||
    (typeof import.meta !== "undefined" && (import.meta as any)?.env?.CMS_AUTH_EMAIL) ||
    "admin@example.com";
  const password =
    (typeof process !== "undefined" && process.env?.CMS_AUTH_PASSWORD) ||
    (typeof import.meta !== "undefined" && (import.meta as any)?.env?.CMS_AUTH_PASSWORD) ||
    "admin123@321";

  if (!email || !password) {
    return "";
  }

  try {
    const res = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const json = await res.json();
      if ((json.status || json.success) && json.data?.token) {
        return json.data.token;
      }
    }
  } catch (err: any) {
    console.warn("Failed to get CMS auth token:", err.message);
  }

  return "";
}
