import React from "react";

class Home extends React.Component {
  render() {
    const imageAlign = {
      "padding-top": "100px"
    };
    return (
      <div class="container">
        <img
          style={imageAlign}
          className="mx-auto d-block"
          src="https://pbs.twimg.com/profile_images/823360829403721729/LJUmGZiZ_400x400.jpg"
          alt="Suncorp"
        />
      </div>
    );
  }
}

export default Home;
