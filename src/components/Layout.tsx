import React, { ReactNode, FC } from 'react';

type LayoutProp = {
  children?: ReactNode;
};
const Layout: FC<LayoutProp> = ({ children }) => {
  return (
    <>
      <p>layout</p>
      <div>{children}</div>
    </>
  );
};

export default Layout;
