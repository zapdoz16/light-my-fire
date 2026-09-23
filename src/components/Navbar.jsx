import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SITE } from "../data/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Programs", "#programs"],
    ["Our Approach", "#approach"],
    ["Student Results", "#reviews"],
    ["About", "#about"],
  ];

  return (
    <header className="nav-wrap">
      <nav className="nav">
        <a href="#" className="brand" aria-label="Light My Fire home">
<img src="/light-my-fire/images/lmf-logo.png" alt="Light My Fire" />        </a>
        <div className="desktop-nav">
          {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          <a className="nav-cta" href={SITE.whatsappUrl}>Talk to Us on WhatsApp <ArrowUpRight size={15}/></a>
        </div>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X/> : <Menu/>}
        </button>
      </nav>
      {open && (
        <div className="mobile-menu">
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-cta" href={SITE.whatsappUrl} onClick={() => setOpen(false)}>Talk to Us on WhatsApp <ArrowUpRight size={15}/></a>
        </div>
      )}
    </header>
  );
}
