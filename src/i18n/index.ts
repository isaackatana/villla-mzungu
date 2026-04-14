import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        villa: 'Villa Details',
        gallery: 'Gallery',
        booking: 'Booking',
        about: 'About Diani',
        contact: 'Contact',
      },
      hero: {
        badge: 'Luxury Coastal Escape',
        title: 'A modern stay in the heart of Diani Beach',
        subtitle:
          'Relax in a stylish 2-bedroom villa with pool access, a full kitchen, secure parking, and easy access to the beauty of Kenya’s coastline.',
        ctaPrimary: 'Book Now',
        ctaSecondary: 'Explore Villa',
        price: 'From $72 per night',
      },
      highlights: {
        guests: 'Guests',
        bedrooms: 'Bedrooms',
        bathrooms: 'Bathrooms',
        minStay: 'Min Stay',
      },
      section: {
        amenities: 'Essential comforts for a smooth stay',
        discover: 'Why guests love Villa Mzungu',
      },
      footer: {
        text: 'Villa Mzungu — Diani Beach, Kwale County, Kenya',
      },
    },
  },
  sw: {
    translation: {
      nav: {
        home: 'Nyumbani',
        villa: 'Maelezo ya Villa',
        gallery: 'Picha',
        booking: 'Uhifadhi',
        about: 'Kuhusu Diani',
        contact: 'Wasiliana',
      },
      hero: {
        badge: 'Mapumziko ya Kifahari Pwani',
        title: 'Makazi ya kisasa katikati ya Diani Beach',
        subtitle:
          'Pumzika katika villa ya vyumba 2 yenye bwawa, jiko kamili, maegesho salama, na ukaribu na uzuri wa pwani ya Kenya.',
        ctaPrimary: 'Weka Nafasi',
        ctaSecondary: 'Angalia Villa',
        price: 'Kuanzia $72 kwa usiku',
      },
      highlights: {
        guests: 'Wageni',
        bedrooms: 'Vyumba',
        bathrooms: 'Bafu',
        minStay: 'Kiwango cha chini',
      },
      section: {
        amenities: 'Huduma muhimu kwa ukaaji wa starehe',
        discover: 'Kwa nini wageni wanaipenda Villa Mzungu',
      },
      footer: {
        text: 'Villa Mzungu — Diani Beach, Kwale County, Kenya',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;