import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Mail, Phone, MessageCircle, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '../data/products';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products', products: true },
  { label: 'Manufacturing Facility', href: '/manufacturing' },
  { label: 'Certificate', href: '/certificate' },
  { label: 'Enquiry', href: '/enquiry' },
  { label: 'Contact Us', href: '/contact' },
];

const SEO: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'The Moleculez | Pharmaceutical & Fine Chemical Manufacturing',
    description: 'The Moleculez manufactures and exports pharmaceutical products, APIs, fine chemicals, phase-transfer catalysts and herbal products for global markets.',
  },
  '/about': {
    title: 'About The Moleculez | Pharmaceutical Manufacturing',
    description: 'Learn about The Moleculez, its pharmaceutical manufacturing capabilities, quality focus and global supply operations.',
  },
  '/products': {
    title: 'Pharmaceutical Products | The Moleculez',
    description: 'Explore The Moleculez product catalogue across antibacterial, antimalarial, antituberculosis, oncology, nutraceutical, herbal and veterinary categories.',
  },
  '/manufacturing': {
    title: 'Manufacturing Facility | The Moleculez',
    description: 'Explore manufacturing infrastructure, quality processes and facilities supporting The Moleculez product portfolio.',
  },
  '/certificate': {
    title: 'Certifications | The Moleculez',
    description: 'View quality and certification information for The Moleculez.',
  },
  '/enquiry': {
    title: 'Product Enquiry | The Moleculez',
    description: 'Send a product or sourcing enquiry to The Moleculez team.',
  },
  '/contact': {
    title: 'Contact The Moleculez | Mumbai, India',
    description: 'Contact The Moleculez for pharmaceutical products, sourcing requirements and business enquiries.',
  },
};

