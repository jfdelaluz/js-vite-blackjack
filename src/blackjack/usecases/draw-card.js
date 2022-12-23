/**
 * Draw a card from the deck
 * @param {Array<String>} deck Sample: [ '2C', '2D', '2H', '2S', ... ]
 * @returns {String} returns a card in string representation, sample '2H'
 */
export const drawCard = ( deck ) => {

  if ( !deck || deck.length === 0 ) {
    throw new Error( 'Deck is empty' );
  }

  return deck.pop();
};
