import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        about: resolve(__dirname, 'about.html'),
        accountancy: resolve(__dirname, 'accountancy.html'),
        hr: resolve(__dirname, 'hr-services.html'),
        sole_traders: resolve(__dirname, 'sole-traders.html'),
        limited_companies: resolve(__dirname, 'limited-companies.html'),
        start_ups: resolve(__dirname, 'start-ups.html'),
        xero: resolve(__dirname, 'xero-bookkeeping.html'),
        xero_maintenance: resolve(__dirname, 'xero-maintenance.html'),
        why_xero: resolve(__dirname, 'why-xero.html'),
        hub: resolve(__dirname, 'resource-hub.html'),
        privacy: resolve(__dirname, 'privacy-policy.html'),
        success: resolve(__dirname, 'success.html'),
        expenses_guide: resolve(__dirname, 'expenses-guide.html'),
        reconcile_guide: resolve(__dirname, 'reconcile-guide.html'),
        branded_invoices_guide: resolve(__dirname, 'branded-invoices-guide.html'),
      }
    }
  }
});
