import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, X } from 'lucide-react';

function useReveal() {
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

const CERTS = [
  {
    label: 'WHO-GMP',
    fullLabel: 'World Health Organization — Good Manufacturing Practice',
    src: '/assets/who.webp',
    alt: 'WHO-GMP Certificate',
    desc: 'WHO-GMP certification validates that our manufacturing processes meet the quality standards established by the World Health Organization for pharmaceutical manufacturing.',
    color: '#1e6fbf',
  },
  {
    label: 'GMP',
    fullLabel: 'Good Manufacturing Practice',
    src: '/assets/gmp.webp',
    alt: 'GMP Certificate',
    desc: 'GMP certification confirms adherence to Good Manufacturing Practice regulations and guidelines, ensuring consistent quality control in our production processes.',
    color: '#0369a1',
  },
  {
    label: 'GLP',
    fullLabel: 'Good Laboratory Practice',
    src: '/assets/glp.webp',
    alt: 'GLP Certificate',
    desc: 'GLP certification demonstrates that our laboratory testing and quality control procedures adhere to internationally recognized standards for laboratory operations.',
    color: '#0d9488',
  },
  {
    label: 'ISO 9001:2015',
    fullLabel: 'ISO Quality Management System',
    src: '/assets/iso.webp',
    alt: 'ISO 9001:2015 Certificate',
    desc: 'ISO 9001:2015 certification confirms our quality management system meets international standards, ensuring consistent product quality and continuous improvement.',
    color: '#7c3aed',
  },
  {
    label: 'Indian FDA',
    fullLabel: 'Central Drugs Standard Control Organisation (CDSCO)',
    src: '/assets/fda.webp',
    alt: 'Indian FDA Certificate',
    desc: 'Indian FDA (CDSCO) approval confirms that our manufacturing facilities and products meet the regulatory standards set by India\'s drug regulatory authority.',
    color: '#d97706',
  },
  {
    label: 'US DMF',
    fullLabel: 'United States Drug Master File',
    src: '/assets/dmf.webp',
    alt: 'US Drug Master File',
    desc: 'US Drug Master Files (DMF) are available for select products including Lidocaine (No. 43316), Povidone Iodine (No. 43341) and Sildenafil Citrate (No. 43340).',
    color: '#dc2626',
  },
];

const QUALITY_PRINCIPLES = [
  'We strive to maintain the highest quality and technology standards in our industry.',
  'We care about our clients\' time and money, ensuring efficient and reliable supply.',
  'We honor our commitments and uphold client trust through consistent performance.',
  'We act with integrity and maintain transparency across all business engagements.',
];

export default function Certificate() {
  const [lightbox, setLightbox] = useState<typeof CERTS[0] | null>(null);
  const intro = useReveal();
  const certsRef = useReveal();
  const principles = useReveal();
  const qualityProcess = useReveal();

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: '1rem' }}>
            <Link to="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Certificate</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '0.75rem' }}>
            <Shield size={32} color="#60a5fa" />
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>Quality &amp; Certifications</h1>
          </div>
          <p style={{ fontSize: '1.05rem', maxWidth: '600px' }}>
            Our certifications reflect our commitment to quality, compliance and continuous improvement in pharmaceutical manufacturing.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div ref={intro} className="reveal" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Quality</div>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: '0.75rem' }}>Certified. Compliant. Trusted.</h2>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #1e6fbf, #0d9488)', borderRadius: '2px', margin: '0 auto 1.5rem' }} />
            <p style={{ color: '#334155', lineHeight: 1.85, fontSize: '0.975rem' }}>
              Quality is our prime concern. We are able to maintain high quality standards through our committed personnel and sound infrastructure. We ensure that the finest quality material is used for our products and provide Material Test Certificates with every supply.
            </p>
          </div>

          {/* Cert grid */}
          <div ref={certsRef} className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {CERTS.map((c) => (
              <div
                key={c.label}
                className="card"
                style={{ padding: '1.75rem', cursor: 'pointer', position: 'relative', overflow: 'visible' }}
                onClick={() => setLightbox(c)}
                role="button"
                tabIndex={0}
                aria-label={`View ${c.label} certificate details`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightbox(c); }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                  <div style={{ width: '80px', height: '80px', flexShrink: 0, borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid #e2e8f0', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={c.src}
                      alt={c.alt}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, color: '#0a2342', fontSize: '1rem', marginBottom: '0.3rem' }}>{c.label}</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '0.625rem', lineHeight: 1.5 }}>{c.fullLabel}</div>
                    <div style={{ width: '28px', height: '3px', background: c.color, borderRadius: '2px' }} />
                  </div>
                </div>
                <p style={{ marginTop: '1rem', fontSize: '0.845rem', color: '#64748b', lineHeight: 1.7 }}>{c.desc}</p>
                <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8rem', fontWeight: 600, color: c.color }}>
                  <span>Click to view certificate</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality principles */}
      <section className="section section-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div ref={principles} className="reveal">
              <div className="section-label">Our Principles</div>
              <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.85rem)', marginBottom: '0.75rem' }}>Quality Objectives</h2>
              <div className="divider" />
              <p style={{ color: '#334155', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                We consider three elements essential for overall quality: independence and objectivity, technical and scientific quality, and practical benefits to our clients.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {QUALITY_PRINCIPLES.map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.875rem 1rem', background: 'white', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg, #1e6fbf, #0d9488)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.7rem', fontWeight: 700, color: 'white' }}>
                      {i + 1}
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.65 }}>{p}</p>
                  </div>
                ))}
              </div>
            </div>
            <div ref={qualityProcess} className="reveal-delay-2">
              <div style={{ background: '#0a2342', borderRadius: '1.25rem', padding: '2.5rem', color: 'white' }}>
                <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1rem' }}>Quality Control Process</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Certification and Supplementary Testing',
                    'Raw Material Inspection',
                    'In-Process Quality Control',
                    'Machining and Dimensional Control',
                    'Process Control Systems',
                    'Finishing and Final Inspection',
                    'Material Test Certificate with Supply',
                  ].map((step, i) => (
                    <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.625rem 0', borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(30,111,191,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.7rem', fontWeight: 700, color: '#60a5fa' }}>
                        {i + 1}
                      </div>
                      <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.label} certificate`}
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => { if (e.key === 'Escape') setLightbox(null); }}
          tabIndex={0}
        >
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              style={{ position: 'absolute', top: '-3rem', right: 0, background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white' }}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <img src={lightbox.src} alt={lightbox.alt} className="lightbox-img" />
            <div style={{ color: 'white', fontWeight: 700, fontSize: '1rem', textAlign: 'center' }}>{lightbox.fullLabel}</div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: '1rem' }}>
              Ready to Work with a Certified Manufacturer?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
              Contact our team to discuss your product requirements and quality expectations.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/enquiry" className="btn" style={{ background: 'white', color: '#1e6fbf', fontWeight: 700 }}>
                Send an Enquiry <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
