import React from 'react';

import styles from './HowToPlay.module.scss';

import { RefContext } from '../../App';

const HowToPlay = () => {
  const { howToPlayRef } = React.useContext(RefContext);

  return (
    <div ref={howToPlayRef} className={styles.howToPlay}>
      <div className={styles.background}>
        <div className={styles.blur}>
          <h1 className={styles.title}>How To Play</h1>
          <div className={styles.description}>
            <div className={styles.left}>
              <h1>Creature Hunting (4 - 18)</h1>
              <p>
                <br /> - in each battle, heroes team up against Creatures
                <br /> - every 2 heroes have 1 Creature to fight against (# of Creatures = # of
                heroes / 2)
                <br /> - heroes performs moves first while the team should decide on the play order
                before the battle starts
                <br /> - each player within a team takes turns to perform their moves
                <br /> - each player can perform moves from their move pools
                <br /> - each move can only be performed once per battle.
              </p>
            </div>
            <div className={styles.right}>
              <h1>Civil war (2 or 3) </h1>
              <p>
                <br /> - in each battle, Heros are up against Heros OR
                <br /> - in each battle, Creatures are up against Creatures
                <br /> - play order is decided on dice, the player who rolls the larger number can
                perform moves first
                <br /> - each player can perform moves from only by using the first card of their
                move pools (face up)
                <br /> - each move can only be performed once per battle. if the moves are out,
                shuffle the move pools and reuse
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
