import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/SEO";
import { CITIES, SERVICES, citySlug, SITE } from "@/data/site";
import { ArrowRight } from "lucide-react";

const LocationsPage = () => (
  <Layout>
    <SEO
      title={`Service Locations | ${SITE.name} — India & Worldwide`}
      description="Silver Wolf Technologies serves clients across India (Mumbai, Delhi, Bangalore, Hyderabad and more) and globally (Dubai, London, New York, Toronto, Sydney, Singapore)."
      keywords={["digital agency India locations", "web development across India", "global digital marketing agency"]}
    />
    <section className="pt-36 pb-12 text-center">
      <div className="container max-w-3xl animate-fade-up">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Locations</span>
        <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
          Serving <span className="text-gradient">{CITIES.length}+ cities</span> worldwide.
        </h1>
        <p className="text-muted-foreground text-lg">Pick your city to explore our most-requested services in your region.</p>
      </div>
    </section>

    <section className="pb-24">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CITIES.map((c) => (
            <div key={c} className="glass rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4">Services in {c}</h2>
              <ul className="space-y-2">
                {SERVICES.slice(0, 6).map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}/${citySlug(c)}`}
                      className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 group"
                    >
                      {s.title} in {c}
                      <ArrowRight className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default LocationsPage;
