import { displayResults } from '../helpers/dom-helper';

/**
 * Determine winner
 * @param {Array<String>} playerPoints Array containing the points per player
 */
export const checkResults = ( playerPoints ) => {
  
  setTimeout( () => {

    let message = 'CPU wins...';
    let level = 'danger';

    if ( playerPoints[ 0 ] > 21 ) {
      message = 'You lose...';

    } else if ( playerPoints[ 0 ] === playerPoints[ playerPoints.length - 1 ] ) {
      message = 'Draw';
      level = 'warning';

    } else if (
      playerPoints[ playerPoints.length - 1 ] > 21 ||
      playerPoints[ 0 ] > playerPoints[ playerPoints.length - 1 ]
    ) {
      message = 'You win!!!';
      level = 'success';
    }

    displayResults( message, level );

  }, 200);
};
