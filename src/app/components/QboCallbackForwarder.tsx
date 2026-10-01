'use client';

// When Intuit finishes a QuickBooks sign-in, it sends the browser to https://schufin.com/qbo
// with a one-time code in the address (?code=...&state=...&realmId=...). This hands that
// address to the authorize script running on Sam's own computer (qbo-mcp, port 8765), so
// the sign-in completes by itself. If the script isn't running, nothing happens there and
// the page explains how to paste the address instead. The code is useless without the
// app's secret, which only exists on Sam's computer.

import { useEffect, useState } from 'react';

const LOCAL_CALLBACK = 'http://localhost:8765/callback';

export default function QboCallbackForwarder() {
  const [forwarding, setForwarding] = useState(false);

  useEffect(() => {
    const q = window.location.search;
    if (/[?&](code|error)=/.test(q)) {
      setForwarding(true);
      window.location.replace(LOCAL_CALLBACK + q);
    }
  }, []);

  if (!forwarding) return null;
  return (
    <div className="mb-10 rounded-xl border border-[#29ABE2]/40 bg-[#29ABE2]/10 p-5 text-gray-200">
      <p className="font-semibold text-white mb-2">Finishing QuickBooks sign-in…</p>
      <p>
        If this page doesn&apos;t change within a few seconds, copy the full address from the browser bar and
        paste it into the terminal window where the authorize command is running.
      </p>
    </div>
  );
}
