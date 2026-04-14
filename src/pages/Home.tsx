import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, BedDouble, Bath, CalendarDays, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { villa } from '../data/villa';

export default function Home() {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, label: t('highlights.guests'), value: villa.guests },
    { icon: BedDouble, label: t('highlights.bedrooms'), value: villa.bedrooms },
    { icon: Bath, label: t('highlights.bathrooms'), value: villa.bathrooms },
    { icon: CalendarDays, label: t('highlights.minStay'), value: `${villa.minStay} night` },
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.22),transparent_30%),linear-gradient(to_bottom,rgba(15,23,42,0.8),rgba(2,6,23,0.96))]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-1 text-sm text-teal-200">
              {t('hero.badge')}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              {t('hero.subtitle')}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/booking"
                className="rounded-full bg-teal-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
              >
                {t('hero.ctaPrimary')}
              </Link>
              <Link
                to="/villa-details"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {t('hero.ctaSecondary')}
              </Link>
              <span className="text-sm text-teal-200">{t('hero.price')}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Icon className="mb-4 h-6 w-6 text-teal-600" />
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </div>
          );
        })}
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">{t('section.amenities')}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {villa.amenities.map((amenity) => (
              <div key={amenity} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-teal-600" />
                <span className="text-sm text-slate-700">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-sm">
          <h2 className="text-2xl font-bold">{t('section.discover')}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Villa Mzungu is designed for comfort, simplicity, and coastal charm. It works well for couples, small families, and short escapes with a one-night minimum stay.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            The location places guests close to the beauty of Diani Beach, local dining, and the wider experience of Kwale County.
          </p>
          <Link
            to="/about-diani"
            className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
          >
            Discover Diani
          </Link>
        </div>
      </section>
    </div>
  );
}