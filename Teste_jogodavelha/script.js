const board = document.getElementById('board');
const cells = board.getElementsByTagName('td');
let currentPlayer = 'X';
let gameOver = false;

function handleCellClick() {
  if (gameOver || this.textContent !== '') return;

  this.textContent = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  // Lógica da IA (inteligência artificial)
  if (!gameOver && currentPlayer === 'O') {
    playAI();
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6] // Diagonais
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;

    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      gameOver = true;
      cells[a].style.background = 'green';
      cells[b].style.background = 'green';
      cells[c].style.background = 'green';
      alert(`Player ${currentPlayer} wins!`);
      return;
    }
  }
}

function playAI() {
  // Lógica da sua inteligência artificial aqui
  // Por exemplo, você pode gerar um número aleatório para escolher uma célula vazia
  
  let emptyCells = [];
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === '') {
      emptyCells.push(cells[i]);
    }
  }

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  emptyCells[randomIndex].textContent = currentPlayer;
  
  checkWinner();
  currentPlayer = 'X';
}

for (const cell of cells) {
  cell.addEventListener('click', handleCellClick);
}
