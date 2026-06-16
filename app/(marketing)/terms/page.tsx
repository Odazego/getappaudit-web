import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { LegalLayout } from '@/components/LegalLayout';
import { NON_AFFILIATION, SITE_NAME, SITE_URL, SUPPORT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `The terms under which you may use ${SITE_NAME} and ${SITE_URL}.`,
  alternates: { canonical: '/terms' },
};

const LAST_UPDATED = 'June 13, 2026';

const EmailLink = () => (
  <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
);

type Section = { id: string; heading: string; body: ReactNode };

const SECTIONS: Section[] = [
  {
    id: 't1',
    heading: `1. What ${SITE_NAME} is`,
    body: (
      <>
        <p>
          {`${SITE_NAME} is a Chrome browser extension that audits Bubble.io applications. The audit runs entirely inside your browser: it walks the in-memory structure of your Bubble app, redacts known secret patterns locally, and runs a deterministic rules engine in a Web Worker to surface patterns associated with elevated Workload Unit usage.`}
        </p>
        <p>
          {`${SITE_NAME} does not transmit your application data to any server controlled by us. The extension does not require a backend to produce findings.`}
        </p>
        <p>
          The Service is provided as an advisory tool. Findings are heuristic. They may
          include false positives or miss real issues.{' '}
          <strong>
            The Service is not a substitute for professional security review, formal code
            audit, or qualified legal or financial advice.
          </strong>
        </p>
      </>
    ),
  },
  {
    id: 't2',
    heading: '2. Eligibility',
    body: (
      <>
        <p>
          You must have the legal authority to enter into a binding agreement in your
          jurisdiction to use the Service. If you are using the Service on behalf of an
          organization, you represent that you have authority to bind that organization to
          these Terms.
        </p>
        <p>
          {`You may only use ${SITE_NAME} on Bubble applications that you own or for which you have explicit authorization from the owner. Using ${SITE_NAME} on applications you do not have authorization to audit may violate Bubble's terms of service or constitute unauthorized access under applicable law. You are solely responsible for ensuring you have the necessary rights.`}
        </p>
      </>
    ),
  },
  {
    id: 't3',
    heading: '3. License and subscriptions',
    body: (
      <>
        <p>
          {`${SITE_NAME} is licensed, not sold. Access to paid features is granted through a monthly subscription license, validated using a license key issued at checkout. Each subscription tier specifies the number of devices on which the license may be activated.`}
        </p>
        <p>
          Subscriptions continue to renew until cancelled. You may cancel at any time;
          access continues through the end of the active billing period. Re-audits remain
          available at no additional cost while your subscription is active.
        </p>
      </>
    ),
  },
  {
    id: 't4',
    heading: '4. Payment and tax',
    body: (
      <>
        <p>
          Payments are processed by our payment processor, which acts as merchant of
          record. By subscribing, you also agree to the payment processor&rsquo;s terms
          presented at checkout. Applicable sales taxes are calculated and added at
          checkout where required by law.
        </p>
        <p>
          Charges are denominated in the currency presented at checkout. Your bank or card
          issuer may apply foreign exchange or international transaction fees, which are
          your responsibility.
        </p>
      </>
    ),
  },
  {
    id: 't5',
    heading: '5. Refunds',
    body: (
      <>
        <p>
          {`Because ${SITE_NAME} offers a free preview before any subscription is required and because access is delivered immediately on payment, paid subscription periods are generally non-refundable.`}
        </p>
        <p>
          We may, at our discretion, consider a refund where the Service materially failed
          to perform as described, where access was not delivered, or where a duplicate
          charge occurred. To request consideration, contact <EmailLink /> with your
          transaction details and a description of the issue.
        </p>
      </>
    ),
  },
  {
    id: 't6',
    heading: '6. Acceptable use',
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>
            Use the Service to audit applications you do not own or have authorization to
            audit.
          </li>
          <li>
            Attempt to reverse engineer, decompile, or extract the underlying source of the
            extension beyond what is permitted by applicable law.
          </li>
          <li>Use the Service to develop a directly competing product.</li>
          <li>Submit malicious payloads or attempt to exploit the Service&rsquo;s integrity.</li>
          <li>
            Share, transfer, or resell a license key in a way inconsistent with the
            device-count limits of your subscription tier.
          </li>
          <li>Use the Service in violation of any applicable law.</li>
        </ul>
      </>
    ),
  },
  {
    id: 't7',
    heading: '7. Your content and our rights',
    body: (
      <>
        <p>
          You retain all rights to the Bubble application data you audit using the Service.
          Because the audit runs in your browser and we do not receive your application
          data, we do not claim any license over it.
        </p>
        <p>
          You grant us a limited license to process information you choose to share with us
          directly (for example, support emails) solely to operate the Service and respond
          to you.
        </p>
      </>
    ),
  },
  {
    id: 't8',
    heading: '8. Intellectual property',
    body: (
      <>
        <p>
          {`The Service, including the extension code, website design, brand identity, and rules engine, is owned by ${SITE_NAME} and protected by intellectual property laws. Nothing in these Terms grants you a right or license to our trademarks or copyrighted materials except as expressly permitted.`}
        </p>
        <p>
          &ldquo;Bubble&rdquo; is a trademark of Bubble Group, Inc. We use the name only
          descriptively to identify the platform our Service supports.
        </p>
      </>
    ),
  },
  {
    id: 't9',
    heading: '9. Disclaimer of warranties',
    body: (
      <>
        <p>
          The Service is provided{' '}
          <strong>&ldquo;as is&rdquo; and &ldquo;as available&rdquo;</strong> without
          warranties of any kind, whether express or implied, including implied warranties
          of merchantability, fitness for a particular purpose, non-infringement, or that
          the Service will be uninterrupted, error-free, or secure.
        </p>
        <p>
          You use the Service at your own risk. We are not responsible for decisions you
          make based on audit findings, including changes to your Bubble application,
          third-party integrations, security configurations, or business operations.
        </p>
      </>
    ),
  },
  {
    id: 't10',
    heading: '10. Limitation of liability',
    body: (
      <>
        <p>To the maximum extent permitted by law:</p>
        <ul>
          <li>
            {`In no event will ${SITE_NAME} be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, including loss of profits, revenue, data, goodwill, or business opportunity, arising from your use of the Service.`}
          </li>
          <li>
            {`${SITE_NAME}'s total cumulative liability for any claim arising out of these Terms or the Service will not exceed the amount you paid us in the months immediately preceding the claim.`}
          </li>
          <li>
            Where applicable law does not permit certain limitations of liability, our
            liability is limited to the maximum extent permitted by applicable law.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 't11',
    heading: '11. Indemnification',
    body: (
      <>
        <p>
          {`You agree to indemnify and hold harmless ${SITE_NAME} from any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from your use of the Service in violation of these Terms, your use of the Service on applications you do not have authorization to audit, or your violation of any third-party rights or applicable law.`}
        </p>
      </>
    ),
  },
  {
    id: 't12',
    heading: '12. Termination',
    body: (
      <>
        <p>
          You may stop using the Service at any time. You can request that we deactivate
          any license-key state associated with you by emailing <EmailLink />.
        </p>
        <p>
          We may suspend or terminate your access if you materially breach these Terms, if
          required by law, if your use is involved in fraud or abuse, or if we discontinue
          the Service.
        </p>
      </>
    ),
  },
  {
    id: 't13',
    heading: '13. Changes to the Service and these Terms',
    body: (
      <>
        <p>
          {`We may modify the Service at any time, including adding, removing, or changing features. We may also update these Terms. We will post the updated Terms on ${SITE_URL} and update the "last updated" date. Continued use after changes take effect constitutes acceptance.`}
        </p>
      </>
    ),
  },
  {
    id: 't14',
    heading: '14. General provisions',
    body: (
      <>
        <ul>
          <li>
            <strong>Entire agreement.</strong>{' '}
            {`These Terms, together with our Privacy Policy, constitute the entire agreement between you and ${SITE_NAME} regarding the Service.`}
          </li>
          <li>
            <strong>Severability.</strong> If any provision is held unenforceable, the rest
            of the Terms remain in effect.
          </li>
          <li>
            <strong>No waiver.</strong> Failure to enforce any provision is not a waiver of
            our right to enforce it later.
          </li>
          <li>
            <strong>Assignment.</strong> You may not assign these Terms without our written
            consent. We may assign these Terms in connection with a merger, acquisition, or
            sale of assets.
          </li>
          <li>
            <strong>Force majeure.</strong> We are not liable for delays or failures caused
            by events beyond our reasonable control.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 't15',
    heading: '15. Contact',
    body: (
      <>
        <p>For questions about these Terms:</p>
        <p>
          <strong>Email:</strong> <EmailLink />
        </p>
      </>
    ),
  },
];

const TOC = SECTIONS.map(({ id, heading }) => ({ id, label: heading }));

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated={LAST_UPDATED} toc={TOC}>
      <p>
        {`These Terms of Service ("Terms") govern your use of the ${SITE_NAME} Chrome extension, the ${SITE_URL} website, and any related services (collectively, the "Service") provided by ${SITE_NAME} ("${SITE_NAME}," "we," "us," or "our").`}
      </p>
      <p>
        {`By installing the extension, visiting ${SITE_URL}, or subscribing, you agree to these Terms. If you do not agree, do not use the Service.`}
      </p>
      <p>{NON_AFFILIATION}</p>

      {SECTIONS.map((section) => (
        <section key={section.id}>
          <h2 id={section.id}>{section.heading}</h2>
          {section.body}
        </section>
      ))}

      <hr className="my-8 border-black/[0.08]" />
      <p className="text-xs italic text-[var(--color-slate-400)]">{NON_AFFILIATION}</p>
    </LegalLayout>
  );
}
