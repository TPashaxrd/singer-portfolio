import React from 'react';
import { Helmet } from "react-helmet";
import Header from './components/Header';
import TubeSocial from './components/TubeSocial';
import Concerts from './components/Concerts';
import Biography from './components/Biography';
import Discography from './components/Discography';
import Footer from './components/Footer';

const App = () => {
  const userConfig = {
    name: "Toprak",
    surname: "Altın",
    mail: "altintoprak@gmail.com"
  };

  const isLoggedIn = true;

  return (
    <div>
     <Helmet>
     <title>
     {isLoggedIn
     ? `${userConfig.name} | ${userConfig.surname}`
     : "Anonim Web Page"}
     </title>
      </Helmet>
      <Header />
      <TubeSocial />
      <Concerts />
      <Biography />
      <Discography />
      <Footer />
    </div>
  );
};

export default App;
