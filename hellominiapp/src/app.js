import React from "react";
import Header from "./components/header";
import InfoBody from "./components/infoBody";
import Footer from "./components/footer";
import "./app.less";

class App extends React.PureComponent {
  render() {
    return (
      <div id="home-page">
        <Header />
        <InfoBody />
        <Footer />
      </div>
    );
  }
}

export default App;
