import { Josefin_Sans } from "next/font/google";
import "./_styles/globals.css";
import Navigation from "./_components/Navigation";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description: "A simple app using Tailwind CSS with custom colors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}>
        <header>
          <Navigation />
        </header>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}