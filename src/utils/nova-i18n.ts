import copy from '@data/i18n/nova.json';

export type NovaLocale = 'pl' | 'en';

export function getNovaCopy(locale: NovaLocale = 'pl') {
  return copy[locale] ?? copy.pl;
}

function withNovaBase(path: string): string {
  const configuredBase = process.env.PUBLIC_BASE_PATH || import.meta.env.BASE_URL;
  const base = configuredBase === '/'
    ? ''
    : `/${configuredBase.replace(/^\/+|\/+$/g, '')}`;
  return `${base}${path}` || '/';
}

export function getNovaLocalePath(locale: NovaLocale): string {
  return withNovaBase(locale === 'en' ? '/' : '/pl/');
}

export function getNovaNavigationPath(href: string, locale: NovaLocale): string {
  if (href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('sms:')) {
    return href;
  }

  const normalized = href.startsWith('/') ? href : `/${href}`;
  if (locale === 'en') return withNovaBase(normalized);
  if (normalized === '/pl/' || normalized.startsWith('/pl/')) return withNovaBase(normalized);
  return withNovaBase(normalized === '/' ? '/pl/' : `/pl${normalized}`);
}
