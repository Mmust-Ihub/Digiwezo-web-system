import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { LogIn } from "lucide-react";
import LoginPage from "./components/layout/login";
import ForgotPasswordPage from "./components/layout/forgotPassword";

export const metadata = {
  title: "DigiWezo",
  description: "Empowering Digital Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="grow pt-20">
         <LoginPage/>
       
        </main>
         <Footer />

      </body>
    </html>
  );
}
