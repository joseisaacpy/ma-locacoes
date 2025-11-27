// imports
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

// fonts
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// metadata
export const metadata: Metadata = {
  title: "M.A Locações",
  description: "Portfólio de serviços e produtos para a empresa M.A Locações.",
  // icons: {
  //   icon: "",
  //   shortcut: "",
  //   apple: "",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} flex flex-col min-h-screen bg-black`}
      >
        <main className="flex-1">{children}</main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
