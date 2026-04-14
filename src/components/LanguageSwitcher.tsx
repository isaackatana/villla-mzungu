import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'sw', label: 'SW' },
  ];

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur">
      {languages.map((language) => {
        const active = i18n.language === language.code;

        return (
          <button
            key={language.code}
            type="button"
            onClick={() => void i18n.changeLanguage(language.code)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              active
                ? 'bg-white text-slate-900'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}