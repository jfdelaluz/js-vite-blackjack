// HTML References
const btnDrawCard = document.querySelector( '#btn-draw-card' ),
  btnStop = document.querySelector( '#btn-stop' ),
  btnNewGame = document.querySelector( '#btn-new-game' ),
  pointsLabels = document.querySelectorAll( 'h1 small' ),
  playerCards = document.querySelectorAll( '.cards-container' ),
  resultContainer = document.querySelector( '#result-container' );

/**
 * 
 * @param {Number} turn Player identifier ( 0: player 1, 1: CPU )
 * @param {String} card 
 */
export const createHTMLCard = ( turn, card ) => {
  const htmlCard = document.createElement( 'img' );
  htmlCard.classList.add( 'card' );
  htmlCard.src = `assets/cards/${ card }.png`;

  playerCards[ turn ].append( htmlCard );
};

/**
 * 
 * @param {Number} turn 
 * @param {Number} points 
 */
export const updatePlayerPoints = ( turn, points ) => {
  pointsLabels[ turn ].innerText = points;
};

/**
 * Clears vlaues for players points and cards containers
 */
export const clearGame = () => {
  playerCards.forEach( ele => ele.innerHTML = '' );
  pointsLabels.forEach( ele => ele.innerText = 0 );

  btnDrawCard.disabled = false;
  btnStop.disabled = false;

  resultContainer.innerHTML = '';
};

/**
 * Disables Draw Card and Stop buttons
 */
export const disableButtons = () => {
  btnDrawCard.disabled = true;
  btnStop.disabled = true;
};

/**
 * 
 * @param {String} message Message to display
 * @param {String} level Possible values: success | danger | warning
 */
export const displayResults = ( message, level ) => {
  let messageSpan = document.createElement( 'div' );
  messageSpan.classList = `alert alert-${ level } mb-0`;
  messageSpan.innerText = message;

  resultContainer.append( messageSpan );
};

/**
 * Game buttons HTML references
 */
export const appButtons = {
  btnDrawCard,
  btnStop,
  btnNewGame,
};
