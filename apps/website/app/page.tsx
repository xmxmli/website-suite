import { ChevronDown, ChevronRight } from "lucide-react";

import { MobileNav } from "./mobile-nav";

const menuItems = [
  { label: "Features", expandable: true },
  { label: "Company", expandable: true },
  { label: "Resources", expandable: true },
  { label: "Help", expandable: true },
  { label: "Docs", expandable: true },
  { label: "AI", expandable: true },
  { label: "Pricing", expandable: false }
] as const;

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-background" aria-hidden="true" />

        <header className="site-header">
          <div className="header-inner">
            <button className="wordmark" type="button" aria-label="Resend home">
              Resend
            </button>

            <nav className="desktop-nav" aria-label="Main navigation">
              {menuItems.map((item) => (
                <button className="nav-link" type="button" key={item.label}>
                  <span>{item.label}</span>
                  {item.expandable ? <ChevronDown aria-hidden="true" /> : null}
                </button>
              ))}
            </nav>

            <div className="desktop-actions">
              <button className="login-link" type="button">
                Log in
              </button>
              <button className="header-cta" type="button">
                Get started
              </button>
            </div>

            <MobileNav items={menuItems} />
          </div>
        </header>

        <div className="hero-inner">
          <button className="announcement" type="button">
            <span>Announcing Remote MCP</span>
            <ChevronRight aria-hidden="true" />
          </button>

          <h1 id="hero-title">Email for developers</h1>

          <p className="hero-copy">
            The best way to reach humans instead of spam folders.
            <br />
            Deliver transactional and marketing emails at scale.
          </p>

          <div className="hero-actions">
            <button className="primary-cta" type="button">
              Get started
            </button>
            <button className="secondary-cta" type="button">
              Documentation
            </button>
          </div>
        </div>
      </section>

      <section className="next-screen-placeholder" aria-hidden="true" />
    </main>
  );
}
