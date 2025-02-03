document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeButton = document.querySelector('.close-button');
    const menuOverlay = document.getElementById('menu');
    const headerText = document.querySelector('header h1');

    // ハンバーガーメニューの開閉機能
    hamburgerMenu.addEventListener('click', () => {
        menuOverlay.classList.add('open');
    });

    closeButton.addEventListener('click', () => {
        menuOverlay.classList.remove('open');
    });

    // h1要素のアニメーション
    headerText.style.opacity = '0';
    headerText.style.transform = 'translateY(20px)';

    setTimeout(() => {
        headerText.style.transition = 'opacity 1s, transform 1s';
        headerText.style.opacity = '1';
        headerText.style.transform = 'translateY(0)';
    }, 100);
});


window.addEventListener('scroll', function() {
    var content01 = document.getElementById('content01');
    var title = document.getElementById('title');
    var dragonFly = document.getElementById('DragonFly');
  
    var content01Top = content01.getBoundingClientRect().top;
  
    if (content01Top <= window.innerHeight) {
      title.style.opacity = 1;
      title.style.transform = 'translate(0, 0)';
  
      setTimeout(function() {
        dragonFly.style.opacity = 1;
        dragonFly.style.transform = 'translate(0, 0)';
      }, 700); // 0.5s for title + 0.2s delay
    }
  });
  