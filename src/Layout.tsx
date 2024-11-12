import React from "react";
import Footer from "@components/layout/Footer/Footer";
import NavBar from "@components/layout/NavBar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <NavBar />
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
