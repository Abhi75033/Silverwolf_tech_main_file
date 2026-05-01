import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <img src={heroBg} alt="" width={1920} height={1080} className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
    </div>
    <div className="absolute inset-0 grid-bg -z-10" />

    <div className="container relative">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-medium text-muted-foreground">10+ years of experience · Trusted by brands worldwide</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6">
          Top <span className="text-gradient">Digital & Development</span><br />
          Agency in <span className="text-gradient-primary">India</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          We build high-performance websites, mobile apps, CRMs and growth-driven marketing campaigns
          for startups, SMBs and global enterprises.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">Get Free Consultation <ArrowRight /></Link>
          </Button>
          <Button asChild variant="glass" size="xl">
            <Link to="/portfolio">View Our Work</Link>
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            ["10+", "Years Experience"],
            ["15+", "Service Verticals"],
            ["20+", "Cities Served"],
            ["24h", "Response Time"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">{n}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
