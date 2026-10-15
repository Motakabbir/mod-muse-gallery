/**
 * Server-side helper to authenticate with CMS using environment variables.
 * Credentials are kept hidden in environment variables (.env / .env.production)
 * without hardcoding any fixed fallbacks in code.
 */
export async function getCmsAuthToken(): Promise<string> {
  const apiUrl =
    process.env.VITE_API_URL ||
    import.meta.env.VITE_API_URL ||
    "http://localhost:8000/api/v1/cms";

  const email = process.env.CMS_AUTH_EMAIL;
  const password = process.env.CMS_AUTH_PASSWORD;

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
