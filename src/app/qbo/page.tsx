import type { Metadata } from 'next';
import LegalPage, { A, H2, noIndex, P } from '../components/LegalPage';
import QboCallbackForwarder from '../components/QboCallbackForwarder';

// Launch, connect/reconnect, disconnect and redirect URL for the SchuFin MCP Connector
// (Intuit app settings). Not linked from the homepage.
export const metadata: Metadata = {
  title: 'SchuFin MCP Connector',
  robots: noIndex,
};

export default function QboPage() {
  return (
    <LegalPage title="SchuFin MCP Connector" updated="October 1, 2026">
      <QboCallbackForwarder />
      <P>
        This is Schu Financials&apos; private connection to QuickBooks Online, used only to provide bookkeeping and
        accounting services to our own clients. It is not available to the public.
      </P>

      <H2 id="connect">Connecting or reconnecting</H2>
      <P>
        Schu Financials sets up the connection with your permission, under our engagement agreement. QuickBooks
        asks for a reconnection periodically; we&apos;ll take care of it, or contact you if your sign-in is needed.
        If you&apos;re a client and were sent here, there&apos;s nothing else you need to do.
      </P>

      <H2 id="launch">Connected</H2>
      <P>If you just approved the connection, you&apos;re all set — you can close this page.</P>

      <H2 id="disconnect">Disconnecting</H2>
      <P>
        You can disconnect at any time in QuickBooks Online (Settings → Apps / Connected apps), or just ask us.
        Once disconnected, we no longer access your company and we delete the stored connection credentials.
        Nothing in your QuickBooks file is changed by disconnecting.
      </P>

      <P>
        See also: <A href="/qbo-eula">End-user license agreement</A> · <A href="/privacy">Privacy policy</A>
      </P>
    </LegalPage>
  );
}
