/**
 * Get the card numeric value
 * @param {String} card Sample: 2H
 * @returns {Number} returns numeric value for card
 */
export const cardValue = ( card ) => {

  if ( !card ) throw new Error( 'Card is mandatory as a string value' );

  const value = card.slice( 0, -1 );

  return ( !isNaN( value ) )
    ? parseInt( value )
    : ( value === 'A' ) ? 11 : 10;
};
