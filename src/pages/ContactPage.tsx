import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/SEO";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { SITE } from "@/data/site";

const ContactPage = () => (
  <Layout>
    <SEO
      title={`Contact ${SITE.name} | Free Consultation`}
      description={`Get in touch with Silver Wolf Technologies. Email ${SITE.email} or call ${SITE.phone}. We respond within 24 hours.`}
      keywords={["contact silver wolf technologies", "hire web development agency India", "digital marketing consultation"]}
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        url: `${SITE.domain}/contact`,
        mainEntity: {
          "@type": "Organization",
          name: SITE.name,
          email: SITE.email,
          telephone: SITE.phone,
        },
      }}
    />
    <section className="pt-36 pb-4 text-center">
      <div className="container max-w-3xl animate-fade-up">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</span>
        <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
          Talk to a <span className="text-gradient">senior strategist.</span>
        </h1>
        <p className="text-muted-foreground text-lg">Tell us about your project. We respond within 24 hours.</p>
      </div>
    </section>
    <Contact />
    <FAQ />
  </Layout>
);

export default ContactPage;
