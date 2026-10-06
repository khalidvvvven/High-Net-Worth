import type {
  Credential,
  FactRow,
  Firm,
  LedgerItem,
  NavItem,
  PracticeArea,
  Presentation,
} from './types';

/*
 * Sources
 * - Office details: client letterhead and business card.
 * - Education, admission, arbitrator status and presentations: AAML fellow
 *   profile (aaml.org), which the client approved as a biography source.
 * - Honors: client brief. Confirm wording with the issuing organizations
 *   before launch.
 */

export const firm: Firm = {
  name: 'Helen Popich Harris',
  legalName: 'Helen Popich Harris, APLC',
  attorney: 'Helen Popich Harris',
  descriptor: 'Attorney at Law',
  phone: { display: '337.291.6092', href: 'tel:+13372916092' },
  fax: { display: '337.233.5673' },
  address: {
    street: '321 West Main Street',
    suite: 'Suite 2-D',
    city: 'Lafayette',
    region: 'Louisiana',
    regionCode: 'LA',
    postalCode: '70501',
  },
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=321+West+Main+Street+Suite+2-D+Lafayette+LA+70501',
};

export const nav: NavItem[] = [
  { label: 'About Helen', href: '/about' },
  { label: 'Practice Areas', href: '/practice-areas' },
  { label: 'Contact', href: '/contact' },
];

export const credentials: Credential[] = [
  {
    id: 'board-certified',
    label: 'Board Certified',
    title: 'Family Law Specialist',
    issuer: 'Louisiana Board of Legal Specialization',
  },
  {
    id: 'aaml',
    label: 'Fellow',
    title: 'American Academy of Matrimonial Lawyers',
    issuer: 'AAML Certified Arbitrator',
  },
  {
    id: 'super-lawyers',
    label: 'Super Lawyers',
    title: '2022 · 2025 · 2026',
    issuer: 'Selected to Louisiana Super Lawyers',
    years: ['2022', '2025', '2026'],
  },
  {
    id: 'av-preeminent',
    label: 'AV Preeminent®',
    title: 'Peer Review Rating',
    issuer: 'Martindale-Hubbell',
  },
  {
    id: 'acadiana-profile',
    label: 'Top Lawyers 2025',
    title: 'Family Law',
    issuer: 'Acadiana Profile',
    years: ['2025'],
  },
];

/** Recognition table: organization, distinction, years. */
export const recognition = [
  {
    organization: 'Louisiana Board of Legal Specialization',
    distinction: 'Board Certified Family Law Specialist',
    years: '',
  },
  {
    organization: 'American Academy of Matrimonial Lawyers',
    distinction: 'Fellow · Certified Arbitrator',
    years: '',
  },
  {
    organization: 'Louisiana Super Lawyers',
    distinction: 'Selected',
    years: '2022 · 2025 · 2026',
  },
  {
    organization: 'Martindale-Hubbell',
    distinction: 'AV Preeminent® Peer Review Rating',
    years: '',
  },
  {
    organization: 'Acadiana Profile',
    distinction: 'Top Lawyers, Family Law',
    years: '2025',
  },
];

export const practiceAreas: PracticeArea[] = [
  {
    id: 'divorce',
    number: '01',
    title: 'Divorce',
    summary:
      'Measured representation from the first strategic decisions through judgment, with particular depth where substantial financial interests are involved.',
    body: [
      'A divorce is both a legal proceeding and a financial reorganization. Decisions made early (about timing, interim support, use of the family home and the gathering of financial information) can shape everything that follows.',
      'Helen represents clients in divorce proceedings in Lafayette and throughout Acadiana. She gives measured, practical advice and prepares each matter thoroughly, whether it is resolved by agreement or must be decided by the court.',
    ],
    includes: [
      'Divorce proceedings under Louisiana law',
      'Interim allowances and use of the family residence',
      'Negotiated settlements and consent judgments',
      'Litigation when agreement is not possible',
    ],
  },
  {
    id: 'community-property',
    number: '02',
    title: 'Complex Community Property',
    summary:
      'Classification, valuation and partition of community and separate property under Louisiana’s community property regime.',
    body: [
      'Louisiana is a community property state. Property acquired during the marriage is presumed to belong to the community, while property owned before the marriage, or received by gift or inheritance, may be separate. Applying those rules to real assets is rarely simple.',
      'Helen guides clients through the full partition process: identifying and classifying assets and liabilities, establishing values, evaluating reimbursement claims between the community and separate estates, and negotiating or litigating a fair division.',
    ],
    includes: [
      'Sworn detailed descriptive lists',
      'Tracing separate funds through commingled accounts',
      'Reimbursement claims',
      'Fair rental value for use of the community home',
      'Partition by agreement or by the court',
    ],
  },
  {
    id: 'high-value-estates',
    number: '03',
    title: 'High-Value Marital Estates',
    summary:
      'Divorces involving businesses, investments, real estate holdings and other financially complex property.',
    body: [
      'When a marital estate includes closely held businesses, professional practices, investment portfolios or significant real estate, the questions become more technical and the consequences more lasting.',
      'Helen works alongside forensic accountants, valuation professionals and other advisers to establish the full financial picture, so that each decision rests on accurate information and a clear view of its long-term effect.',
    ],
    includes: [
      'Business and professional practice interests',
      'Investment and brokerage accounts',
      'Residential, commercial and rental real estate',
      'Deferred compensation and executive benefits',
      'Coordination with valuation and accounting experts',
    ],
  },
  {
    id: 'spousal-support',
    number: '04',
    title: 'Spousal Support',
    summary:
      'Evaluation and litigation of interim and final periodic spousal support following separation and divorce.',
    body: [
      'Louisiana law provides for interim periodic support while a divorce is pending and, in appropriate cases, final periodic support after divorce. Each turns on specific factors, including the needs of the claimant, the other spouse’s ability to pay and, for final support, fault.',
      'Whether you may be seeking support or may be asked to pay it, Helen gives a realistic assessment of likely outcomes and of the evidence that will matter, particularly when income is variable, business-derived or difficult to measure.',
    ],
    includes: [
      'Interim periodic support',
      'Final periodic support',
      'Income analysis for business owners and the self-employed',
      'Modification and termination of support',
    ],
  },
  {
    id: 'retirement-qdro',
    number: '05',
    title: 'Retirement Division & QDROs',
    summary:
      'Division of pensions, retirement accounts and employer-sponsored plans, including Qualified Domestic Relations Orders.',
    body: [
      'Retirement benefits are often among the most valuable assets in a marriage, and among the most technical to divide. The community portion must be identified, valued and allocated in a form the plan administrator will accept.',
      'Helen addresses retirement assets as part of the overall partition and sees that the necessary Qualified Domestic Relations Orders are properly prepared, so the division agreed or ordered is the division actually received.',
    ],
    includes: [
      'Defined benefit pension plans',
      '401(k), 403(b) and other defined contribution plans',
      'Individual retirement accounts',
      'Qualified Domestic Relations Orders',
      'Benefits earned partly before or after the marriage',
    ],
  },
  {
    id: 'child-support',
    number: '06',
    title: 'Child Support',
    summary:
      'Child support and related financial issues, including matters involving high or complex incomes.',
    body: [
      'Louisiana sets child support using statutory guidelines based on the parents’ combined adjusted gross income. When income is high, irregular or derived from a business, determining that figure (and the appropriate award) requires careful analysis.',
      'Helen represents parents in establishing, modifying and enforcing child support, including the allocation of expenses such as tuition, health care and child care.',
    ],
    includes: [
      'Establishing child support',
      'Modification of existing awards',
      'Income determination for business owners',
      'Tuition, medical and child care expenses',
    ],
  },
];

