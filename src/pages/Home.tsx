import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import {
  ArrowRight, CheckCircle2, ShieldCheck, Package, Boxes, ClipboardCheck, Warehouse,
  FlaskConical, Truck, HeadphonesIcon, Star,
  ChevronRight, Award, Users, Globe, Leaf, Factory, BadgeCheck
} from 'lucide-react';

/* ---- Reveal hook ---- */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ---- Slide data ---- */
const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Pharmaceutical & Chemical Manufacturing',
    title: 'Global-Grade Manufacturing for Pharma ',
    body: 'Manufacturing and export of APIs, pharmaceutical intermediates, phase-transfer catalysts and herbal products for global markets.',
    cta1: { label: 'Explore Products', href: '/products' },
    cta2: { label: 'Send an Enquiry', href: '/enquiry' },
    accent: '#55b7ff',
    badge: 'WHO-GMP Certified',
  },
  {
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=2200&q=85',
    label: 'Quality-Driven Manufacturing',
    title: 'Consistent Quality\nAcross Every Product',
    body: 'Consistent quality, reliable processes and customer-focused manufacturing built around demanding industry requirements.',
    cta1: { label: 'Our Certifications', href: '/certificate' },
    cta2: { label: 'Our Facility', href: '/manufacturing' },
    accent: '#59d6c5',
    badge: 'ISO 9001:2015',
  },
  {
    image: '',
    label: 'Specialized Pharmaceutical Products',
    title: 'APIs, Intermediates\n& Herbal Extracts',
    body: 'Explore our portfolio of active pharmaceutical ingredients, synthesis intermediates and botanical herbal products.',
    cta1: { label: 'View Products', href: '/products' },
    cta2: { label: 'Product Catalogue', href: '/products' },
    accent: '#9aa4ff',
    badge: 'US DMF Available',
  },
  {
    image: 'https://images.unsplash.com/photo-1581093458791-9d42e3c3f4b7?auto=format&fit=crop&w=2200&q=85',
    label: 'Trusted Manufacturing Infrastructure',
    title: '5 GMP-Approved\nManufacturing Units',
    body: 'A manufacturing network across Gujarat, India, focused on quality, consistency and dependable supply for global partners.',
    cta1: { label: 'Manufacturing Facility', href: '/manufacturing' },
    cta2: { label: 'Contact Us', href: '/contact' },
    accent: '#63c8ff',
    badge: 'Indian FDA Approved',
  },
];

const CERTS = [
  { label: 'WHO-GMP', src: '/assets/who.webp', alt: 'WHO-GMP Certificate' },
  { label: 'GMP', src: '/assets/gmp.webp', alt: 'GMP Certificate' },
  { label: 'GLP', src: '/assets/glp.webp', alt: 'GLP Certificate' },
  { label: 'ISO 9001:2015', src: '/assets/iso.webp', alt: 'ISO 9001:2015 Certificate' },
  { label: 'Indian FDA', src: '/assets/fda.webp', alt: 'Indian FDA Certificate' },
  { label: 'US DMF', src: '/assets/dmf.webp', alt: 'US Drug Master File' },
];

const VALUES = [
  {
    icon: <Users size={24} color="#1e6fbf" />,
    title: 'Customer Satisfaction',
    body: 'Our efforts are consistently dedicated to supplying quality products at competitive prices while maintaining reliable services that meet customer requirements.',
  },
  {
    icon: <FlaskConical size={24} color="#1e6fbf" />,
    title: 'Specialization',
    body: 'We support customer-specific requirements and provide tailored material solutions wherever applicable — from product specifications to packaging formats.',
  },
  {
    icon: <Star size={24} color="#1e6fbf" />,
    title: 'Focus',
    body: 'To deliver products in line with customer requirements while maintaining consistent quality standards and reliable service throughout the supply cycle.',
  },
  {
    icon: <Globe size={24} color="#1e6fbf" />,
    title: 'Our Mission',
    body: 'We focus on building long-term cooperation rather than short-term gain, based on mutual trust and dependable business relationships with global partners.',
  },
];

