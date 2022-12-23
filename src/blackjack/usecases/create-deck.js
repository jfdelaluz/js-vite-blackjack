import _ from 'underscore';

const colors = [ 'C', 'D', 'H', 'S' ],
  letters = [ 'A', 'J', 'Q', 'K' ];

/**
 * Creates a new deck
 * @returns {Array<String>} returns a new deck of cards
 */
export const createDeck = () => {

  if ( !colors || colors.length === 0 ) throw new Error( 'Card Colors are mandatory as an array of strings' );
  if ( !letters || letters.length === 0 ) throw new Error( 'Card Letters are mandatory as an array of strings' );
  
  const deck = [];

  for ( let i = 2; i <= 10; i++ ) {
    for ( let color of colors ) {
      deck.push( `${ i }${ color }` );
    }
  }

  for ( let letter of letters ) {
    for ( let color of colors ) {
      deck.push( `${ letter }${ color }` );
    }
  }

  return _.shuffle( deck );

};
