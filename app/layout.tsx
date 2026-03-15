import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Shell from "./shell";

export const metadata: Metadata = {
  title: "Pankaj Fabricators | Custom Metal Fabrication Since 1978",
  description:
    "Premium custom metal fabrication in Jaipur, India. Transformer tanks, panels & industrial solutions since 1978.",
  openGraph: {
    title: "Pankaj Fabricators | Custom Metal Fabrication",
    description:
      "Premium custom metal fabrication in Jaipur, India. Transformer tanks, panels & industrial solutions since 1978.",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <Shell>{children}</Shell>
        </Providers>
      </body>
    </html>
  );
}
