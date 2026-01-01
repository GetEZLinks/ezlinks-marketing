(function() {
  'use strict';
  
  // Config (set by customer)
  const config = window.EZLinksConfig || {};
  console.log('EZLinks Banner Config:', config);
  
  // Only run on mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (!isMobile) return;
  
  // Check if dismissed recently
  const dismissed = localStorage.getItem('ezlinks_dismissed');
  if (dismissed && Date.now() - dismissed < 7 * 24 * 60 * 60 * 1000) return;
  
  // Create banner element
  const banner = createBanner(config);
  
  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => injectBanner(banner));
  } else {
    injectBanner(banner);
  }
  
  function createBanner(config) {
    const div = document.createElement('div');
    div.id = 'ezlinks-banner';
    div.innerHTML = `
      <style>
        #ezlinks-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 2147483647;
          background: #eee;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          transform: translateY(-100%);
          transition: transform 0.3s ease;
          /* ... all styles inline to avoid conflicts ... */
        }
      </style>
      <div class="ezlinks-content">
        <img src="${config.icon}" alt="">
        <span>${config.title || 'Open in App'}</span>
        <button class="ezlinks-cta">Open</button>
        <button class="ezlinks-close">×</button>
      </div>
    `;
    
    // Attach event listeners
    const cta = div.querySelector('.ezlinks-cta');
    const close = div.querySelector('.ezlinks-close');
    
    cta.onclick = () => {
      window.location = config.link || 'https://playsq.ezl.link/';
    };
    
    close.onclick = () => {
      div.remove();
      localStorage.setItem('ezlinks_dismissed', Date.now());
    };
    
    return div;
  }
  
  function injectBanner(banner) {
    document.body.appendChild(banner);
    
    // Animate in
    setTimeout(() => banner.classList.add('ezlinks-visible'), 10);
  }
})();