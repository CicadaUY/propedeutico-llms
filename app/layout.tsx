import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://almadana.github.io/propedeutico-llms/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Propedéutico LLM — tokenpalooza · CICADA",
  description: "Un recorrido introductorio de tokenpalooza y CICADA para comprender las ideas básicas detrás de los grandes modelos de lenguaje.",
  openGraph: {
    title: "Propedéutico LLM — tokenpalooza · CICADA",
    description: "Tokens, embeddings, atención y transformers en menos de cinco horas.",
    type: "website",
    images: [{ url: "og.png", width: 1730, height: 909, alt: "Propedéutico LLM: una llegada suave al mundo de los modelos de lenguaje" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propedéutico LLM — tokenpalooza · CICADA",
    description: "Tokens, embeddings, atención y transformers en menos de cinco horas.",
    images: ["og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body suppressHydrationWarning>{children}</body></html>; }
