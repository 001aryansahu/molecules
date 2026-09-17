import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, FlaskConical, Star, Globe, CheckCircle2, Building2 } from 'lucide-react';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
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

const CARDS = [
  {
    icon: <FlaskConical size={22} color="#1e6fbf" />,
    title: 'Specialization',
    body: 'We cater to customer-specific requirements and produce tailor-made materials accordingly. Our manufacturing capabilities support custom formulations and product specifications aligned with individual customer needs.',
  },
  {
    icon: <Users size={22} color="#1e6fbf" />,
    title: 'Customer Satisfaction',
    body: 'Our efforts are consistently dedicated to supplying our customers with quality products at competitive prices. We remain consistent with our services and ensure they meet customer needs across every engagement.',
  },
  {
    icon: <Star size={22} color="#1e6fbf" />,
    title: 'Focus',
    body: 'To deliver products in line with customer requirements. We maintain consistent quality and service across our product portfolio, ensuring that every supply meets agreed specifications and timelines.',
  },
  {
    icon: <Globe size={22} color="#1e6fbf" />,
    title: 'Our Mission',
    body: 'We are more interested in long-term cooperation than in short-term gain. We believe in business relationships built on a solid foundation of mutual trust and shared commitment to excellence.',
  },
];

export default function About() {
  const hero = useReveal();
  const overview = useReveal();
  const cards = useRevealGrid();
  const staff = useReveal();
  const staffImages = useReveal();
  const cta = useReveal();

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: '1rem' }}>
            <Link to="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>About Us</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', marginBottom: '0.75rem' }}>About The Moleculez</h1>
          <p style={{ fontSize: '1.05rem', maxWidth: '560px' }}>
            A trusted name in pharmaceutical and chemical manufacturing with a global customer base.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div ref={hero} className="reveal">
              <img
                src="public/assets/companyimg/comimg.avif"
                alt="The Moleculez company overview"
                style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 12px 40px rgba(10,35,66,0.14)', objectFit: 'cover', minHeight: '360px' }}
                loading="eager"
              />
            </div>
            <div ref={overview} className="reveal reveal-delay-2">
              <div className="section-label">Who We Are</div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: '0.75rem' }}>Company Overview</h2>
              <div className="divider" />
              <p style={{ color: '#334155', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1rem' }}>
                The Moleculez is involved in the manufacturing and export of APIs, drug intermediates, phase-transfer catalysts and herbal extracts of high quality for the global market.
              </p>
              <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                With manufacturing infrastructure across five GMP-approved units in Gujarat, India, we are positioned to serve customers across the pharmaceutical, agrochemical and specialty chemical industries with reliable, quality-driven supply.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {[
                  'WHO-GMP Certified',
                  'ISO 9001:2015',
                  'Indian FDA Approved',
                  'US DMF Available',
                  'GMP Compliant',
                  'GLP Certified',
                ].map((badge) => (
                  <span key={badge} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                    padding: '0.3rem 0.75rem', background: '#dbeafe',
                    color: '#1e40af', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600
                  }}>
                    <CheckCircle2 size={12} /> {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-bg">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Principles</div>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>Specialization, Focus &amp; Mission</h2>
            <p style={{ color: '#64748b', marginTop: '0.75rem', maxWidth: '500px', margin: '0.75rem auto 0' }}>
              The foundational values that guide every product, process and customer relationship.
            </p>
          </div>
          <div ref={cards} className="grid-4 stagger-children">
            {CARDS.map((c) => (
              <div key={c.title} className="value-card">
                <div className="value-icon">{c.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.625rem' }}>{c.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.75 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Strength */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div ref={staff} className="reveal">
              <div className="section-label">Our Team</div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: '0.75rem' }}>Staff Strength</h2>
              <div className="divider" />
              <p style={{ color: '#334155', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.975rem' }}>
                Our manufacturing and operational workforce is the backbone of The Moleculez. A team of over 900 dedicated professionals enables us to maintain consistent quality, reliable delivery and responsive customer service across our product range.
              </p>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <div style={{ textAlign: 'center', padding: '1.5rem 2rem', background: '#f1f5f9', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '3rem', color: '#1e6fbf', lineHeight: 1 }}>900</div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 500, marginTop: '0.5rem' }}>Employees</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1.5rem 2rem', background: '#f1f5f9', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '3rem', color: '#0d9488', lineHeight: 1 }}>5</div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 500, marginTop: '0.5rem' }}>GMP Units</div>
                </div>
              </div>
            </div>
            <div ref={staffImages} className="reveal reveal-delay-2">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <img
                  src="/assets/employe.avif"
                  alt="The Moleculez manufacturing staff"
                  style={{ width: '100%', borderRadius: '0.875rem', objectFit: 'cover', height: '220px', boxShadow: '0 4px 16px rgba(10,35,66,0.1)' }}
                  loading="lazy"
                />
                <img
                  src="/assets/emp2.avif"
                  alt="The Moleculez team at work"
                  style={{ width: '100%', borderRadius: '0.875rem', objectFit: 'cover', height: '220px', boxShadow: '0 4px 16px rgba(10,35,66,0.1)', marginTop: '2rem' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing CTA */}
      <section style={{ background: '#f1f5f9', padding: '3.5rem 0', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div ref={cta} className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'linear-gradient(135deg, #0a2342, #1e6fbf)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Building2 size={24} color="white" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Explore Our Manufacturing Facility</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>5 GMP-approved units across Gujarat, India — built for quality and scale.</p>
              </div>
            </div>
            <Link to="/manufacturing" className="btn btn-primary" style={{ flexShrink: 0 }}>
              View Facility <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
