import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { LegalLayout } from '@/components/LegalLayout';
import { NON_AFFILIATION, SITE_NAME, SITE_URL, SUPPORT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${SITE_NAME} handles your data. Your Bubble app never leaves your browser — local-first audit with no backend and no analytics.`,
  alternates: { canonical: '/privacy' },
};

const LAST_UPDATED = 'June 13, 2026';

const EmailLink = () => (
  <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
);

type Section = { id: string; heading: string; body: ReactNode };

const SECTIONS: Section[] = [
  {
    id: 'p1',
    heading: '1. Your app never leaves your browser',
    body: (
      <>
        <p>
          {`${SITE_NAME} is local-first by design. When you run an audit, the extension reads your Bubble application's in-memory structure inside your browser, redacts known secret patterns locally, and runs a deterministic rules engine in a Web Worker.`}
        </p>
        <p>
          We do not receive your application data. There is no backend that processes it.
          There is no AI provider in the loop. There is no telemetry pipeline that ships
          fragments of it elsewhere. The audit you see is computed on your machine.
        </p>
      </>
    ),
  },
  {
    id: 'p2',
    heading: '2. Information we receive directly',
    body: (
      <>
        <p>
          We receive only the information you choose to give us directly to operate the
          billing relationship and respond to you:
        </p>
        <ul>
          <li>
            <strong>Subscription email.</strong> When you subscribe through our payment
            processor, the processor shares the email address associated with your
            subscription so we can deliver your license key and subscription receipts.
          </li>
          <li>
            <strong>Payment information.</strong> Payment is handled by our payment
            processor, which acts as merchant of record. We do not receive or store your
            card details. We receive only the information the processor passes to us to
            confirm the subscription (such as transaction reference, amount, and email).
          </li>
          <li>
            <strong>Support correspondence.</strong> If you email us, we retain your
            message and any attachments to respond to you and maintain a record of the
            request.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'p3',
    heading: '3. What the browser extension does on your machine',
    body: (
      <>
        <p>When you click &ldquo;Audit my app&rdquo; inside your Bubble editor:</p>
        <ul>
          <li>
            The extension reads your app&rsquo;s in-memory structure from the page.
          </li>
          <li>
            The extension redacts known secret patterns before any preview renders.
            Redacted patterns include API keys, JSON Web Tokens, HTTP bearer tokens, cloud
            access keys, personal access tokens for code-hosting platforms, chat-platform
            tokens, and generic high-entropy strings.
          </li>
          <li>
            The extension runs a deterministic rules engine over the sanitized structure in
            a Web Worker, then renders findings inside the extension UI.
          </li>
          <li>The extension validates your license key against our license server.</li>
        </ul>
        <p>
          The license-key check is the only network call the extension makes during an
          audit. The payload contains only the license key and basic activation metadata
          (such as the installation identifier the extension uses to enforce device
          limits). Your Bubble application data is never part of that request.
        </p>
      </>
    ),
  },
  {
    id: 'p4',
    heading: '4. How we use the information we receive',
    body: (
      <>
        <p>We use the information we receive to:</p>
        <ul>
          <li>Activate, validate, and renew your subscription.</li>
          <li>Send transactional emails (license delivery, subscription receipts).</li>
          <li>Respond to support requests.</li>
          <li>Comply with applicable legal obligations.</li>
        </ul>
        <p>
          We do not sell personal information. We do not display advertising in the
          Service. We do not use audit content to train machine-learning models — we do not
          receive audit content at all.
        </p>
      </>
    ),
  },
  {
    id: 'p5',
    heading: '5. Third-party processors',
    body: (
      <>
        <p>
          We rely on a small number of third-party providers to operate the Service. Each
          processes only the information needed for its function:
        </p>
        <ul>
          <li>
            <strong>Payment processor (merchant of record).</strong> Handles subscription
            checkout, billing, and applicable tax collection. Receives the information you
            provide at checkout.
          </li>
          <li>
            <strong>License server.</strong> Validates license keys for the extension.
            Receives the license key and minimal activation metadata.
          </li>
          <li>
            <strong>Transactional email service.</strong> Sends license delivery and
            receipts. Receives the email address and message content.
          </li>
          <li>
            <strong>Static-site hosting provider.</strong>{' '}
            {`Serves ${SITE_URL}. Receives standard server-level request information that any web host receives.`}
          </li>
          <li>
            <strong>Form submission service.</strong>{' '}
            {`If you submit the optional feature-updates email form on ${SITE_URL}, your email is delivered to us through a third-party form service. Receives only the email address you submit.`}
          </li>
        </ul>
        <p>
          The current list of processors is available on request to <EmailLink />.
        </p>
      </>
    ),
  },
  {
    id: 'p6',
    heading: '6. Data retention',
    body: (
      <>
        <p>
          We retain only the information needed to operate the Service and meet our legal
          obligations:
        </p>
        <ul>
          <li>
            Subscription and license records are retained for as long as your subscription
            is active and for a period afterward to satisfy billing, accounting, and tax
            requirements.
          </li>
          <li>
            Support correspondence is retained for as long as needed to address the issue
            and a reasonable period afterward.
          </li>
          <li>
            Audit content is not retained because we do not receive it.
          </li>
        </ul>
        <p>
          You can ask us to delete information we hold about you, subject to legal
          retention obligations, by emailing <EmailLink />.
        </p>
      </>
    ),
  },
  {
    id: 'p7',
    heading: '7. Your rights',
    body: (
      <>
        <p>
          Depending on where you live, you may have rights to access, correct, delete, port,
          or object to certain uses of your personal data, and to withdraw consent. To
          exercise any of these rights, email <EmailLink />. We will respond within a
          reasonable time consistent with applicable law.
        </p>
        <p>
          You may also have a right to complain to your local data-protection authority.
        </p>
      </>
    ),
  },
  {
    id: 'p8',
    heading: '8. Security',
    body: (
      <>
        <p>We implement reasonable technical and organizational measures to protect data:</p>
        <ul>
          <li>Data in transit between the extension and the license server is encrypted in transit.</li>
          <li>
            Secret patterns are redacted in your browser by the extension before any preview
            renders, and your application data is not transmitted to us at any point.
          </li>
          <li>
            Access to processor systems is restricted to authorized personnel and protected
            with industry-standard controls.
          </li>
        </ul>
        <p>
          No system is perfectly secure. If we become aware of a security incident affecting
          your information, we will notify you in accordance with applicable law.
        </p>
      </>
    ),
  },
  {
    id: 'p9',
    heading: '9. Children',
    body: (
      <>
        <p>
          The Service is not directed to children. We do not knowingly collect personal
          information from children. If you believe a child has provided us with personal
          information, please contact <EmailLink />.
        </p>
      </>
    ),
  },
  {
    id: 'p10',
    heading: '10. International users',
    body: (
      <>
        <p>
          {`${SITE_NAME} is offered globally. Information you provide may be processed in the country where our processors operate. Where required by law, we rely on appropriate safeguards for cross-border transfers.`}
        </p>
      </>
    ),
  },
  {
    id: 'p11',
    heading: '11. Changes to this policy',
    body: (
      <>
        <p>
          {`We may update this Privacy Policy from time to time. We will post the updated policy on ${SITE_URL} and update the "last updated" date. Continued use of the Service after changes take effect constitutes acceptance.`}
        </p>
      </>
    ),
  },
  {
    id: 'p12',
    heading: '12. Contact',
    body: (
      <>
        <p>For privacy questions, requests, or complaints:</p>
        <p>
          <strong>Email:</strong> <EmailLink />
        </p>
      </>
    ),
  },
];

const TOC = SECTIONS.map(({ id, heading }) => ({ id, label: heading }));

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated={LAST_UPDATED} toc={TOC}>
      <p>
        {`This Privacy Policy explains how ${SITE_NAME} ("we," "us," or "our") handles information when you use the ${SITE_NAME} Chrome extension, the ${SITE_URL} website, and any related services (collectively, the "Service").`}
      </p>
      <p>
        The short version: <strong>your Bubble app never leaves your browser.</strong> The
        audit runs locally. We do not receive your application data.
      </p>
      <p>You can contact us at <EmailLink />.</p>
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
