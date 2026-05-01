import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE } from "@/data/site";

type Props = {
  title: string;
  description: string;
  keywords?: string[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const upsertMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const SEO = ({ title, description, keywords, jsonLd }: Props) => {
  const { pathname } = useLocation();
  const url = `${SITE.domain}${pathname}`;

  useEffect(() => {
    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    if (keywords?.length) {
      upsertMeta('meta[name="keywords"]', "name", "keywords", keywords.join(", "));
    }
    upsertLink("canonical", url);

    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", url);
    upsertMeta('meta[property="og:type"]', "property", "og:type", "website");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    // JSON-LD: clear our previous dynamic blocks then add new
    document.head.querySelectorAll('script[data-dynamic-jsonld="true"]').forEach((n) => n.remove());
    if (jsonLd) {
      const arr = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      arr.forEach((data) => {
        const s = document.createElement("script");
        s.type = "application/ld+json";
        s.dataset.dynamicJsonld = "true";
        s.text = JSON.stringify(data);
        document.head.appendChild(s);
      });
    }
  }, [title, description, keywords, jsonLd, url]);

  return null;
};
