import './App.css';
import React, { FC, ReactNode } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';

const App: FC = () => {
  return (
    <div className="App">
      <Header className="App-header">
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
      <Layout>
        <div>content</div>
      </Layout>
    </div>
  );
};
export default App;
