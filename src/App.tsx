import React from "react";
import "./App.css";
import Card from "./components/Card.styled";
import Image from "./components/Image.styled";
import CardHeader from "./components/CardHeader.styled";
import CardText from "./components/CardText.styled";
import Button from "./components/Button.styled";
import { CardContent } from "./components/CardContent.styled";
import { FlexWrapper } from "./components/FlexWrapper";

function App() {
  return (
    <div className="App">
      <Card>
        <Image />
        <CardContent>
          <CardHeader>Headline</CardHeader>
          <CardText>
            Faucibus. Faucibus. Sit sit sapien <br /> sit tempusrisu ut. Sit
            molestie ornare in venen.
          </CardText>
          <FlexWrapper>
            <Button primary>See more</Button>
            <Button outlined>Save</Button>
          </FlexWrapper>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
