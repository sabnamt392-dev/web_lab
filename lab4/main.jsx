import React from 'react'; // Added explicit React import
import { createRoot } from 'react-dom/client';
import App from './App'; // Removed the .jsx extension (it's optional)
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);