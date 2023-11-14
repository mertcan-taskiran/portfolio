import React, { useState, useEffect } from 'react';

function Mode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Sayfa yüklendiğinde localStorage'dan tema bilgisini al
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
      setIsDarkMode(true);
      applyDarkMode();
    }
  }, []);

  useEffect(() => {
    // Tema değiştirildiğinde localStorage'a kaydet
    if (isDarkMode) {
      localStorage.setItem('theme', 'dark');
      applyDarkMode();
    } else {
      localStorage.setItem('theme', 'light');
      applyLightMode();
    }
  }, [isDarkMode]);

  const applyDarkMode = () => {
    // Gece modu
    document.body.style.backgroundColor = '#1A202C';

    document.getElementById('navbar').classList.remove('navbar-light');
    document.getElementById('navbar').classList.add('navbar-dark');
    document.getElementById('footer').classList.remove('navbar-light');
    document.getElementById('footer').classList.add('navbar-dark');

    for (let i = 1; i <= 7; i++) {
      const colorBlack = document.getElementById('color-black-' + i);
      colorBlack.classList.remove('light-color-black');
      colorBlack.classList.add('night-color-black');
    }

    for (let i = 1; i <= 5; i++) {
      const baslik = document.getElementById('baslik-' + i);
      baslik.classList.remove('light-color-black');
      baslik.classList.add('night-color-black');
    }

    for (let i = 1; i <= 6; i++) {
      const icon = document.getElementById('icon-' + i);
      icon.classList.remove('light-color-black');
      icon.classList.add('night-color-black');
    }

  };

  const applyLightMode = () => {
    // Gündüz modu
    document.body.style.backgroundColor = 'white'; 

    document.getElementById('navbar').classList.remove('navbar-dark');
    document.getElementById('navbar').classList.add('navbar-light');
    document.getElementById('footer').classList.remove('navbar-dark');
    document.getElementById('footer').classList.add('navbar-light');

    for (let i = 1; i <= 7; i++) {
      const colorBlack = document.getElementById('color-black-' + i);
      colorBlack.classList.remove('night-color-black');
      colorBlack.classList.add('light-color-black');
    }


    for (let i = 1; i <= 5; i++) {
      const baslik = document.getElementById('baslik-' + i);
      baslik.classList.remove('night-color-black');
      baslik.classList.add('light-color-black');
    }

    for (let i = 1; i <= 6; i++) {
      const icon = document.getElementById('icon-' + i);
      icon.classList.remove('night-color-black');
      icon.classList.add('light-color-black');
    }    

  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="mode-toggle">
      <button id='icon-btn' onClick={toggleMode}>
        <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
      </button>
    </div>
  );
}

export default Mode;
