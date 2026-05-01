import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { SITE } from "@/data/site";

const Index = () => (
  <Layout>
    <SEO
      title={`${SITE.name} | Web Development, SEO & Digital Marketing Agency India`}
      description="Silver Wolf Technologies — 10+ years building websites, mobile apps, CRMs and SEO/digital marketing for businesses across India and globally. Get a free quote today."
      keywords={[
        "web development company India",
        "digital marketing agency India",
        "SEO services India",
        "mobile app development",
        "CRM development",
        "ecommerce website India",
        "ui ux design agency",
        "Silver Wolf Technologies",
      ]}
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE.name,
        url: SITE.domain,
        logo: `${SITE.domain}/favicon.png`,
        email: SITE.email,
        telephone: SITE.phone,
        foundingDate: String(SITE.founded),
        areaServed: ["IN", "US", "GB", "CA", "AE", "AU", "SG"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SITE.phone,
          email: SITE.email,
          contactType: "Customer Service",
          availableLanguage: ["English", "Hindi"],
        },
      }}
    />
    <Hero />
    <Services />
    <WhyUs />
    <Portfolio />
    <Testimonials />
    <About />
    <FAQ />
    <Contact />
  </Layout>
);

export default Index;
