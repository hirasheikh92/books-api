import "./globals.css";
import Header from "../shared/Header";

export const metadata = {
  title: "Blog ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main className=' bg-slate-50 h-screen w-full'> {children}</main>
      </body>
    </html>
  );
}
