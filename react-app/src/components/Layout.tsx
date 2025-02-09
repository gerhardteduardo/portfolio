import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="lg:h-screen flex flex-col font-mono items-center bg-gradient-to-b from-black to-blue-800">
      <div className="lg:max-w-6xl max-w-sm mt-12">
        <Header/>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
