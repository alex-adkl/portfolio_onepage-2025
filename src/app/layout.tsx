import "./globals.css";
import Navigation from "./components/navigation/Navigation";
import { DM_Serif_Display, Roboto } from "next/font/google";
import Head from "next/head";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Alejandra Adeikalam",
  description: "Développeuse & directrice artistique",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${dmSerif.variable} ${roboto.variable}`}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem("theme");
                  if (theme === "dark") {
                    document.documentElement.classList.add("dark");
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </Head>
      <body className="bg-[#7c86ff] text-white dark:bg-zinc-900 dark:text-zinc-100">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