export const custodyNote =
  'The practice does not handle contested child custody matters.';

export const ledger: LedgerItem[] = [
  {
    numeral: 'i',
    title: 'Business interests',
    detail:
      'Closely held companies, professional practices and ownership interests, including valuation and classification.',
  },
  {
    numeral: 'ii',
    title: 'Real estate',
    detail:
      'Residences, rental and commercial property, and land held individually or through entities.',
  },
  {
    numeral: 'iii',
    title: 'Retirement accounts',
    detail:
      'Pensions, 401(k) plans, IRAs and deferred compensation, divided by QDRO where required.',
  },
  {
    numeral: 'iv',
    title: 'Investment assets',
    detail:
      'Brokerage accounts, securities and other holdings, including the tracing of separate funds.',
  },
  {
    numeral: 'v',
    title: 'Community & separate property',
    detail:
      'Classification of assets and debts, and reimbursement claims between the estates.',
  },
  {
    numeral: 'vi',
    title: 'Support obligations',
    detail:
      'Spousal and child support where income is substantial, variable or business-derived.',
  },
];

export const facts: FactRow[] = [
  { term: 'Education', detail: 'Loyola University School of Law, New Orleans, J.D., 1991' },
  { term: 'Admitted', detail: 'Louisiana, 1991' },
  {
    term: 'Certification',
    detail: 'Board Certified Family Law Specialist, Louisiana Board of Legal Specialization',
  },
  { term: 'Fellowship', detail: 'Fellow, American Academy of Matrimonial Lawyers' },
  { term: 'Arbitration', detail: 'AAML Certified Arbitrator' },
];

export const presentations: Presentation[] = [
  {
    year: '2015',
    title: 'It’s Not All About the Genes: Filiation and Disavowal',
    venue: 'Louisiana State University 19th Annual Family Law Seminar',
  },
  {
    year: '2015',
    title: 'Reimbursement Claims',
    venue: 'Louisiana Society of Certified Public Accountants',
  },
  {
    year: '2014',
    title: 'Dollars and Sense: An Accountant’s Contribution in a Divorce Case',
    venue: 'Louisiana Society of Certified Public Accountants',
  },
  {
    year: '2014',
    title: 'Failure to Communicate: One of the Most Common Disciplinary Complaints',
    venue: 'Lafayette Bar Association, Paula K. Woodruff Family Law Section',
  },
  {
    year: '2012',
    title: 'Conflicts of Interest: When Personal Relationships Cloud Professional Judgment',
    venue: 'Lafayette Bar Association, Paula K. Woodruff Family Law Section',
  },
  {
    year: '2011',
    title: 'Ethics in Family Law',
    venue: 'National Business Institute, Advanced Issues in Divorce',
  },
  {
    year: '2009',
    title: 'Ethics in Family Law',
    venue: 'Lafayette Bar Association, Paula K. Woodruff Family Law Section',
  },
  {
    year: '2009',
    title:
      'Attorney’s Fees and Sanctions; Fair Rental Value for Use of the Community Home; Allocating Use of Community Property Prior to Partition',
    venue: 'Lafayette Bar Association, Paula K. Woodruff Family Law Section',
  },
];

export const disclaimer =
  'The information on this website is general information, not legal advice. Viewing this site or contacting the office does not create an attorney–client relationship. Please do not send confidential information until the office has confirmed that it can represent you.';

export const recognitionNote =
  'Ratings and selections are made by the independent organizations named, under their own methodologies. They do not guarantee a similar outcome in any matter.';
