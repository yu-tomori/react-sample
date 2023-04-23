import logo from './logo.svg';
import './App.css';
import React, { FC, ReactNode } from 'react';

const App: FC = () => {
  return (
    <div className="App">
      <Header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Header>
    </div>
  );
};

type HeaderProps = {
  children: ReactNode;
  className: string;
};

const Header: FC<HeaderProps> = ({ children, className }) => {
  return <header className={className}>{children}</header>;
};

export default App;
