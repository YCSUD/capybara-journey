// App.js
import React from 'react';
import './App.css';
import capybaraImage from './assets/capybara.png'; // Убедитесь, что изображение добавлено в эту папку

function App() {
  const difficulty = 300; // Количество квадратов, определяющее сложность
  const squares = [];

  // Определяем размеры основного блока и размеры квадратов
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight * 0.8; // основной блок - 80% экрана
  const squareSize = 10;

  // Генерируем случайное расположение квадратов по всему блоку
  for (let i = 0; i < difficulty; i++) {
    const x = Math.floor(Math.random() * (containerWidth / squareSize)) * squareSize;
    const y = Math.floor(Math.random() * (containerHeight / squareSize)) * squareSize;
    squares.push({ x, y });
  }

  return (
    <div className="main-container">
      {/* Верхний блок - СТАРТ */}
      <div className="start-block center-align">
        <h2>СТАРТ</h2>
      </div>

      {/* Основной блок для лабиринта */}
      <div className="content-block">
        {squares.map((square, index) => (
          <div
            key={index}
            className="square"
            style={{
              left: `${square.x}px`,
              top: `${square.y}px`,
            }}
          />
        ))}
      </div>

      {/* Нижний блок - ФИНИШ */}
      <div className="finish-block center-align">
        <h2>ФИНИШ</h2>
      </div>

      {/* Изображение капибары, изначально по центру блока СТАРТ */}
      <img
        src={capybaraImage}
        alt="Capybara"
        className="capybara-image"
        style={{
          position: 'absolute',
          top: '5%', // Вертикально центрируется по высоте блока СТАРТ
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Блок со стрелками */}
      <div className="controls">
        <i className="material-icons control-icon">keyboard_arrow_up</i>
        <div className="horizontal-controls">
          <i className="material-icons control-icon">keyboard_arrow_left</i>
          <i className="material-icons control-icon">keyboard_arrow_right</i>
        </div>
        <i className="material-icons control-icon">keyboard_arrow_down</i>
      </div>
    </div>
  );
}

export default App;