const PRODUCT_CATS = [
  {
    image: '/assets/productimg/christina-victoria-craft-ZHys6xN7sUE-unsplash.avif',
    tag: 'API',
    title: 'Active Pharmaceutical Ingredients',
    desc: 'A comprehensive range of human and veterinary APIs with US DMF filings available for select products.',
    href: '/products',
  },
  {
    image: '/assets/productimg/Pharmaceutical-Ingredients.avif',
    tag: 'Intermediates',
    title: 'Pharmaceutical Intermediates',
    desc: 'High-purity intermediates used in the synthesis of APIs and bulk drugs for medicinal formulations.',
    href: '/products/antibacterial',
  },
  {
    image: '/assets/productimg/Phase-Transfer-Catalysts.avif',
    tag: 'Phase Transfer Catalysts',
    title: 'Phase Transfer Catalysts',
    desc: 'Specialized PTCs that enhance reaction rate, selectivity and efficiency across pharmaceutical and industrial applications.',
    href: '/products',
  },
  {
    image: '/assets/productimg/herbal-products.avif',
    tag: 'Herbal',
    title: 'Herbal Products & Extracts',
    desc: 'Standardized botanical extracts sourced from quality raw materials and processed to meet customer specifications.',
    href: '/products/nutraceutical-and-herbal',
  },
];

const WHY_US = [
  {
    icon: <Warehouse size={22} color="#1e6fbf" />,
    title: 'Largest Inventory',
    body: 'A broad and deep product portfolio across APIs, intermediates and herbal extracts ensures we can fulfill diverse sourcing requirements reliably.',
  },
  {
    icon: <ShieldCheck size={22} color="#1e6fbf" />,
    title: 'Quality Assurance',
    body: 'Stringent quality control at every production stage. Material test certificates provided with every supply. Certified under WHO-GMP, GMP, GLP and ISO 9001:2015.',
  },
  {
    icon: <Boxes size={22} color="#1e6fbf" />,
    title: 'Product Sourcing & Packaging',
    body: 'Reliable sourcing from established vendors and professional packaging that meets international standards for pharmaceutical-grade materials.',
  },
  {
    icon: <ClipboardCheck size={22} color="#1e6fbf" />,
    title: 'Third-Party Inspection',
    body: 'Every product is accompanied by test certificates and quality reports. Our experts maintain rigorous quality oversight throughout the supply process.',
  },
  {
    icon: <Truck size={22} color="#1e6fbf" />,
    title: 'Quick Delivery',
    body: 'We exercise quality control and logistics planning to ensure accurate and timely delivery aligned with customer schedules and requirements.',
  },
  {
    icon: <HeadphonesIcon size={22} color="#1e6fbf" />,
    title: 'Customer Support',
    body: 'Responsive support built on strong customer relationships. We engage locally-trained teams to understand and serve client requirements effectively.',
  },
];

const HERBAL = [
  {
    image: '/assets/productimg/senna-extract.avif',
    name: 'Senna Extract',
    desc: 'Standardized herbal extract processed from quality raw material sources for use in pharmaceutical and nutraceutical applications.',
  },
  {
    image: '/assets/productimg/curcumin-95.avif',
    name: 'Curcumin 95%',
    desc: 'High-purity curcumin extract, standardized to 95% curcuminoids, suitable for pharmaceutical and dietary supplement applications.',
  },
  {
    image: '/assets/productimg/coleus-extract.avif',
    name: 'Coleus Extract',
    desc: 'Botanical extract sourced and processed to customer specifications with consistent quality and standardized active content.',
  },
  {
    image: '/assets/productimg/garcinia-extract.avif',
    name: 'Organic Garcinia Cambogia',
    desc: 'Organically sourced Garcinia Cambogia extract processed under controlled conditions for pharmaceutical-grade applications.',
  },
];

