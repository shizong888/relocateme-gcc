import Script from 'next/script';

export function ConsentManager() {
  return (
    <Script
      id="consent-manager"
      strategy="beforeInteractive"
      type="text/javascript"
      data-cmp-ab="1"
      src="https://cdn.consentmanager.net/delivery/autoblocking/9de6dbe852805.js"
      data-cmp-host="a.delivery.consentmanager.net"
      data-cmp-cdn="cdn.consentmanager.net"
      data-cmp-codesrc="0"
    />
  );
}
