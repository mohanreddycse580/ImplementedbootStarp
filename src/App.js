import React from "react";
import "./styles.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Routes from "./routes";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
