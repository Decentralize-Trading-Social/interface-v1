import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import SidebarComponent from "@/components/SidebarComponent";
import { UserContext } from "@/components/userContext/UserContext";
import { PROFILE } from "@/config/constants";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex h-screen overflow-hidden">
            <div className="w-1/6 bg-sidebar p-4 border-white sticky top-0 h-screen hidden sm:block">
              <SidebarComponent />
            </div>
            <main className="w-full p-6 overflow-y-auto">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
