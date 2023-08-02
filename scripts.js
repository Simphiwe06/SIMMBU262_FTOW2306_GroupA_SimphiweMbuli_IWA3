// configuration.js

const company = 'ACME Inc.'
const year = 2022
export { company, year };

// scripts.js

import { company, year } from './configuration';

const message = `© ${company} (${year})`;

// used EventListner //
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('footer').innerText = message;
  });
