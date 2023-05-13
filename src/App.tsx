import './App.css';
import React, { FC } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';

const App: FC = () => {
  return (
    <div className="App">
      <Header className="App-header">header</Header>
      <Layout>
        <div>content</div>
      </Layout>
    </div>
  );
};
export default App;
