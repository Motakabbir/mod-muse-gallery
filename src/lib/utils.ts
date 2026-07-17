import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  og_url?: string;
  og_type?: string;
  twitter_card?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
}

export async function fetchSeoMetadata(slug: string, fallback: SeoMetadata): Promise<SeoMetadata> {
  const apiUrl = (typeof process !== "undefined" && process.env.VITE_API_URL) || "http://localhost:8000/api/v1/cms";
  try {
    const res = await fetch(`${apiUrl}/seos/slug/${slug}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });

    if (!res.ok) return fallback;

    const json = await res.json();
    if (json.success && json.data) {
      return {
        title: json.data.title || fallback.title,
        description: json.data.description || fallback.description,
        keywords: json.data.keywords || fallback.keywords,
        og_title: json.data.og_title || fallback.og_title,
        og_description: json.data.og_description || fallback.og_description,
        og_image: json.data.og_image || fallback.og_image,
      };
    }
  } catch (error: any) {
    console.debug(`[SEO] Offline fallback for ${slug}:`, error.message);
  }
  return fallback;
}

export function mapSeoToMeta(seo: SeoMetadata) {
  const metaTags: Record<string, string>[] = [];
  
  if (seo.title) metaTags.push({ title: seo.title });
  if (seo.description) metaTags.push({ name: "description", content: seo.description });
  if (seo.keywords) metaTags.push({ name: "keywords", content: seo.keywords });
  
  if (seo.og_title) metaTags.push({ property: "og:title", content: seo.og_title });
  if (seo.og_description) metaTags.push({ property: "og:description", content: seo.og_description });
  if (seo.og_image) metaTags.push({ property: "og:image", content: seo.og_image });
  if (seo.og_url) metaTags.push({ property: "og:url", content: seo.og_url });
  if (seo.og_type) metaTags.push({ property: "og:type", content: seo.og_type });

  if (seo.twitter_card) metaTags.push({ name: "twitter:card", content: seo.twitter_card });
  if (seo.twitter_title) metaTags.push({ name: "twitter:title", content: seo.twitter_title });
  if (seo.twitter_description) metaTags.push({ name: "twitter:description", content: seo.twitter_description });
  if (seo.twitter_image) metaTags.push({ name: "twitter:image", content: seo.twitter_image });

  return metaTags;
}
