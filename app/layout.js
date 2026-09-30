import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Jibril Ibni Jubair | Portfolio",
  description: "Junior Web Developer & Creative Builder Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
