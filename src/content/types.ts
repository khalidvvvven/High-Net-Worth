/**
 * Content contract for the site.
 *
 * Every editable piece of copy lives in `site.ts` and conforms to these
 * types. When the approved design moves to WordPress, each interface maps
 * to an options page or a custom post type with the same field names, so
 * templates can be ported without restructuring content.
 */

export interface Address {
  street: string;
  suite: string;
  city: string;
  region: string;
  regionCode: string;
  postalCode: string;
}

export interface Firm {
  name: string;
  legalName: string;
  attorney: string;
  descriptor: string;
  phone: { display: string; href: string };
  fax: { display: string };
  address: Address;
  directionsUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

/** A credential shown in the hero strip and the recognition table. */
export interface Credential {
  id: string;
  /** Short overline, e.g. "Board Certified". */
  label: string;
  /** Primary line, set in the serif. */
  title: string;
  /** Issuing organization. */
  issuer: string;
  /** Selection years, where the honor is annual. */
  years?: string[];
}

export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  /** One sentence for the homepage index. */
  summary: string;
  /** Long-form paragraphs for the Practice Areas page. */
  body: string[];
  /** "Matters commonly include" list. */
  includes: string[];
}

export interface LedgerItem {
  numeral: string;
  title: string;
  detail: string;
}

export interface Presentation {
  year: string;
  title: string;
  venue: string;
}

export interface FactRow {
  term: string;
  detail: string;
}