/* ---- Components ---- */
function HeroSection() {
  return (
    <section aria-label="Hero carousel" className="hero-carousel-shell">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 6500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        loop
        speed={900}
        className="hero-swiper"
        aria-label="Featured company highlights"
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={slide.title}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(4,17,33,.94) 0%, rgba(6,25,47,.84) 42%, rgba(6,25,47,.48) 72%, rgba(6,25,47,.35) 100%), url(${slide.image})`,
              }}
            >
              <div className="hero-bg-glow" style={{ background: `radial-gradient(circle at 75% 42%, ${slide.accent}30, transparent 36%)` }} />
              <div className="hero-molecule-lines" aria-hidden="true">
                <span /><span /><span /><span /><span />
              </div>

              <div className="container hero-container">
                <div className="hero-copy">
                  <div className="hero-eyebrow" style={{ borderColor: `${slide.accent}75`, background: `${slide.accent}18` }}>
                    <Award size={14} color={slide.accent} />
                    <span style={{ color: slide.accent }}>{slide.badge}</span>
                  </div>
                  <div className="hero-label">{slide.label}</div>
                  <h1>{slide.title}</h1>
                  <div className="hero-accent-line" style={{ background: slide.accent }} />
                  <p>{slide.body}</p>
                  <div className="hero-actions">
                    <Link to={slide.cta1.href} className="btn btn-primary" style={{ background: slide.accent, borderColor: slide.accent }}>
                      {slide.cta1.label} <ArrowRight size={16} />
                    </Link>
                    <Link to={slide.cta2.href} className="btn btn-outline">{slide.cta2.label}</Link>
                  </div>
                </div>
              </div>

              <div className="hero-bottom-meta" aria-hidden="true">
                <span>THE MOLECULEZ</span><i />
                <span>QUALITY</span><i />
                <span>COMPLIANCE</span><i />
                <span>GLOBAL SUPPLY</span>
              </div>
              <div className="hero-slide-number invisible " aria-hidden="true">0{i + 1}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
function CertStrip() {
  const ref = useReveal();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="section-sm" style={{ background: 'white', borderBottom: '1px solid #e2e8f0' }} aria-label="Certifications">
      <div className="container">
        <div ref={ref} className="reveal" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Certifications</div>
          <h2 style={{ fontSize: '1.6rem' }}>Certified. Compliant. Trusted.</h2>
        </div>
        <div className="grid-6-cert stagger-children" ref={useRevealGrid()}>
          {CERTS.map((c) => (
            <button
              key={c.label}
              className="cert-card"
              onClick={() => setLightbox(c)}
              aria-label={`View ${c.label} certificate`}
            >
              <img src={c.src} alt={c.alt} loading="lazy" onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }} />
              <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#0a2342', textAlign: 'center' }}>{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.alt} enlarged view`}
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => { if (e.key === 'Escape') setLightbox(null); }}
          tabIndex={0}
        >
          <img src={lightbox.src} alt={lightbox.alt} className="lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}