function setMeta(name: string, content: string) {
  let el = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

function setProperty(property: string, content: string) {
  let el = document.head.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.content = content;
}

function usePageSEO() {
  const location = useLocation();
  useEffect(() => {
    const base = 'https://www.themoleculez.in';
    const path = location.pathname;
    const category = path.startsWith('/products/') ? PRODUCT_CATEGORIES.find(c => c.slug === path.split('/')[2]) : undefined;
    const seo = category
      ? {
          title: `${category.name} Pharmaceutical Products | The Moleculez`,
          description: `Explore the ${category.name} product catalogue from The Moleculez, including product names, dosage forms and composition or strength information.`,
        }
      : SEO[path] || SEO['/'];
    document.title = seo.title;
    setMeta('description', seo.description);
    setMeta('robots', 'index, follow');
    setProperty('og:title', seo.title);
    setProperty('og:description', seo.description);
    setProperty('og:type', 'website');
    setProperty('og:url', `${base}${path}`);
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${base}${path}`;

    const schemaId = 'moleculez-jsonld';
    let schema = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!schema) {
      schema = document.createElement('script');
      schema.id = schemaId;
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'The Moleculez',
      url: base,
      logo: `${base}/assets/moleculez-logo.webp`,
      email: 'mailto:exports@themoleculez.com',
      telephone: '+91 88288 37004',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '111, A-Wing / KBC, Ghatkopar',
        addressLocality: 'Mumbai',
        postalCode: '400075',
        addressCountry: 'IN',
      },
    });
  }, [location.pathname]);
}

function Preloader() {
  const [phase, setPhase] = useState<'show' | 'exit' | 'done'>('show');
  useEffect(() => {
    const exitTimer = window.setTimeout(() => setPhase('exit'), 850);
    const doneTimer = window.setTimeout(() => setPhase('done'), 1200);
    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);
  if (phase === 'done') return null;
  return (
    <div className={`molecule-preloader ${phase === 'exit' ? 'is-exiting' : ''}`} role="status" aria-live="polite" aria-label="Loading The Moleculez">
      <div className="preloader-orbit preloader-orbit-one" aria-hidden="true" />
      <div className="preloader-orbit preloader-orbit-two" aria-hidden="true" />
      <div className="preloader-core" aria-hidden="true"><FlaskConical size={28} strokeWidth={1.6} /></div>
      <div className="preloader-brand">
        <strong>THE MOLECULEZ</strong>
        <span>PHARMACEUTICAL · CHEMICAL · QUALITY</span>
      </div>
      <div className="preloader-line" aria-hidden="true"><span /></div>
      <p>Preparing the experience</p>
    </div>
  );
}

function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-logo-image-wrap ${compact ? 'brand-logo-image-wrap-mobile' : ''}`}>
      <img src="/assets/moleculez-logo.webp" width="180" height="56" alt="The Moleculez" className="brand-logo-image" />
    </span>
  );
}

function ProductsMegaMenu({ open }: { open: boolean }) {
  return (
    <div className={`products-mega-menu ${open ? 'open' : ''}`} role="menu" aria-label="Product categories">
      <div className="mega-menu-inner">
        <div className="mega-intro">
          <span className="eyebrow">PRODUCT CATALOGUE</span>
          <h2>Explore our product portfolio</h2>
          <p>Browse product categories and view product name, dosage form and composition or strength.</p>
          <Link to="/products" className="mega-view-all">View all products <ArrowRight size={15} /></Link>
        </div>
        <div className="mega-category-grid">
          {PRODUCT_CATEGORIES.map(category => (
            <Link
              key={category.slug}
              to={`/products/${category.slug}`}
              className="mega-category"
              role="menuitem"
            >
              <span>{category.name}</span>
              <small>{category.products.length} products</small>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', mobileOpen);
    return () => document.body.classList.remove('mobile-menu-open');
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setProductsOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);
  const productsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  usePageSEO();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setMobileOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) setProductsOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const active = (href: string) => href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar container" aria-label="Primary navigation">
          <Link to="/" className="brand-logo" aria-label="The Moleculez home"><BrandLogo /></Link>

          <div className="desktop-nav">
            {NAV_LINKS.map(link => link.products ? (
              <div className="nav-product-wrap" ref={productsRef} key={link.label}>
                <Link
                  to="/products"
                  className={`nav-link nav-product-trigger ${active('/products') ? 'active' : ''}`}
                  onMouseEnter={() => setProductsOpen(true)}
                  onFocus={() => setProductsOpen(true)}
                  aria-haspopup="true"
                  aria-expanded={productsOpen}
                >
                  Products <ChevronDown size={14} className={productsOpen ? 'rotate-180' : ''} />
                </Link>
                <ProductsMegaMenu open={productsOpen} />
              </div>
            ) : (
              <Link key={link.href} to={link.href} className={`nav-link ${active(link.href) ? 'active' : ''}`}>{link.label}</Link>
            ))}
          </div>

          <Link to="/enquiry" className="nav-cta">Request a Quote <ArrowRight size={15} /></Link>

          <motion.button
            className="mobile-menu-button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            whileTap={{ scale: 0.92 }}
          >
            <Menu size={24} />
          </motion.button>
        </nav>
      </header>

      <motion.div
        className={`mobile-nav ${mobileOpen ? 'open' : ''}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        initial={false}
        animate={{ x: mobileOpen ? 0 : '100%' }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mobile-nav-head">
          <Link to="/" className="brand-logo" aria-label="The Moleculez home"><BrandLogo compact /></Link>
          <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close navigation menu"><X size={24} /></button>
        </div>

        <div className="mobile-nav-body">
          {NAV_LINKS.map(link => link.products ? (
            <div key={link.label}>
              <div className="mobile-product-row">
                <Link to="/products" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Products</Link>
                <button className="mobile-expand" onClick={() => setMobileProductsOpen(v => !v)} aria-label="Toggle product categories" aria-expanded={mobileProductsOpen}>
                  <ChevronDown size={19} className={mobileProductsOpen ? 'rotate-180' : ''} />
                </button>
              </div>
              <div className={`mobile-products ${mobileProductsOpen ? 'open' : ''}`}>
                {PRODUCT_CATEGORIES.map(category => (
                  <Link key={category.slug} to={`/products/${category.slug}`} className="mobile-sub-link" onClick={() => setMobileOpen(false)}>
                    <span>{category.name}</span><small>{category.products.length}</small>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={link.href} to={link.href} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>{link.label}</Link>
          ))}
          <Link to="/enquiry" className="mobile-quote" onClick={() => setMobileOpen(false)}>Request a Quote <ArrowRight size={16} /></Link>
        </div>
      </motion.div>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p>Manufacturing and export of APIs, pharmaceutical intermediates, phase-transfer catalysts and herbal products for global markets.</p>
          <a href="mailto:exports@themoleculez.com"><Mail size={14} />exports@themoleculez.com</a>
          <a href="tel:+918828837004"><Phone size={14} />+91 88288 37004</a>
        </div>
        <div>
          <h3>Quick Links</h3>
          {NAV_LINKS.filter(l => !l.products).map(l => <Link key={l.href} to={l.href}>{l.label}</Link>)}
        </div>
        <div>
          <h3>Product Categories</h3>
          <div className="footer-category-list">
            {PRODUCT_CATEGORIES.slice(0, 8).map(c => <Link key={c.slug} to={`/products/${c.slug}`}>{c.name}</Link>)}
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <p className="footer-contact-label">Headquarter</p>
          <p>111, A-Wing / KBC, Ghatkopar,<br />Mumbai - 400075, India</p>
          <a href="mailto:domestic@themoleculez.com">domestic@themoleculez.com</a>
          <a href="mailto:exports@themoleculez.com">exports@themoleculez.com</a>
          <a href="tel:+918291344258">+91 8291344258</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} The Moleculez. All Rights Reserved.</span>
        <span>WHO-GMP Certified · ISO 9001:2015 · US DMF Available</span>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href="https://wa.me/918828837004" target="_blank" rel="noopener noreferrer" aria-label="Chat with The Moleculez on WhatsApp">
      <MessageCircle size={25} fill="currentColor" />
    </a>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloader />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">{children}<Footer /></main>
      <WhatsAppButton />
    </>
  );
}
