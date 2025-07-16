// AOS（Animate On Scroll）の初期化
AOS.init({
  duration: 1000,
  once: true
});

// ページ読み込み完了後にアニメーション開始
document.addEventListener('DOMContentLoaded', function() {
  // 少し遅延してアニメーション開始
  setTimeout(initLogoAnimation, 300);
  // スムーススクロール機能
  initSmoothScroll();
});

function initLogoAnimation() {
  // 1. 装飾ラインのアニメーション
  anime({
    targets: '.logo-line',
    scaleX: [0, 1],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutQuart',
    delay: (el, i) => i * 200
  });

  // 2. タイトルラインのアニメーション
  anime({
    targets: '.title-line',
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutCubic',
    delay: (el, i) => 400 + (i * 300)
  });

  // 3. 装飾円のアニメーション
  setTimeout(() => {
    anime({
      targets: '.logo-circle',
      scale: [0, 1],
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutElastic(1, 0.6)',
      delay: (el, i) => i * 200
    });
  }, 1200);

  // 4. サブタイトルのアニメーション
  setTimeout(() => {
    anime({
      targets: '.subtitle',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutQuart'
    });
  }, 1800);

  // 5. ホバー効果の設定
  setupHoverEffects();
}

function setupHoverEffects() {
  const logoContainer = document.querySelector('.logo-container');
  
  if (logoContainer) {
    logoContainer.addEventListener('mouseenter', function() {
      anime({
        targets: '.title-line',
        scale: [1, 1.05],
        duration: 300,
        easing: 'easeOutQuart'
      });
      
      anime({
        targets: '.logo-circle',
        rotate: [0, 180],
        duration: 500,
        easing: 'easeOutCubic'
      });
    });

    logoContainer.addEventListener('mouseleave', function() {
      anime({
        targets: '.title-line',
        scale: [1.05, 1],
        duration: 300,
        easing: 'easeOutQuart'
      });
      
      anime({
        targets: '.logo-circle',
        rotate: [180, 360],
        duration: 500,
        easing: 'easeOutCubic'
      });
    });
  }
}

function initSmoothScroll() {
  // ナビゲーションリンクがある場合のスムーズスクロール
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// スムーズスクロールの例（オプション）
document.addEventListener('DOMContentLoaded', function() {
  // ナビゲーションリンクがある場合のスムーズスクロール
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});