// Plain text pages for the QuickBooks connector (/qbo, /qbo-eula, /privacy).
// Intuit requires these public URLs for the app's production keys. Nothing on the
// homepage links to them on purpose: they're reached only by their exact address, and
// each page's metadata asks search engines not to index it.
//
// Uses <div>/<article>, not <section>: globals.css hides every <section> until the
// homepage's scroll animation reveals it.

import Image from 'next/image';
import Link from 'next/link';

export const noIndex = { index: false, follow: false };

export function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-xl font-semibold text-white mt-10 mb-3 scroll-mt-8">
      {children}
    </h2>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 leading-relaxed">{children}</p>;
}

export function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-[#29ABE2] hover:text-[#1B8DBF] underline underline-offset-2">
      {children}
    </a>
  );
}

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-montserrat">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <Link href="/" className="inline-block w-40 h-16 relative mb-10" aria-label="Schu Financials home">
          <Image src="/logo-no-for-dark-background.png" alt="SchuFin Logo" fill sizes="160px" className="object-contain object-left" priority />
        </Link>
        <article>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">{title}</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: {updated}</p>
          {children}
          <H2>Contact</H2>
          <P>
            Schu Financials — <A href="mailto:sam@schufin.com">sam@schufin.com</A>
          </P>
        </article>
      </div>
    </div>
  );
}
