import { clearGame, createHTMLCard, appButtons, disableButtons } from './helpers/dom-helper';
import { cpuTurn, createDeck, drawCard, sumPoints } from './usecases';

export const JackBlack = (() => {
  'use strict';

  let deck = [];
  let playerPoints = [];
  
  // HTML References
  const { btnDrawCard, btnStop, btnNewGame } = appButtons;
  
  const init = ( numPlayers = 2 ) => {
    deck = createDeck();

    playerPoints = [];
    for ( let i = 0; i < numPlayers; i ++ ) {
      playerPoints.push( 0 );
    }

    clearGame();
  };
  
  // Events
  btnDrawCard.addEventListener( 'click', () => {
    const card = drawCard( deck );
    sumPoints( playerPoints, 0, card );
    createHTMLCard( 0, card );
  
    if ( playerPoints[ 0 ] > 21 ) {
      disableButtons();
      cpuTurn( deck, playerPoints );
    } else if ( playerPoints[ 0 ] === 21 ) {
      disableButtons();
      cpuTurn( deck, playerPoints );
    }
  });
  
  btnStop.addEventListener( 'click', () => {
    disableButtons();
    cpuTurn( deck, playerPoints );
  });
  
  btnNewGame.addEventListener( 'click', () => {
    init();
  });

  return {
    init,
  };

})();
