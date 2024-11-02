import React from "react";
import "./App.css";
import Card from "./components/Card.styled";
import Image from "./components/Image.styled";
import CardHeader from "./components/CardHeader.styled";
import CardText from "./components/CardText.styled";
import Button from "./components/Button.styled";

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
        <div className="Btns">
          <Button marginRight={"12px"} primary>
            See more
          </Button>
          <Button outlined>Save</Button>
        </div>
      </Card>
    </div>
  );
}

export default App;
