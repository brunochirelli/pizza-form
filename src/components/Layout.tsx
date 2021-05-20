import React, { ReactElement } from "react";
import Header from "./Header";
import MyPizza from "./MyPizza";

type LayoutProps = {
  children: ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <MyPizza />
      <footer>footer</footer>
    </>
  );
};

export default Layout;
