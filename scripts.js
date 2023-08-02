// configuration.js

const company = 'ACME Inc.'
const year = 2022

// scripts.js

import { company, year } from './configuration';

const message = `© ${company} (${year})`;

// used EventListner //
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('footer').innerText = message;
  });
