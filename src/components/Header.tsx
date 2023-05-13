import React, { FC, ReactNode } from 'react';

type HeaderProps = {
  children: ReactNode;
  className: string;
};

const Header: FC<HeaderProps> = ({ children, className }) => {
  return <header className={className}>{children}</header>;
};

export default Header;
