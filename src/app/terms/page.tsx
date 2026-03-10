import type { Metadata } from 'next';
import { LegalPage } from '../../components/legal/LegalPage';
import type { LegalPageContent } from '../../lib/legal';
import { SITE_NAME } from '../../lib/seo';

const TERMS_CONTENT = {
  slug: 'terms',
  title: 'Terms and Conditions',
  lastUpdated: 'March 10, 2026',
  intro: [
    `These Terms and Conditions ("Terms") govern your access to and use of the ${SITE_NAME} website and any related services (collectively, the "Services"). By accessing the Services, you agree to these Terms.`
  ],
  sections: [
    {
      type: 'text',
      heading: 'Company Information',
      body: [
        `${SITE_NAME} is operated by [Legal Entity Name], located at [Business Address]. If you need to contact us, email hello@livinginpixel.com.`
      ]
    },
    {
      type: 'text',
      heading: 'Services and Professional Work',
      body: [
        'The website provides information about our studio and services. Any professional services we deliver to clients are governed by a separate statement of work, proposal, or contract. If there is a conflict between those documents and these Terms, the project-specific documents control.'
      ]
    },
    {
      type: 'text',
      heading: 'Eligibility',
      body: ['You must be at least 18 years old and have the authority to enter into these Terms on behalf of yourself or your organization.']
    },
    {
      type: 'list',
      heading: 'Acceptable Use',
      items: [
        'Do not misuse the Services or interfere with their operation.',
        'Do not attempt to access non-public areas, systems, or data.',
        'Do not use the Services to transmit unlawful or harmful content.'
      ]
    },
    {
      type: 'text',
      heading: 'Intellectual Property',
      body: [
        `The Services, including all content, graphics, and code, are owned by ${SITE_NAME} or its licensors and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from the Services without prior written consent.`
      ]
    },
    {
      type: 'text',
      heading: 'Client Materials',
      body: [
        'If you provide materials for a project, you represent that you have the rights to use them and grant us permission to use them for the project. Ownership of deliverables is governed by the applicable project agreement.'
      ]
    },
    {
      type: 'text',
      heading: 'Feedback',
      body: [
        `Any feedback you provide may be used by ${SITE_NAME} without restriction or compensation, unless otherwise agreed in writing.`
      ]
    },
    {
      type: 'text',
      heading: 'Third-Party Services',
      body: [
        'The Services may link to third-party websites or tools. We are not responsible for third-party content, policies, or practices.'
      ]
    },
    {
      type: 'text',
      heading: 'Fees and Payment',
      body: [
        'Fees, billing schedules, and payment terms are set out in project-specific agreements. Late payments may be subject to reasonable interest or collection costs as permitted by law.'
      ]
    },
    {
      type: 'text',
      heading: 'Disclaimer of Warranties',
      body: [
        'The Services are provided "as is" and "as available" without warranties of any kind, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, and non-infringement.'
      ]
    },
    {
      type: 'text',
      heading: 'Limitation of Liability',
      body: [
        `To the maximum extent permitted by law, ${SITE_NAME} will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill. In no event will our total liability exceed the fees paid to us for the Services giving rise to the claim in the 12 months preceding the event.`
      ]
    },
    {
      type: 'text',
      heading: 'Indemnification',
      body: [
        `You agree to indemnify and hold harmless ${SITE_NAME} and its affiliates, officers, employees, and contractors from claims, damages, and expenses arising out of your use of the Services or your breach of these Terms.`
      ]
    },
    {
      type: 'text',
      heading: 'Termination',
      body: [
        'We may suspend or terminate access to the Services at any time if you violate these Terms or if required by law. Sections that by their nature should survive termination will survive.'
      ]
    },
    {
      type: 'text',
      heading: 'Governing Law and Dispute Resolution',
      body: [
        'These Terms are governed by the laws of [State/Country], without regard to conflict of laws principles. Any dispute arising from these Terms will be resolved through binding arbitration in [City, State], and you waive the right to participate in a class action. If arbitration is not permitted by applicable law, disputes will be resolved in the courts located in [City, State].'
      ]
    },
    {
      type: 'text',
      heading: 'Changes to These Terms',
      body: [
        'We may update these Terms from time to time. We will revise the "Last updated" date at the top of this page when changes are made. Your continued use of the Services after changes become effective constitutes acceptance of the revised Terms.'
      ]
    },
    {
      type: 'text',
      heading: 'Contact',
      body: ['For questions about these Terms, contact hello@livinginpixel.com.']
    }
  ]
} as const satisfies LegalPageContent;

export const metadata: Metadata = {
  title: TERMS_CONTENT.title
};

export default function TermsPage() {
  return <LegalPage content={TERMS_CONTENT} />;
}
