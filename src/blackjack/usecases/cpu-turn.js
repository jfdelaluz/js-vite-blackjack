import { createHTMLCard } from '../helpers/dom-helper';
import { checkResults } from './check-results';
import { drawCard } from './draw-card';
import { sumPoints } from './sum-points';

/**
 * 
 * @param {Array<String>} deck 
 * @param {Array<Number>} playerPoints Array containing the points per player
 */
export const cpuTurn = ( deck, playerPoints ) => {

  if ( !playerPoints || playerPoints.length === 0 ) throw new Error( 'Players score required' );

  do {
    const card = drawCard( deck );
    sumPoints( playerPoints, playerPoints.length - 1, card );
    createHTMLCard( playerPoints.length - 1, card );

  } while ( playerPoints[ playerPoints.length - 1 ] < playerPoints[ 0 ] && playerPoints[ 0 ] <= 21 );

  checkResults( playerPoints );
};
