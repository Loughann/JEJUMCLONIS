import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Jejum Personalizado",
  description: "Jejum Personalizado",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* UTMify Tracking Scripts */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        />
        <Script id="utmify-pixel-init">
          {`
               window.pixelId = "687623e6c91cbbd4bd8aefdf";
               var a = document.createElement("script");
               a.setAttribute("async", "");
               a.setAttribute("defer", "");
               a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
               document.head.appendChild(a);
             `}
        </Script>
      </body>
    </html>
  )
}
