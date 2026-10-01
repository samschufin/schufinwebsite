import type { Metadata } from 'next';
import LegalPage, { H2, noIndex, P } from '../components/LegalPage';

// End-user license agreement URL for the SchuFin MCP Connector (Intuit app settings).
// Not linked from the homepage.
export const metadata: Metadata = {
  title: 'SchuFin MCP Connector — End-User License Agreement',
  robots: noIndex,
};

export default function QboEulaPage() {
  return (
    <LegalPage title="SchuFin MCP Connector — End-User License Agreement" updated="October 1, 2026">
      <P>
        The SchuFin MCP Connector (the &quot;App&quot;) is a private, internal software tool operated by Schu Financials
        (&quot;Schu Financials&quot;, &quot;we&quot;) to perform bookkeeping and accounting services for its own clients. It is not
        sold, distributed or offered to the public, and it is not listed on the Intuit App Store.
      </P>

      <H2>1. Who may use the App</H2>
      <P>
        Only Schu Financials personnel may operate the App. A QuickBooks Online company is connected only with the
        permission of that company&apos;s owner or administrator, given under Schu Financials&apos; engagement agreement,
        and only by a person with administrator or accountant access to that company.
      </P>

      <H2>2. What the App does</H2>
      <P>
        The App connects to QuickBooks Online through Intuit&apos;s published Accounting API to read accounting records
        and reports, and, where the client has authorized it, to record bookkeeping transactions (such as bills,
        expenses, journal entries, deposits and transfers) as part of the services Schu Financials provides. Every
        change is reviewed by Schu Financials before it is made.
      </P>

      <H2>3. Client authorization and disconnection</H2>
      <P>
        A client may withdraw permission at any time by disconnecting the App in QuickBooks Online (Settings → Apps /
        Connected apps) or by notifying Schu Financials, after which we stop accessing that company and delete the
        stored connection credentials.
      </P>

      <H2>4. No warranty; limitation of liability</H2>
      <P>
        The App is provided as a tool supporting Schu Financials&apos; professional services and is governed by the
        engagement agreement between Schu Financials and each client. Except as stated in that agreement, the App is
        provided &quot;as is&quot;, without warranties of any kind, and Schu Financials&apos; liability relating to the App is
        limited as set out in the engagement agreement.
      </P>

      <H2>5. Intuit</H2>
      <P>QuickBooks and Intuit are trademarks of Intuit Inc. The App is not made, endorsed or supported by Intuit.</P>
    </LegalPage>
  );
}
