import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import { ArrowUpRight } from "lucide-react";

const work = [
  { img: p1, title: "Luxe Apparel", category: "E-commerce / Shopify", result: "+218% revenue in 6 months" },
  { img: p2, title: "FinPulse", category: "FinTech Mobile App", result: "120K downloads, 4.8★ rating" },
  { img: p3, title: "SalesForge CRM", category: "Custom CRM Platform", result: "40% faster sales cycle" },
];

export const Portfolio = () => (
  <section id="portfolio" className="py-24 md:py-32">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Selected Work</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Recent <span className="text-gradient">launches.</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">A small slice from 200+ projects shipped — websites, apps, CRMs and full digital ecosystems.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {work.map((w) => (
          <article key={w.title} className="group relative rounded-2xl overflow-hidden glass">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={w.img}
                alt={`${w.title} — ${w.category}`}
                width={1024}
                height={768}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{w.category}</p>
                  <h3 className="text-xl font-semibold">{w.title}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-gradient-primary font-medium mt-3">{w.result}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
