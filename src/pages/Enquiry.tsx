import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, Loader, MailCheck, ShieldCheck } from 'lucide-react';

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

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  quantity: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || 'https://formsubmit.co/ajax/aryansahu0010@gmail.com';

const COUNTRIES = [
  '', 'India', 'United States', 'United Arab Emirates', 'United Kingdom', 'Germany', 'France',
  'Australia', 'Canada', 'China', 'Japan', 'South Korea', 'Singapore', 'Malaysia', 'Thailand',
  'Indonesia', 'Brazil', 'South Africa', 'Nigeria', 'Kenya', 'Saudi Arabia', 'Qatar', 'Other',
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  if (!data.email.trim()) errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email address.';
  if (!data.phone.trim()) errors.phone = 'Phone number is required.';
  if (!data.product.trim()) errors.product = 'Product or requirement is required.';
  if (!data.message.trim()) errors.message = 'Message is required.';
  return errors;
}

export default function Enquiry() {
  const formRef = useReveal();
  const [form, setForm] = useState<FormData>({
    name: '', company: '', email: '', phone: '', country: '',
    product: '', quantity: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstErr = document.querySelector('.form-control.error') as HTMLElement;
      firstErr?.focus();
      return;
    }
    setStatus('loading');
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...form,
          _subject: `New The Moleculez Enquiry — ${form.product}`,
          _template: 'table',
          _url: window.location.href,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error('Form submission failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setForm({ name: '', company: '', email: '', phone: '', country: '', product: '', quantity: '', message: '' });
    setErrors({});
    setStatus('idle');
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: '1rem' }}>
            <Link to="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Enquiry</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', marginBottom: '0.75rem' }}>Send Us Your Requirement</h1>
          <p style={{ fontSize: '1.05rem', maxWidth: '560px' }}>
            Share your product or sourcing requirement and our team will get back to you promptly.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            {/* Info */}
            <div>
              <div className="section-label">Enquiry</div>
              <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', marginBottom: '0.75rem' }}>How We Can Help</h2>
              <div className="divider" />
              <p style={{ color: '#334155', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Whether you are sourcing a specific API, pharmaceutical intermediate or herbal extract, our team is ready to assist with specifications, availability, pricing and supply terms.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { title: 'Product Enquiries', desc: 'APIs, intermediates, herbal extracts, PTCs' },
                  { title: 'Export Enquiries', desc: 'exports@themoleculez.com' },
                  { title: 'Domestic Enquiries', desc: 'domestic@themoleculez.com' },
                  { title: 'Commercial', desc: 'commercial@themoleculez.com' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: '0.875rem', padding: '1rem', background: '#f8fafc', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
                    <CheckCircle2 size={18} color="#0d9488" style={{ flexShrink: 0, marginTop: '1px' }} />
                    <div>
                      <div style={{ fontWeight: 600, color: '#0a2342', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</div>
                      <div style={{ fontSize: '0.845rem', color: '#64748b' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2rem', padding: '1.25rem', background: '#0a2342', borderRadius: '0.875rem', color: 'white' }}>
                <div style={{ fontWeight: 700, marginBottom: '0.625rem', fontSize: '0.9rem' }}>Direct Contact</div>
                <a href="tel:+918828837004" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.875rem', display: 'block', marginBottom: '0.25rem' }}>+91 88288 37004</a>
                <a href="tel:+918291344258" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>+91 8291344258</a>
                <a href="mailto:exports@themoleculez.com" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.875rem' }}>exports@themoleculez.com</a>
              </div>
            </div>

            {/* Form */}
            <div ref={formRef} className="reveal">
              {status === 'success' ? (
                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '1rem', padding: '3rem 2rem', textAlign: 'center' }}>
                  <CheckCircle2 size={56} color="#16a34a" style={{ margin: '0 auto 1rem' }} />
                  <h3 style={{ color: '#15803d', marginBottom: '0.75rem' }}>Enquiry Sent Successfully!</h3>
                  <p style={{ color: '#166534', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                    Thank you for your enquiry. Our team will review your requirement and get back to you shortly.
                  </p>
                  <button onClick={reset} className="btn btn-primary" style={{ margin: '0 auto' }}>
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 16px rgba(10,35,66,0.07)' }}>
                  <div className="form-heading-row"><div><h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Enquiry Form</h3><p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: 0 }}>Your requirement is sent to the configured enquiry mailbox.</p></div><div className="form-secure-badge"><MailCheck size={15} /> Email enabled</div></div>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', margin: '1rem 0 1.75rem' }}>
                    Fields marked with <span style={{ color: '#dc2626' }}>*</span> are required.
                  </p>

                  {status === 'error' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.875rem 1rem', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '0.625rem', marginBottom: '1.25rem' }}>
                      <AlertCircle size={16} color="#dc2626" />
                      <span style={{ fontSize: '0.875rem', color: '#dc2626' }}>Something went wrong. Please try again or contact us directly.</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate aria-label="Enquiry form">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="enq-name">
                          Full Name <span className="required">*</span>
                        </label>
                        <input id="enq-name" type="text" className={`form-control ${errors.name ? 'error' : ''}`}
                          name="name" placeholder="Your full name" value={form.name} onChange={set('name')} autoComplete="name" />
                        {errors.name && <span className="form-error" role="alert">{errors.name}</span>}
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="enq-company">Company Name</label>
                        <input id="enq-company" type="text" className="form-control"
                          name="company" placeholder="Your company" value={form.company} onChange={set('company')} autoComplete="organization" />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="enq-email">
                          Email Address <span className="required">*</span>
                        </label>
                        <input id="enq-email" type="email" className={`form-control ${errors.email ? 'error' : ''}`}
                          name="email" placeholder="you@company.com" value={form.email} onChange={set('email')} autoComplete="email" />
                        {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="enq-phone">
                          Phone Number <span className="required">*</span>
                        </label>
                        <input id="enq-phone" type="tel" className={`form-control ${errors.phone ? 'error' : ''}`}
                          name="phone" placeholder="+91 00000 00000" value={form.phone} onChange={set('phone')} autoComplete="tel" />
                        {errors.phone && <span className="form-error" role="alert">{errors.phone}</span>}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="enq-country">Country</label>
                        <select id="enq-country" name="country" className="form-control" value={form.country} onChange={set('country')} autoComplete="country-name">
                          {COUNTRIES.map((c) => <option key={c} value={c}>{c || 'Select Country'}</option>)}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="enq-quantity">Quantity / Volume</label>
                        <input id="enq-quantity" type="text" className="form-control"
                          name="quantity" placeholder="e.g. 100 kg / month" value={form.quantity} onChange={set('quantity')} />
                      </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                      <label className="form-label" htmlFor="enq-product">
                        Product / Requirement <span className="required">*</span>
                      </label>
                      <input id="enq-product" type="text" className={`form-control ${errors.product ? 'error' : ''}`}
                        name="product" placeholder="e.g. Lidocaine HCL, Senna Extract, Curcumin 95%…" value={form.product} onChange={set('product')} />
                      {errors.product && <span className="form-error" role="alert">{errors.product}</span>}
                    </div>

                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                      <label className="form-label" htmlFor="enq-message">
                        Message <span className="required">*</span>
                      </label>
                      <textarea
                        id="enq-message" name="message"
                        className={`form-control ${errors.message ? 'error' : ''}`}
                        placeholder="Please describe your requirement, specification, packaging needs or any other relevant details…"
                        rows={5}
                        value={form.message}
                        onChange={set('message')}
                        style={{ resize: 'vertical', minHeight: '120px' }}
                      />
                      {errors.message && <span className="form-error" role="alert">{errors.message}</span>}
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={status === 'loading'}
                      style={{ width: '100%', justifyContent: 'center', padding: '0.875rem', fontSize: '1rem' }}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader size={18} style={{ animation: 'spin 1s linear infinite' }} />
                          Sending Enquiry…
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Enquiry
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
}