function useRevealGrid() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function CompanyProfile() {
  const left = useReveal();
  const right = useReveal();
  return (
    <section className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div ref={left} className="reveal">
            <img
              src="/assets/companyimg/comimg.avif"
              alt="The Moleculez manufacturing facility"
              style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 12px 40px rgba(10,35,66,0.14)', objectFit: 'cover', minHeight: '320px' }}
              loading="lazy"
            />
          </div>
          <div ref={right} className="reveal reveal-delay-2">
            <div className="section-label">Company Profile</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', marginBottom: '0.75rem' }}>About The Moleculez</h2>
            <div className="divider" />
            <p style={{ color: '#334155', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.02rem' }}>
              The Moleculez is involved in the manufacturing and export of fine chemicals, APIs, drug intermediates, phase-transfer catalysts and herbal extracts for global markets.
            </p>
            <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: '1.75rem', fontSize: '0.95rem' }}>
              With 5 GMP-approved manufacturing units across Gujarat, India, and a workforce of 900 professionals, we deliver consistent quality across a comprehensive product portfolio to customers worldwide.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {[
                { v: '5', l: 'GMP Units' },
                { v: '900+', l: 'Employees' },
                { v: '6', l: 'Certifications' },
              ].map(s => (
                <div key={s.l} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '1.75rem', color: '#1e6fbf' }}>{s.v}</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>{s.l}</div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-outline-dark" style={{ display: 'inline-flex' }}>
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  const ref = useRevealGrid();
  const heading = useReveal();
  return (
    <section className="section">
      <div className="container">
        <div ref={heading} className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Principles</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)' }}>Core Company Values</h2>
          <p style={{ color: '#64748b', marginTop: '0.75rem', maxWidth: '520px', margin: '0.75rem auto 0' }}>
            The values and principles that drive our manufacturing, relationships and quality standards.
          </p>
        </div>
        <div ref={ref} className="grid-4 stagger-children">
          {VALUES.map((v) => (
            <div key={v.title} className="value-card core-value-card">
              <div className="value-icon">{v.icon}</div>
              <h3 className="core-value-title mt-3 " style={{ fontSize: '1rem', marginBottom: '0.625rem' }}>{v.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.75 }}>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCategories() {
  const heading = useReveal();
  const grid = useRevealGrid();
  return (
    <section className="section section-bg">
      <div className="container">
        <div ref={heading} className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>What We Make</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)' }}>Our Pharma Products</h2>
          <p style={{ color: '#64748b', marginTop: '0.75rem', maxWidth: '520px', margin: '0.75rem auto 0' }}>
            A broad product catalogue spanning pharmaceutical, nutraceutical, herbal and veterinary categories.
          </p>
        </div>
        <div ref={grid} className="grid-4 stagger-children">
          {PRODUCT_CATS.map((p) => (
            <div key={p.tag} className="product-card">
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="product-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <span style={{
                  display: 'inline-block', padding: '0.2rem 0.625rem',
                  background: '#dbeafe', color: '#1e40af',
                  borderRadius: '999px', fontSize: '0.7rem', fontWeight: 700,
                  letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.625rem'
                }}>{p.tag}</span>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.825rem', color: '#64748b', lineHeight: 1.65, marginBottom: '1rem' }}>{p.desc}</p>
                <Link to={p.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.85rem', fontWeight: 600, color: '#1e6fbf', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.gap = '0.6rem')}
                  onMouseLeave={e => (e.currentTarget.style.gap = '0.375rem')}
                >
                  View Products <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const heading = useReveal();
  const grid = useRevealGrid();
  return (
    <section className="section">
      <div className="container">
        <div ref={heading} className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Advantage</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)' }}>Why Choose Us</h2>
          <p style={{ color: '#64748b', marginTop: '0.75rem', maxWidth: '520px', margin: '0.75rem auto 0' }}>
            Trusted by global pharmaceutical and industrial customers for quality, reliability and responsiveness.
          </p>
        </div>
        <div ref={grid} className="why-us-grid stagger-children">
          {WHY_US.map((w) => (
            <div key={w.title} className="value-card why-us-card">
              <div className="why-us-card-content">
                <div className="value-icon">{w.icon}</div>
                <div className="why-us-card-copy">
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{w.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7 }}>{w.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HerbalProducts() {
  const heading = useReveal();
  const grid = useRevealGrid();
  return (
    <section className="section section-bg">
      <div className="container">
        <div ref={heading} className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center', color: '#0d9488' }}>
            <Leaf size={14} style={{ marginRight: 0 }} /> Botanical & Herbal
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)' }}>Herbal Products</h2>
          <p style={{ color: '#64748b', marginTop: '0.75rem', maxWidth: '540px', margin: '0.75rem auto 0' }}>
            Standardized herbal extracts sourced from quality raw materials, processed to customer specifications.
          </p>
        </div>
        <div ref={grid} className="grid-4 stagger-children">
          {HERBAL.map((h) => (
            <div key={h.name} className="product-card">
              <div style={{ height: '210px', overflow: 'hidden' }}>
                <img
                  src={h.image}
                  alt={h.name}
                  className="product-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.background = '#e2e8f0';
                  }}
                />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: '#0a2342' }}>{h.name}</h3>
                <p style={{ fontSize: '0.825rem', color: '#64748b', lineHeight: 1.65, marginBottom: '1rem' }}>{h.desc}</p>
                <Link to="/products/nutraceutical-and-herbal" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.85rem', fontWeight: 600, color: '#0d9488', textDecoration: 'none' }}>
                  View Product <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QualitySection() {
  const left = useReveal();
  const right = useReveal();
  return (
    <section className="section" style={{ background: '#0a2342' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div ref={left} className="reveal">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(30,111,191,0.2)', border: '1px solid rgba(30,111,191,0.35)', borderRadius: '999px', padding: '0.3rem 0.875rem', marginBottom: '1.25rem' }}>
              <ShieldCheck size={13} color="#60a5fa" />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#60a5fa', letterSpacing: '0.06em' }}>QUALITY FIRST</span>
            </div>
            <h2 style={{ color: 'white', fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', marginBottom: '0.75rem' }}>Our Quality</h2>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #1e6fbf, #0d9488)', borderRadius: '2px', marginBottom: '1.5rem' }} />
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1rem' }}>
              Quality is our prime concern. Our committed personnel and sound infrastructure support consistent quality standards across our products and processes.
            </p>
            {[
              'Independence & Objectivity',
              'Technical & Scientific Quality',
              'Practical Benefits to Clients',
              'Material Test Certificate with every supply',
            ].map((point) => (
              <div key={point} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.625rem' }}>
                <CheckCircle2 size={16} color="#0d9488" style={{ flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{point}</span>
              </div>
            ))}
            <div style={{ marginTop: '1.75rem' }}>
              <Link to="/certificate" className="btn btn-primary">
                View Certifications <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div ref={right} className="reveal reveal-delay-2">
            <div className="quality-cert-grid">
              {[
                { label: 'WHO-GMP', icon: <ShieldCheck size={24} />, desc: 'World Health Organization Good Manufacturing Practice' },
                { label: 'ISO 9001:2015', icon: <BadgeCheck size={24} />, desc: 'International quality management system standard' },
                { label: 'Indian FDA', icon: <ShieldCheck size={24} />, desc: 'Central Drugs Standard Control Organisation' },
                { label: 'US DMF', icon: <ClipboardCheck size={24} />, desc: 'US Drug Master File filings for select products' },
              ].map((c) => (
                <div key={c.label} className="quality-cert-card">
                  <div className="quality-cert-icon">{c.icon}</div>
                  <div className="quality-cert-label">{c.label}</div>
                  <div className="quality-cert-description">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const ref = useReveal();
  return (
    <section className="cta-section" aria-label="Call to action">
      <div className="container">
        <div ref={ref} className="reveal" style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', marginBottom: '1rem', color: 'white' }}>
            Looking for a Reliable Pharmaceutical &amp; Chemical Manufacturing Partner?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Share your product or sourcing requirement with our team.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/enquiry" className="btn" style={{ background: 'white', color: '#1e6fbf', fontWeight: 700 }}>
              Send an Enquiry <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoStrip() {
  return (
    <div className="info-strip" role="region" aria-label="Company highlights">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0', borderRadius: '0' }}>
          {[
            { v: '5', l: 'GMP-Approved Units', icon: <Factory size={19} /> },
            { v: '900+', l: 'Employees', icon: <Users size={19} /> },
            { v: '6', l: 'Quality Certifications', icon: <BadgeCheck size={19} /> },
            { v: 'Global', l: 'Export Reach', icon: <Globe size={19} /> },
          ].map((s, i) => (
            <div
              key={s.l}
              className="info-stat"
              style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
            >
              <div className="info-stat-icon" aria-hidden="true">{s.icon}</div>
              <div className="info-stat-copy">
                <div className="stat-number">{s.v}</div>
                <div className="info-stat-label">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfoStrip />
      <CertStrip />
      <CompanyProfile />
      <CoreValues />
      <ProductCategories />
      <WhyChooseUs />
      <HerbalProducts />
      <QualitySection />
      <FinalCTA />
    </>
  );
}
