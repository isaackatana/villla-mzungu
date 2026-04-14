import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/villa-details', label: t('nav.villa') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/booking', label: t('nav.booking') },
    { to: '/about-diani', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-bold tracking-wide">
          Villa Mzungu
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition hover:text-teal-300 ${
                  isActive ? 'text-teal-300' : 'text-white/90'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Link
            to="/booking"
            className="rounded-full bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
          >
            {t('hero.ctaPrimary')}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-lg p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <div className="space-y-4 px-4 py-4">
            <LanguageSwitcher />
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-2 py-2 text-sm text-white/90 transition hover:bg-white/5"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <Link
              to="/booking"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full bg-teal-400 px-4 py-3 text-center text-sm font-semibold text-slate-950"
            >
              {t('hero.ctaPrimary')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}