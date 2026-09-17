import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2, Building2, ChevronRight } from 'lucide-react';

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


function useRevealGrid() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// const UNITS = [
//   { unit: 'Unit 1', location: 'Ankleshwar, G.I.D.C., Gujarat, India', status: 'GMP Approved', icon: '🏭' },
//   { unit: 'Unit 2', location: 'Ankleshwar, G.I.D.C., Gujarat, India', status: 'GMP Approved', icon: '🏭' },
//   { unit: 'Unit 3', location: 'Ahmedabad, G.I.D.C., Gujarat, India', status: 'GMP Approved', icon: '🏭' },
//   { unit: 'Unit 4', location: 'Gandhinagar, Gujarat, India', status: 'GMP Approved', icon: '🏭' },
//   { unit: 'Unit 5', location: 'Banaskantha, G.I.D.C., Gujarat, India', status: 'GMP Approved', icon: '🏭' },
// ];

const UNITS = [
  {
    unit: 'Unit 1',
    location: 'Ankleshwar, G.I.D.C., Gujarat, India',
    status: 'GMP Approved',
    icon: '🏭',
    image:
      'https://images.pexels.com/photos/27793707/pexels-photo-27793707.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
  },
  {
    unit: 'Unit 2',
    location: 'Ankleshwar, G.I.D.C., Gujarat, India',
    status: 'GMP Approved',
    icon: '🏭',
    image:
      'https://images.pexels.com/photos/38336747/pexels-photo-38336747.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
  },
  {
    unit: 'Unit 3',
    location: 'Ahmedabad, G.I.D.C., Gujarat, India',
    status: 'GMP Approved',
    icon: '🏭',
    image:
      'https://images.pexels.com/photos/5953827/pexels-photo-5953827.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
  },
  {
    unit: 'Unit 4',
    location: 'Gandhinagar, Gujarat, India',
    status: 'GMP Approved',
    icon: '🏭',
    image:
      'https://images.pexels.com/photos/33514501/pexels-photo-33514501.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
  },
  {
    unit: 'Unit 5',
    location: 'Banaskantha, G.I.D.C., Gujarat, India',
    status: 'GMP Approved',
    icon: '🏭',
    image:
      'https://images.pexels.com/photos/8246487/pexels-photo-8246487.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
  },
];


// const units = [
//   {
//     unit: "Unit 1",
//     location: "Ankleshwar G.I.D.C., Gujarat, India",
//     image: "https://images.pexels.com/photos/27793707/pexels-photo-27793707.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
//   },
//   {
//     unit: "Unit 2",
//     location: "Ankleshwar G.I.D.C., Gujarat, India",
//     image: "https://images.pexels.com/photos/38336747/pexels-photo-38336747.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
//   },
//   {
//     unit: "Unit 3",
//     location: "Ahmedabad G.I.D.C., Gujarat, India",
//     image: "https://images.pexels.com/photos/5953827/pexels-photo-5953827.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
//   },
//   {
//     unit: "Unit 4",
//     location: "Gandhinagar, Gujarat, India",
//     image: "https://images.pexels.com/photos/33514501/pexels-photo-33514501.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
//   },
//   {
//     unit: "Unit 5",
//     location: "Banaskantha G.I.D.C., Gujarat, India",
//     image: "https://images.pexels.com/photos/8246487/pexels-photo-8246487.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
//   },
// ];


const UNIT_IMAGES = [
  { src: '/assets/facility-lab.webp', alt: 'unit 1', label: 'Unit 1' },
  { src: '/assets/units/unit21.jpg', alt: 'Unit 2', label: 'Unit 2' },
  { src: '/assets/units/unit22.webp', alt: 'Unit 3', label: 'Unit 3' },
  { src: '/assets/units/unit23.webp', alt: 'Unit 4', label: 'Unit 4' },
  { src: '/assets/units/unit24.jpg', alt: 'Unit 5', label: 'Unit 5' },
];

