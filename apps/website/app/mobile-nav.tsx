"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

type NavigationItem = {
  label: string;
  expandable: boolean;
};

type MobileNavProps = {
  items: readonly NavigationItem[];
};

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="mobile-nav">
      <button
        className="mobile-menu-trigger"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {isOpen ? (
        <div className="mobile-menu-panel" id="mobile-navigation-panel">
          <nav aria-label="Mobile navigation">
            {items.map((item) => (
              <button className="mobile-nav-link" type="button" key={item.label}>
                <span>{item.label}</span>
                {item.expandable ? <ChevronDown aria-hidden="true" /> : null}
              </button>
            ))}
          </nav>
          <div className="mobile-menu-actions">
            <button className="mobile-login" type="button">
              Log in
            </button>
            <button className="mobile-cta" type="button">
              Get started
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
