import React from "react";
import Card from "./components/Card.styled";
import Image from "./components/Image.styled";
import CardHeader from "./components/CardHeader.styled";
import CardText from "./components/CardText.styled";

function App() {
  return (
    <div className="App">
      <Card>
        <Image />
        <CardHeader>Headline</CardHeader>
        <CardText>
          Faucibus. Faucibus. Sit sit sapien <br /> sit tempusrisu ut. Sit
          molestie ornare in venen.
        </CardText>
      </Card>
    </div>
  );
}

export default App;
