    const symbols = ['🍎', '🍌', '🍇', '🍓', '🍒', '🍍', '🥝', '🍉'];
    const cardsArray = [...symbols, ...symbols]; 
    cardsArray.sort(() => 0.5 - Math.random());  

    const board = document.getElementById('board');
    let firstCard = null;
    let secondCard = null;

    cardsArray.forEach((symbol, i) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.dataset.symbol = symbol;
      card.textContent = '?';

      card.onclick = () => {
        if (card.classList.contains('open') || secondCard) return;

        card.textContent = symbol;
        card.classList.add('open');

        if (!firstCard) {
          firstCard = card;
        } else {
          secondCard = card;

          if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
            firstCard = null;
            secondCard = null;
            checkWin();
          } else {
            setTimeout(() => {
              firstCard.textContent = '?';
              secondCard.textContent = '?';
              firstCard.classList.remove('open');
              secondCard.classList.remove('open');
              firstCard = null;
              secondCard = null;
            }, 800);
          }
        }
      };

      board.appendChild(card);
    });

    function checkWin() {
      const allCards = document.querySelectorAll('.card');
      const openCards = document.querySelectorAll('.card.open');
      if (allCards.length === openCards.length) {
        setTimeout(() => {
          alert('🎉 Вы нашли все пары! Игра завершена!');
        }, 300);
      }
    }