const QUALITY_POINTS = [
  { title: 'Independence & Objectivity', desc: 'Unbiased quality assessment at every stage of production and supply.' },
  { title: 'Technical & Scientific Quality', desc: 'Rigorous scientific standards underpinning all manufacturing processes.' },
  { title: 'Practical Benefits to Clients', desc: 'Quality systems designed around real customer requirements and regulatory needs.' },
  { title: 'Material Test Certificates', desc: 'Material Test Certificates provided with every product supply.' },
  { title: 'Process Control Systems', desc: 'Systematic process control from raw material receipt to finished product dispatch.' },
  { title: 'Continual Improvement', desc: 'Ongoing review and enhancement of quality processes across all manufacturing units.' },
];




export default function Manufacturing() {
  const intro = useReveal();
  const facilities = useRevealGrid();
  const quality = useRevealGrid();
  const gallery = useRevealGrid();

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb" style={{ marginBottom: '1rem' }}>
            <Link to="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Manufacturing Facility</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', marginBottom: '0.75rem' }}>Manufacturing Facility</h1>
          <p style={{ fontSize: '1.05rem', maxWidth: '600px' }}>
            5 GMP-approved manufacturing units across Gujarat, India — built for quality, consistency and dependable supply.
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div ref={intro} className="reveal">
              <div className="section-label">Manufacturing Overview</div>
              <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.85rem)', marginBottom: '0.75rem' }}>Our Manufacturing Infrastructure</h2>
              <div className="divider" />
              <p style={{ color: '#334155', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '0.975rem' }}>
                The Moleculez operates across five GMP-approved manufacturing facilities strategically located within the Gujarat Industrial Development Corporation (G.I.D.C.) zones — one of India's premier pharmaceutical and chemical manufacturing regions.
              </p>
              <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Each unit is certified and operated to comply with Good Manufacturing Practice (GMP) standards, ensuring consistent product quality and regulatory compliance across our entire product portfolio.
              </p>
              {[
                '5 GMP-Approved Manufacturing Units',
                'Gujarat, India — Premier Pharma Zone',
                'WHO-GMP, GMP, GLP Compliant',
                '900+ Qualified Personnel',
              ].map((p) => (
                <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle2 size={15} color="#0d9488" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.875rem', color: '#334155' }}>{p}</span>
                </div>
              ))}
            </div>

            <div className=" reveal-delay-2">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { v: '5', l: 'GMP Units', c: '#1e6fbf' },
                  { v: '900+', l: 'Employees', c: '#0d9488' },
                  { v: '6', l: 'Certifications', c: '#7c3aed' },
                  { v: 'Gujarat', l: 'Prime Location', c: '#d97706' },
                ].map(s => (
                  <div key={s.l} style={{ textAlign: 'center', padding: '1.5rem 1rem', background: '#f8fafc', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '2rem', color: s.c, lineHeight: 1 }}>{s.v}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500, marginTop: '0.5rem' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className=" reveal-delay-3">
              <div className="w-full overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85"
  alt="Man in blue scrubs standing in a manufacturing facility"
  className="w-full h-[320px] sm:h-[380px] lg:h-[440px] object-cover transition-transform duration-700 hover:scale-105"
  
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Facility Units */}
      {/* <section className="section section-bg">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>GMP Approved</div>
            <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.85rem)' }}>Manufacturing Units</h2>
            <p style={{ color: '#64748b', marginTop: '0.75rem', maxWidth: '480px', margin: '0.75rem auto 0' }}>
              All five manufacturing units operate under GMP certification, located across Gujarat's industrial zones.
            </p>
          </div>
          <div ref={facilities} className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
           {UNITS.map((u) => (
  <div
    key={u.unit}
    className="group relative h-[320px] overflow-hidden rounded-2xl shadow-lg"
  >
    
    <img
      src={u.image}
      alt={`${u.unit} manufacturing facility`}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
    />

   
    <div className="absolute inset-0 bg-gradient-to-t from-[#06182d] via-[#06182d]/55 to-transparent" />

    
    <div className="absolute left-5 top-5">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-md backdrop-blur-sm">
        <CheckCircle2 size={12} />
        {u.status}
      </span>
    </div>

    
    <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-[#0a2342]/80 text-white shadow-lg backdrop-blur-md">
      <Building2 size={21} />
    </div>

    
    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
      <div className="mb-2 h-[2px] w-10 bg-cyan-400 transition-all duration-300 group-hover:w-16" />

      <h3 className="mb-2 font-['Plus_Jakarta_Sans'] text-xl font-bold tracking-tight">
        {u.unit}
      </h3>

      <div className="flex items-start gap-2 text-sm leading-relaxed text-slate-200">
        <MapPin
          size={15}
          className="mt-1 shrink-0 text-cyan-300"
        />
        <span>{u.location}</span>
      </div>
    </div>
  </div>
))}
          </div>
        </div>
      </section> */}

      <section className="section section-bg">
  <div className="container">

    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <div
        className="section-label"
        style={{ justifyContent: 'center' }}
      >
        GMP Approved
      </div>

      <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.85rem)' }}>
        Manufacturing Units
      </h2>

      <p
        style={{
          color: '#64748b',
          marginTop: '0.75rem',
          maxWidth: '480px',
          margin: '0.75rem auto 0',
        }}
      >
        All five manufacturing units operate under GMP certification,
        located across Gujarat's industrial zones.
      </p>
    </div>

    <div
      ref={facilities}
      className="stagger-children grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
    {UNITS.map((u) => (
  <article
    key={u.unit}
    className="
      group relative isolate h-[360px] overflow-hidden
      rounded-[20px] border border-slate-200/80
      bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)]
      transition-all duration-500
      hover:-translate-y-1
      hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)]
    "
  >
    {/* Background Image */}
    <img
      src={u.image}
      alt={`${u.unit} manufacturing facility`}
      loading="lazy"
      className="
        absolute inset-0 h-full w-full object-cover
        transition-transform duration-700 ease-out
        group-hover:scale-105
      "
    />

    {/* Soft image overlay */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-b
        from-slate-950/10
        via-slate-950/5
        to-[#06182d]/90
      "
    />

    {/* Top Status */}
    <div className="absolute left-5 top-5 z-10">
      <span
        className="
          inline-flex items-center gap-1.5
          rounded-full
          border border-white/60
          bg-white/95
          px-3 py-1.5
          text-[11px] font-bold tracking-wide
          text-emerald-700
          shadow-sm
          backdrop-blur-md
        "
      >
        <CheckCircle2 size={12} strokeWidth={2.5} />
        {u.status}
      </span>
    </div>

    {/* Facility Icon */}
    <div
      className="
        absolute right-5 top-5 z-10
        flex h-11 w-11 items-center justify-center
        rounded-xl
        border border-white/20
        bg-[#08213d]/90
        text-white
        shadow-lg
        backdrop-blur-md
        transition-all duration-300
        group-hover:bg-[#0d9488]
      "
    >
      <Building2 size={20} strokeWidth={1.8} />
    </div>

    {/* Bottom Information */}
    <div
      className="
        absolute inset-x-0 bottom-0 z-10
        p-5
      "
    >
      <div
        className="
          flex h-auto flex-col
          justify-between gap-3
          border border-white/15
          bg-[#06182d]/75
          p-5
          shadow-xl
          backdrop-blur-md
        "
      >
        {/* Accent line */}
        <div
          className="
            h-0.5 w-8 rounded-full
            bg-cyan-400
            transition-all duration-300
            group-hover:w-28
          "
        />

        {/* Unit */}
        <h3
          className="
            font-['Plus_Jakarta_Sans']
            text-xl font-bold
            leading-tight
            tracking-tight
            text-white!
          "
        >
          {u.unit}
        </h3>

        {/* Location */}
        <div
          className="
            flex items-start gap-2
            text-[14px] leading-relaxed
            text-slate-200
          "
        >
          <MapPin
            size={15}
            strokeWidth={2}
            className="mt-[-0.125rem] shrink-0 text-cyan-300"
          />

          <span className="block leading-relaxed">{u.location}</span>
        </div>
      </div>
    </div>
  </article>
))}
    </div>

  </div>
</section>  








 
      {/* <section className="relative isolate px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.10),_transparent_65%)]" />

        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 sm:text-sm">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
                <CheckIcon />
              </span>
              GMP Approved
            </div>
            <h1 className="text-3xl font-bold tracking-[-0.035em] text-[#08233f] sm:text-4xl lg:text-[2.75rem]">
              Manufacturing Units
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Five GMP-certified manufacturing facilities, strategically located across Gujarat's key industrial zones.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6">
            {units.map((unit, index) => (
              <article
                key={unit.unit}
                className={`group relative isolate min-h-[290px] overflow-hidden rounded-2xl bg-[#08233f] shadow-[0_18px_45px_-24px_rgba(8,35,63,0.65)] ring-1 ring-slate-900/5 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_-24px_rgba(8,35,63,0.75)] sm:min-h-[330px] lg:min-h-[360px] ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
              >
                <img
                  src={unit.image}
                  alt={`${unit.unit} manufacturing facility`}
                  loading="lazy"
                  className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061a31] via-[#061a31]/45 to-slate-950/10 transition-colors duration-500 group-hover:via-[#061a31]/35" />
                <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-[linear-gradient(to_top,rgba(6,26,49,0.98),rgba(6,26,49,0.68),transparent)]" />

                <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold tracking-wide text-emerald-700 shadow-sm ring-1 ring-black/5 backdrop-blur-md sm:text-xs">
                    <CheckIcon />
                    GMP APPROVED
                  </span>
                </div>

                <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-[#08233f]/85 text-white shadow-lg backdrop-blur-md transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-cyan-500 sm:right-5 sm:top-5 sm:h-12 sm:w-12">
                  <BuildingIcon />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <div className="mb-3 h-0.5 w-10 bg-cyan-400 transition-all duration-500 group-hover:w-16" />
                  <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{unit.unit}</h2>
                  <div className="mt-2 flex items-start gap-2 text-sm leading-5 text-slate-200 sm:text-[15px]">
                    <span className="text-cyan-300"><PinIcon /></span>
                    <span>{unit.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}
 


      {/* Gallery */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Facility Gallery</div>
            <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.85rem)' }}>Our Facilities</h2>
          </div>
          <div ref={gallery} className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {UNIT_IMAGES.map((img) => (
              <div key={img.label} style={{ borderRadius: '0.875rem', overflow: 'hidden', position: 'relative', boxShadow: '0 4px 16px rgba(10,35,66,0.1)' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.background = '#e2e8f0';
                    (e.currentTarget as HTMLImageElement).style.minHeight = '180px';
                  }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(6,21,41,0.75))', padding: '1.5rem 1rem 0.75rem' }}>
                  <span style={{ color: 'white', fontWeight: 600, fontSize: '0.875rem' }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="section" style={{ background: '#0a2342' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', color: '#60a5fa' }}>Quality Standards</div>
            <h2 style={{ color: 'white', fontSize: 'clamp(1.3rem, 3vw, 1.85rem)' }}>Quality &amp; Process</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.75rem', maxWidth: '500px', margin: '0.75rem auto 0' }}>
              Quality is our prime concern. We maintain high standards through committed personnel and sound infrastructure.
            </p>
          </div>
          <div ref={quality} className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {QUALITY_POINTS.map((q) => (
              <div key={q.title} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.875rem', padding: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} color="#0d9488" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '0.375rem' }}>{q.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.845rem', lineHeight: 1.7 }}>{q.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-page links */}
      <section className="section section-bg">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.85rem)' }}>Explore Our Products</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { label: 'Antibacterial', desc: 'Browse antibacterial products', href: '/products/antibacterial', color: '#1e6fbf' },
              { label: 'Oncology', desc: 'Browse oncology products', href: '/products/oncology', color: '#7c3aed' },
              { label: 'Nutraceutical & Herbal', desc: 'Browse nutraceutical and herbal products', href: '/products/nutraceutical-and-herbal', color: '#16a34a' },
            ].map((l) => (
              <Link key={l.href} to={l.href} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '1.75rem', cursor: 'pointer' }}>
                  <div style={{ width: '44px', height: '4px', background: l.color, borderRadius: '2px', marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem', color: '#0a2342' }}>{l.label}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>{l.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.85rem', fontWeight: 600, color: l.color }}>
                    View Products <ChevronRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: '1rem' }}>
              Partner with a Quality-Driven Manufacturer
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
              Connect with our team to discuss your manufacturing or sourcing requirements.
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
