// react
import React from 'react';
// react-bootstrap
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

const BreakUpBootstrapCardDeck = ({ dataArray }) => {
  const numberOfCardsPerRow = 5
  const numberOfLoops = Math.ceil(dataArray.length / numberOfCardsPerRow);

  const childLoop = parentLoopIndex => {
    let childLoopIndex;
    let cards = [];
    for (childLoopIndex = 0; childLoopIndex < dataArray.length; childLoopIndex++) {
      if (childLoopIndex >= parentLoopIndex * numberOfCardsPerRow && childLoopIndex < (parentLoopIndex + 1) * numberOfCardsPerRow) {
        cards.push(
          <Card key={childLoopIndex}>
            <Card.Body>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        );
      } else {
        continue;
      }
    }
    return <React.Fragment>{cards}</React.Fragment>;
  };

  const parentLoop = () => {
    let parentLoopIndex;
    let decks = [];
    for (parentLoopIndex = 0; parentLoopIndex < numberOfLoops; parentLoopIndex++) {
      decks.push(
        <CardDeck>
          {childLoop(parentLoopIndex)}
        </CardDeck>,
      );
    }
    return <React.Fragment>{decks}</React.Fragment>;
  };

  return <React.Fragment>{parentLoop()}</React.Fragment>;
};

export default BreakUpBootstrapCardDeck;

// This is a component that can break up Bootstrap CardDecks by the number you need, if you don't break up the dataArray CardDeck will render ALL Cards based on the array iteration in a single Row.
// With help from - https://stackoverflow.com/a/22877049/8379751
