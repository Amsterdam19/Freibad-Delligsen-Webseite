import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
//http://freibad-delligsen.de
export default defineConfig({
  site: 'http://freibad-delligsen.de',
  integrations: [sitemap({
    lastmod: new Date(),
    serialize(item) {
      if (/docs/.test(item.url)) {
        return undefined;
      }
      if (/zeiten/.test(item.url)) {
        item.changefreq = 'weekly';
        item.lastmod = new Date();
        item.priority = 0.9;
      }
      if (/preise/.test(item.url)) {
        item.changefreq = 'weekly';
        item.lastmod = new Date();
        item.priority = 0.9;
      }
      if (/veranstaltungen/.test(item.url)) {
        item.changefreq = 'weekly';
        item.lastmod = new Date();
        item.priority = 0.9;
      }
      if (/galerie/.test(item.url)) {
        item.lastmod = new Date();
        item.priority = 0.9;
      }
      if (/neues/.test(item.url)) {
        item.changefreq = 'weekly';
        item.lastmod = new Date();
        item.priority = 0.7;
      }
      if (/impressum/.test(item.url)) {
        item.priority = 0.4;
      }
      if (/mitglied/.test(item.url)) {
        item.priority = 0.4;
      }
      if (/ueber/.test(item.url)) {
        item.priority = 0.4;
      }
      return item;
    },
  }), tailwind()]
});