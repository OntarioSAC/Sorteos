import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import enTranslation from './translate/en.json';
import esTranslation from './translate/es.json';

i18next.init({
  resources: {
    en: {
      translation: enTranslation
    },
    es: {
      translation: esTranslation
    }
  },
  fallbackLng: 'es',
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage']
  },
  interpolation: {
    escapeValue: false
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>,
);

reportWebVitals();
