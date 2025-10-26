import { useEffect, useState } from 'react';

const links = [
  { label: 'Manifesto', href: '#intro' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setOpen((value) => !value);
  const closeMenu = () => setOpen(false);

  return (
    <header className="relative z-50 w-full">
      <div className="flex items-center justify-between gap-6">
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.55em] text-primary/70">
            Astra Noir Studio
          </span>
          <span className="mt-1 text-[0.65rem] uppercase tracking-[0.45em] text-white/50">
            Multimedia Futures
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-primary/60 hover:text-primary md:hidden"
        >
          <span
            className={`pointer-events-none absolute h-0.5 w-6 bg-current transition-transform duration-300 ease-out ${
              open ? 'translate-y-0 rotate-45' : '-translate-y-2'
            }`}
          />
          <span
            className={`pointer-events-none absolute h-0.5 w-6 bg-current transition-transform duration-300 ease-out ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`pointer-events-none absolute h-0.5 w-6 bg-current transition-transform duration-300 ease-out ${
              open ? 'translate-y-0 -rotate-45' : 'translate-y-2'
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col md:hidden">
          <div className="absolute inset-0 bg-[#03040a]/95 backdrop-blur-xl" aria-hidden="true" />
          <nav className="relative z-10 flex flex-1 flex-col items-center justify-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="nav-link text-base tracking-[0.6em]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-12 text-center text-xs uppercase tracking-[0.4em] text-white/40">
              Booking reels, immersive installations &amp; live visuals
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
