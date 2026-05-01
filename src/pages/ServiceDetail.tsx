import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/SEO";
import { Contact } from "@/components/site/Contact";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, MapPin } from "lucide-react";
import { SERVICES, CITIES, citySlug, cityFromSlug, SITE } from "@/data/site";

const ServiceDetail = () => {
  const { slug, city: citySlugParam } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  const city = citySlugParam ? cityFromSlug(citySlugParam) : undefined;
  if (citySlugParam && !city) return <Navigate to={`/services/${slug}`} replace />;

  const titleBase = city ? `${service.title} in ${city}` : service.title;
  const title = `${titleBase} | ${SITE.name}`;
  const description = city
    ? `Hire the best ${service.title.toLowerCase()} agency in ${city}. ${service.short} 10+ years of experience. Free consultation. Call ${SITE.phone}.`
    : `${service.short} Trusted by businesses across India and globally. ${SITE.yearsExperience}+ years of experience. Free consultation.`;

  const related = SERVICES.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);
  const otherCities = CITIES.filter((c) => c !== city).slice(0, 12);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: service.title,
      provider: {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.domain,
        telephone: SITE.phone,
        email: SITE.email,
      },
      areaServed: city ? city : ["India", "Global"],
      description: service.longDescription,
      url: `${SITE.domain}/services/${service.slug}${city ? `/${citySlug(city)}` : ""}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.domain}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.domain}/services` },
        { "@type": "ListItem", position: 3, name: service.title, item: `${SITE.domain}/services/${service.slug}` },
        ...(city
          ? [{ "@type": "ListItem", position: 4, name: city, item: `${SITE.domain}/services/${service.slug}/${citySlug(city)}` }]
          : []),
      ],
    },
  ];

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        keywords={[
          ...service.keywords,
          ...(city ? [`${service.title.toLowerCase()} in ${city}`, `${service.title.toLowerCase()} ${city}`, `best ${service.title.toLowerCase()} agency ${city}`] : []),
        ]}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg -z-10" />
        <div className="container max-w-4xl animate-fade-up">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <span>/</span>
            <Link to={`/services/${service.slug}`} className="hover:text-foreground">{service.title}</Link>
            {city && (<><span>/</span><span className="text-foreground">{city}</span></>)}
          </nav>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{service.category}</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6 leading-tight">
            {city ? <>Best <span className="text-gradient">{service.title}</span> Agency in {city}</> : <>{service.title} <span className="text-gradient">that drives growth</span></>}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">{service.longDescription}</p>
          {city && (
            <p className="text-sm text-muted-foreground mb-8 inline-flex items-center gap-2 glass rounded-full px-4 py-2">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Serving businesses across {city} & nearby regions
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="hero" size="xl"><Link to="/contact">Get Free Quote <ArrowRight /></Link></Button>
            <Button asChild variant="glass" size="xl"><a href={`tel:${SITE.phoneRaw}`}>Call {SITE.phone}</a></Button>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-up">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What you get</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8">Built for results, not buzzwords.</h2>
              <ul className="space-y-3">
                {service.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-muted-foreground">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-8 animate-fade-up">
              <h3 className="text-xl font-semibold mb-5">Deliverables</h3>
              <ul className="space-y-3 mb-6">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-1" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" className="w-full"><Link to="/contact">Request a proposal</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="max-w-2xl mb-12 animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">A proven framework, refined over <span className="text-gradient">{SITE.yearsExperience} years.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((p, i) => (
              <div key={p.step} className="glass rounded-2xl p-6 relative">
                <div className="text-5xl font-bold text-gradient-primary opacity-30 mb-2">0{i + 1}</div>
                <h3 className="font-semibold mb-2">{p.step}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations grid (only on non-city pages) */}
      {!city && (
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl mb-10 animate-fade-up">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Locations</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4">{service.title} <span className="text-gradient">across India & globally.</span></h2>
              <p className="text-muted-foreground mt-3">Dedicated landing pages for businesses in your city.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {CITIES.map((c) => (
                <Link
                  key={c}
                  to={`/services/${service.slug}/${citySlug(c)}`}
                  className="glass rounded-xl px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all flex items-center justify-between group"
                >
                  <span>{service.title.split(" ")[0]} in {c}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* If city: show other cities */}
      {city && (
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl mb-10 animate-fade-up">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Also serving</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4">{service.title} in <span className="text-gradient">other cities</span></h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {otherCities.map((c) => (
                <Link
                  key={c}
                  to={`/services/${service.slug}/${citySlug(c)}`}
                  className="glass rounded-xl px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                >
                  {service.title} in {c}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="max-w-2xl mb-10 animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Related Services</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">More from our <span className="text-gradient">{service.category.toLowerCase()}</span> team</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link key={r.slug} to={`/services/${r.slug}`} className="glass rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-500">
                <div className="text-xs text-muted-foreground mb-2">{r.category}</div>
                <h3 className="text-lg font-semibold mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{r.short}</p>
                <span className="text-xs font-semibold text-primary inline-flex items-center gap-1">Learn more <ArrowRight className="h-3.5 w-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact compact presetService={titleBase} />
    </Layout>
  );
};

export default ServiceDetail;
