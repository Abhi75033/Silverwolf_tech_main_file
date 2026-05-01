import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { SERVICES, SITE, CITIES, citySlug } from "@/data/site";
import { Mail, Phone, Globe } from "lucide-react";

const dev = SERVICES.filter((s) => s.category === "Development").slice(0, 5);
const mkt = SERVICES.filter((s) => s.category === "Marketing").slice(0, 4);
const creative = SERVICES.filter((s) => s.category === "Creative").slice(0, 4);
const topCities = CITIES.slice(0, 10);

export const Footer = () => (
  <footer className="border-t border-border pt-16 pb-10 mt-10">
    <div className="container">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10 mb-12">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-5">
            <img src={logo} alt="Silver Wolf Technologies" width={48} height={48} className="h-12 w-12" loading="lazy" />
            <span className="font-semibold text-lg leading-tight">
              Silver Wolf<br/>
              <span className="text-gradient text-xs tracking-[0.2em] uppercase">Technologies</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-sm">
            A senior team with 10+ years of combined experience building websites, apps, CRMs and growth systems for ambitious brands worldwide.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-primary" /> <a className="text-muted-foreground hover:text-foreground" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-primary" /> <a className="text-muted-foreground hover:text-foreground" href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></li>
            <li className="flex items-center gap-2.5"><Globe className="h-4 w-4 text-primary" /> <span className="text-muted-foreground">{SITE.presence}</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Development</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {dev.map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`} className="hover:text-foreground">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm">Marketing</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {mkt.map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`} className="hover:text-foreground">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm">Creative & Company</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {creative.map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`} className="hover:text-foreground">{s.title}</Link></li>
            ))}
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border pt-8 mb-8">
        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Web & Digital Marketing Services Across</h4>
        <div className="flex flex-wrap gap-2">
          {topCities.map((c) => (
            <Link
              key={c}
              to={`/services/website-development/${citySlug(c)}`}
              className="text-xs text-muted-foreground hover:text-foreground glass rounded-full px-3 py-1.5 transition-colors"
            >
              {c}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <p>India · USA · UK · Canada · UAE · Australia · Singapore</p>
      </div>
    </div>
  </footer>
);
