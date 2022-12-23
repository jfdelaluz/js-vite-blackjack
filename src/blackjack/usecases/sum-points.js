import { updatePlayerPoints } from '../helpers/dom-helper';
import { cardValue } from './card-value';

/**
 * 
 * @param {Array<Number>} playerPoints 
 * @param {Number} turn 
 * @param {String} card 
 */
export const sumPoints = ( playerPoints, turn, card ) => {
  playerPoints[ turn ] += cardValue( card );
  updatePlayerPoints( turn, playerPoints[ turn ] );
};
