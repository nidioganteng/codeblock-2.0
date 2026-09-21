import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { addCollection } from '@iconify/react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import './index.css';
import App from './App.jsx';
import iconCollections from './icons.generated.json';

// Ikon dibundel di dalam aplikasi (lihat scripts/build-icons.mjs), tanpa request ke API Iconify
iconCollections.forEach((collection) => addCollection(collection));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
