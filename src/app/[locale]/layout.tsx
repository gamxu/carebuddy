import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import { getMessages } from "next-intl/server";
import { IBM_Plex_Sans_Thai } from "next/font/google";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Load messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={ibmPlexSansThai.className}>
        <NextIntlClientProvider messages={messages}>
          <header>
            <NavBar />
          </header>
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
