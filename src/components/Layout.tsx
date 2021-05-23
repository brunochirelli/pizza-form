import React, { ReactElement } from "react";
import Header from "./Header";

type LayoutProps = {
  children: ReactElement;
};

/**
 * Main Layout Wrapper
 *
 * @version   0.0.1
 * @component
 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
