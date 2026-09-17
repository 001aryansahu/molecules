import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, MessageSquare } from 'lucide-react';

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

const OFFICES = [
  {
    flag: '🇮🇳',
    label: 'Headquarter',
    city: 'Mumbai, India',
    address: '111, A-Wing / KBC, Ghatkopar, Mumbai — 400075, Maharashtra, India.',
    color: '#1e6fbf',
    primary: true,
  },
  {
    flag: '🇦🇪',
    label: 'Dubai Representative Office',
    city: 'Dubai, U.A.E.',
    address: 'Plot – 477, New Afra, Al Muraqqabat, Dubai, U.A.E.',
    color: '#0d9488',
    primary: false,
  },
  {
    flag: '🇺🇸',
    label: 'USA Representative Office',
    city: 'California, USA',
    address: '21200, Kittridge Street, California – 91303.',
    color: '#7c3aed',
    primary: false,
  },
];

const CONTACTS = [
  {
    section: 'General Contact',
    items: [
      { label: 'Mobile', value: '+91 88288 37004', href: 'tel:+918828837004', icon: <Phone size={16} color="#1e6fbf" /> },
      { label: 'Mobile', value: '+91 8291344258', href: 'tel:+918291344258', icon: <Phone size={16} color="#1e6fbf" /> },
    ],
  },
  {
    section: 'Domestic Enquiries',
    items: [
      { label: 'Email', value: 'domestic@themoleculez.com', href: 'mailto:domestic@themoleculez.com', icon: <Mail size={16} color="#1e6fbf" /> },
    ],
  },
  {
    section: 'Export Enquiries',
    items: [
      { label: 'Email', value: 'exports@themoleculez.com', href: 'mailto:exports@themoleculez.com', icon: <Mail size={16} color="#0d9488" /> },
      { label: 'Email', value: 'commercial@themoleculez.com', href: 'mailto:commercial@themoleculez.com', icon: <Mail size={16} color="#0d9488" /> },
    ],
  },
  {
    section: 'Purchase Department',
    items: [
      { label: 'Email', value: 'local@themoleculez.com', href: 'mailto:local@themoleculez.com', icon: <Mail size={16} color="#7c3aed" /> },
    ],
  },
  {
    section: 'Skype',
    items: [
      { label: 'Skype ID', value: 'exports@themoleculez.com', href: 'skype:exports@themoleculez.com?call', icon: <MessageSquare size={16} color="#0284c7" /> },
    ],
  },
];

export default function Contact() {
  const offices = useReveal();
  const contacts = useReveal();

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: '1rem' }}>
            <Link to="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Contact Us</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', marginBottom: '0.75rem' }}>Contact Us</h1>
          <p style={{ fontSize: '1.05rem', maxWidth: '560px' }}>
            Reach out to our team for product enquiries, export information or any business enquiry.
          </p>
        </div>
      </div>

      {/* Office Locations */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Global Presence</div>
            <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.85rem)' }}>Our Office Locations</h2>
            <p style={{ color: '#64748b', marginTop: '0.75rem', maxWidth: '480px', margin: '0.75rem auto 0' }}>
              Headquartered in Mumbai with representative offices in Dubai and the USA.
            </p>
          </div>
          <div ref={offices} className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {OFFICES.map((o) => (
              <div key={o.city} className="location-card" style={{ borderTop: `4px solid ${o.color}` }}>
                <div className="location-flag" style={{ background: `${o.color}15` }}>
                  <span style={{ fontSize: '1.75rem' }}>{o.flag}</span>
                </div>
                <div style={{ display: 'inline-block', padding: '0.2rem 0.75rem', background: `${o.color}15`, color: o.color, borderRadius: '999px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '0.625rem' }}>
                  {o.label}
                </div>
                <h3 style={{ fontSize: '1.05rem', color: '#0a2342', marginBottom: '0.625rem' }}>{o.city}</h3>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#64748b', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  <MapPin size={15} style={{ flexShrink: 0, marginTop: '2px', color: '#94a3b8' }} />
                  {o.address}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="section section-bg">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            <div ref={contacts} className="reveal">
              <div className="section-label">Contact Details</div>
              <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.85rem)', marginBottom: '0.75rem' }}>Get in Touch</h2>
              <div className="divider" />
              <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.9rem' }}>
                Use the contact details below to reach the relevant department. For product enquiries, we recommend using the Enquiry form for faster processing.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {CONTACTS.map((section) => (
                  <div key={section.section}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.625rem' }}>
                      {section.section}
                    </div>
                    <div style={{ background: 'white', borderRadius: '0.75rem', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                      {section.items.map((item, idx) => (
                        <a
                          key={item.value}
                          href={item.href}
                          style={{
                            display: 'flex', alignItems: 'center', gap: '0.875rem',
                            padding: '0.875rem 1rem', textDecoration: 'none',
                            borderBottom: idx < section.items.length - 1 ? '1px solid #f1f5f9' : 'none',
                            transition: 'background 0.2s',
                            color: '#0f172a',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = '#f8fafc')}
                          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                        >
                          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            {item.icon}
                          </div>
                          <div>
                            <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '0.1rem' }}>{item.label}</div>
                            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#0a2342' }}>{item.value}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enquiry prompt */}
            <div>
              <div style={{ background: '#0a2342', borderRadius: '1.25rem', padding: '2.5rem', color: 'white', marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Send a Product Enquiry</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  For product specifications, availability, pricing or export requirements, please use our dedicated enquiry form for faster processing.
                </p>
                <Link to="/enquiry" className="btn btn-primary" style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}>
                  Send an Enquiry <ArrowRight size={16} />
                </Link>
              </div>

              {/* WhatsApp */}
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '1rem', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </div>
                  <h4 style={{ color: '#14532d', fontSize: '0.95rem' }}>Chat on WhatsApp</h4>
                </div>
                <p style={{ color: '#166534', fontSize: '0.845rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                  For quick questions or to start a conversation, chat with our team on WhatsApp.
                </p>
                <a
                  href="https://wa.me/918828837004"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 1.25rem', background: '#25d366', color: 'white', borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}
                >
                  Open WhatsApp Chat <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
