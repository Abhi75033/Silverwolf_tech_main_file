import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/SEO";
import { Services } from "@/components/site/Services";
import { SITE } from "@/data/site";

const ServicesIndex = () => (
  <Layout>
    <SEO
      title={`Services | Web, App, SEO & Marketing | ${SITE.name}`}
      description="Explore all services from Silver Wolf Technologies — website development, mobile apps, CRM, SEO, digital marketing, branding, video & graphic design."
      keywords={["digital agency services", "web development services", "seo digital marketing services India"]}
    />
    <section className="pt-36 pb-10">
      <div className="container max-w-3xl text-center animate-fade-up">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Services</span>
        <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
          15+ services. <span className="text-gradient">One senior team.</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          A full-stack execution partner across development, marketing and creative — built for ambitious brands.
        </p>
      </div>
    </section>
    <Services />
  </Layout>
);

export default ServicesIndex;
