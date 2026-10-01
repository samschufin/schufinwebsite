import type { Metadata } from 'next';
import LegalPage, { H2, noIndex, P } from '../components/LegalPage';

// Privacy policy URL for the SchuFin MCP Connector (Intuit app settings).
// Not linked from the homepage.
export const metadata: Metadata = {
  title: 'Privacy Policy — SchuFin MCP Connector',
  robots: noIndex,
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy — SchuFin MCP Connector" updated="October 1, 2026">
      <P>
        This policy explains how Schu Financials (&quot;we&quot;) handles data accessed through the SchuFin MCP Connector
        (the &quot;App&quot;), a private internal tool we use to provide bookkeeping and accounting services to our clients.
      </P>

      <H2>What we access</H2>
      <P>
        With a client&apos;s permission, the App reads the client&apos;s QuickBooks Online accounting data (for example the
        chart of accounts, vendors, customers, transactions and financial reports) and, where authorized, records
        bookkeeping transactions on the client&apos;s behalf. We do not request access to payroll, payments or personal
        profile data.
      </P>

      <H2>How we use it</H2>
      <P>
        Only to perform the accounting services described in our engagement agreement with that client: categorizing
        and recording transactions, reconciling accounts, preparing financial statements and answering the
        client&apos;s questions. We do not sell, rent or share client data for marketing, and we do not use it for any
        other client or purpose.
      </P>

      <H2>Where it is kept</H2>
      <P>
        QuickBooks connection credentials are stored encrypted on Schu Financials&apos; own computer and are never
        shared. Accounting data stays in QuickBooks Online; working copies made during a monthly close are kept only
        as long as needed for the engagement and our professional record-keeping obligations. We may use AI-assisted
        tools to analyze client data while performing the services; that data is not used to train those tools&apos;
        models.
      </P>

      <H2>Who can see it</H2>
      <P>
        Only Schu Financials personnel working on the client&apos;s account, and service providers we rely on to perform
        the work under confidentiality obligations, or where required by law.
      </P>

      <H2>Your choices</H2>
      <P>
        A client can disconnect the App at any time in QuickBooks Online (Settings → Apps / Connected apps) or by
        asking us; we then delete the stored connection credentials.
      </P>

      <H2>Changes</H2>
      <P>We will update the date above when this policy changes.</P>
    </LegalPage>
  );
}
