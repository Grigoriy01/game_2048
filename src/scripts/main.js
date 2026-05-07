'use strict';

// Uncomment the next lines to use your game instance in the browser
import Game from '../modules/Game.class.js';

const game = new Game();

class GameView {
  #timerWin;
  #languages = {
    en: [
      'How to play: Use your arrow keys (up, down, left, right) to move the tiles.',
      'Merging: When two tiles with the same number touch, they merge into one!',
      'Goal: Join the tiles to get to the 2048 tile!',
      'Game Over: If the board is full and there are no moves left, the game is over.',
    ],
    de: [
      'So wird gespielt: Benutze die Pfeiltasten (hoch, runter, links, rechts), um die Kacheln zu bewegen.',
      'Verschmelzen: Wenn zwei Kacheln mit der gleichen Zahl einander berühren, verschmelzen sie zu einer!',
      'Ziel: Kombiniere die Kacheln, um die 2048-Kachel zu erreichen!',
      'Spiel vorbei: Wenn das Spielfeld voll ist und keine Züge mehr möglich sind, ist das Spiel beendet.',
    ],
    ru: [
      'Как играть: Используй клавиши со стрелками (вверх, вниз, влево, вправо), чтобы перемещать плитки.',
      'Слияние: Когда две плитки с одинаковыми числами соприкасаются, они объединяются в одну, а их номиналы суммируются.',
      'Цель: Соединяй плитки и копи очки, чтобы добраться до числа 2048.',
      'Конец игры: Если поле заполнено и доступных ходов для слияния больше нет — игра окончена.',
    ],
    esp: [
      'Cómo jugar: Usa las teclas de flecha (arriba, abajo, izquierda, derecha) para mover las fichas.',
      'Fusión: ¡Cuando dos fichas con el mismo número se tocan, se fusionan en una sola!',
      'Objetivo: ¡Combina las fichas para llegar a la ficha 2048!',
      'Fin del juego: Si el tablero está lleno y no quedan movimientos, el juego termina.',
    ],
  };

  #touchPosStartX = 0;
  #touchPosStartY = 0;

  constructor(logic) {
    this.game = logic;

    this.bodyContainer = document.querySelector('tbody');
    this.startBtn = document.querySelector('.button');
    this.rulesBtn = document.querySelector('.rules-btn');
    this.rulesMessage = document.querySelector('.message-rules');
    this.rulesItems = document.querySelectorAll('.rules-item');
    this.languageContainer = document.querySelector('.language-buttons');
    this.currentScore = document.querySelector('.game-score');
    this.bestScore = document.querySelector('.game-best-score');
    this.tableItems = [...document.querySelectorAll('.field-cell')];

    this.messageItems = document.querySelector('.message-container');
    this.titleGame = document.querySelector('h1');

    // --> var for the blocks Message
    this.messageStart = this.messageItems.querySelector('.message-start');
    this.messageWin = this.messageItems.querySelector('.message-win');
    this.messageLose = this.messageItems.querySelector('.message-lose');

    this.initListener();

    // We start an inactivity timer
    // to draw the user's attention to the Start button.
    this.timerIdle = setTimeout(
      () => this.applyAnimationClass(this.startBtn),
      5000,
    );
  }

  // #region Listeners
  initListener() {
    this.startBtn.addEventListener('click', () => {
      this.handleBtnStart();
      clearTimeout(this.timerIdle);
      this.updateView();
    });

    this.rulesBtn.addEventListener('click', () => {
      this.switchLanguage('en');
      this.rulesMessage.classList.toggle('hidden');
    });

    this.bodyContainer.addEventListener('touchstart', (e) => {
      this.#touchPosStartX = e.touches[0].clientX;
      this.#touchPosStartY = e.touches[0].clientY;
    });

    this.bodyContainer.addEventListener(
      'touchmove',
      (e) => {
        e.preventDefault();
      },
      { passive: false },
    );

    this.bodyContainer.addEventListener('touchend', (e) => {
      const touchPosEndX = e.changedTouches[0].clientX;
      const touchPosEndY = e.changedTouches[0].clientY;

      const threshold = 50; // pixels
      const diffX = touchPosEndX - this.#touchPosStartX;
      const diffY = touchPosEndY - this.#touchPosStartY;

      // Проверяем, было ли движение достаточно длинным по любой из осей
      if (Math.abs(diffX) < threshold && Math.abs(diffY) < threshold) {
        return;
      }

      if (this.#touchPosStartX < touchPosEndX) {
        this.game.moveRight();
        this.updateView();
      }

      if (this.#touchPosStartX > touchPosEndX) {
        this.game.moveLeft();
        this.updateView();
      }

      if (this.#touchPosStartY < touchPosEndY) {
        this.game.moveDown();
        this.updateView();
      }

      if (this.#touchPosStartY > touchPosEndY) {
        this.game.moveUp();
        this.updateView();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.game.moveLeft();
        this.updateView();
      }

      if (e.key === 'ArrowRight') {
        this.game.moveRight();
        this.updateView();
      }

      if (e.key === 'ArrowUp') {
        this.game.moveUp();
        this.updateView();
      }

      if (e.key === 'ArrowDown') {
        this.game.moveDown();
        this.updateView();
      }
    });

    this.languageContainer.addEventListener('click', (e) => {
      const value = e.target.closest('.btn-language');
      const lowerCaseValue = value.textContent.toLowerCase();
      const targetValue = e.target;

      if (!value) {
        return;
      }

      this.switchLanguage(lowerCaseValue, targetValue);
    });

    // #endregion Listeners
  }

  // --> updateView
  updateView() {
    const state = this.game.getState();

    this.renderBoard(state.board, state.targetCellIndex);
    this.renderStatusGame(state.statusGame);
    this.renderScore(state.score, state.bestScore);
  }
  // #region methods-tools
  // timer win
  runWinTimer() {
    this.#timerWin = setTimeout(
      () => this.applyAnimationClass(this.startBtn),
      5000,
    );
  }
  // --> work with message blocks
  renderMessage(statusValue) {
    if (statusValue === Game.statuses.idle) {
      return;
    }

    this.messageStart.classList.add('hidden');
    this.messageLose.classList.add('hidden');
    this.messageWin.classList.add('hidden');
    this.messageItems.classList.add('hidden');
    this.titleGame.classList.remove('hidden');

    if (statusValue !== Game.statuses.playing) {
      const sufix = statusValue === Game.statuses.win ? 'win' : 'lose';
      const messageEl = this.messageItems.querySelector(`.message-${sufix}`);

      if (sufix === 'lose') {
        this.runWinTimer();
      }

      if (sufix === 'win') {
        this.titleGame.classList.add('hidden');
      }
      messageEl.classList.remove('hidden');
      this.messageItems.classList.remove('hidden');
    }
  }

  // --> handleBtnStart
  handleBtnStart() {
    const statusValue = this.game.getState().statusGame;

    if (statusValue !== Game.statuses.idle) {
      this.game.restart();
      this.tableItems.forEach((el) => this.applyAnimationClass(el));
      this.applyAnimationClass(this.startBtn);
      clearTimeout(this.#timerWin);
    } else {
      this.game.start();
      this.applyAnimationClass(this.startBtn);
      clearTimeout(this.timerIdle);
    }
  }

  // --> rendering Board
  renderBoard(boardData, cellIndex) {
    const flatBoard = boardData.flat();

    this.tableItems.forEach((cell, i) => {
      const classListValue = [...cell.classList];
      const value = flatBoard[i];
      const classModif = `field-cell--${value}`;
      let j = 0;

      // Remove old class modifiers (field-cell--value)
      // before rendering the new state
      while (j < classListValue.length) {
        const currString = classListValue[j];

        if (currString.startsWith('field-cell--')) {
          cell.classList.remove(currString);
        }
        j++;
      }

      if (value === 2048) {
        this.applyAnimationClass(cell);
        this.runWinTimer();
      }

      cell.textContent = value === 0 ? '' : value;
      cell.classList.add(classModif);

      cellIndex.forEach((val) => {
        if (i === val) {
          this.trigerCellPulse(cell);
        }
      });
    });
  }

  // --> rendering Status - Game
  renderStatusGame(infoStatus) {
    // changing button
    if (infoStatus !== Game.statuses.idle) {
      this.startBtn.classList.remove('start');
      this.startBtn.classList.add('restart');
      this.startBtn.textContent = 'Restart';
    }

    this.renderMessage(infoStatus);
  }

  // -->rendering Score
  renderScore(dataScore, dataBestScore) {
    this.currentScore.textContent = dataScore;
    this.bestScore.textContent = dataBestScore;
  }

  // #endregion methods-tools

  // #region animation
  trigerCellPulse(currCell) {
    currCell.classList.add('scale-element');

    setTimeout(() => {
      currCell.classList.remove('scale-element');
    }, 300);
  }

  applyAnimationClass(element) {
    const currStatus = this.game.getState().statusGame;

    if (currStatus === Game.statuses.playing) {
      element.classList.remove('vibrate-element');

      return;
    }

    element.classList.add('vibrate-element');
  }

  switchLanguage(newLanguage, currEl) {
    switch (newLanguage) {
      case 'de':
        this.changerActiveLanguageClass(currEl);

        return this.renderRulesMessage(this.#languages.de);

      case 'ru':
        this.changerActiveLanguageClass(currEl);

        return this.renderRulesMessage(this.#languages.ru);

      case 'esp':
        this.changerActiveLanguageClass(currEl);

        return this.renderRulesMessage(this.#languages.esp);

      default:
        if (currEl) {
          this.changerActiveLanguageClass(currEl);
        }

        return this.renderRulesMessage(this.#languages.en);
    }
  }

  renderRulesMessage(arrText) {
    let str = 0;

    this.rulesItems.forEach((li) => {
      while (str < arrText.length) {
        li.textContent = arrText[str];
        str++;
        break;
      }
    });
  }

  changerActiveLanguageClass(currButton) {
    const activeClass = this.languageContainer.querySelector(
      '.btn-language--is-active',
    );

    if (activeClass) {
      activeClass.classList.remove('btn-language--is-active');
    }

    currButton.classList.add('btn-language--is-active');
  }
}

const view = new GameView(game);

view.updateView();
