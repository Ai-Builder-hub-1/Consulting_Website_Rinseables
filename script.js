(function () {
  // Mobile menu
  var menuBtn = document.querySelector('.menu-btn');
  var mobileNav = document.getElementById('mobile-nav');
  if (menuBtn && mobileNav) {
    var setMenu = function (open) {
      mobileNav.hidden = !open;
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.textContent = open ? 'Close' : 'Menu';
    };
    menuBtn.addEventListener('click', function () { setMenu(mobileNav.hidden); });
    mobileNav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setMenu(false);
    });
  }

  // Example workflow stepper
  var ex = document.querySelector('[data-example]');
  if (!ex) return;
  var cards = Array.prototype.slice.call(ex.querySelectorAll('[data-card]'));
  var caption = ex.querySelector('[data-caption]');
  var runLabel = ex.querySelector('[data-run-label]');
  var captions = [
    'Static view: all three steps shown. Press Run example to step through them.',
    '9:14 AM  A quote request arrives from the website form.',
    '9:14 AM  It is logged in the tracker with Sam as owner.',
    '11:14 AM  Two hours, no reply logged. Sam is reminded.'
  ];
  var step = 0, done = false, timer = null;

  function stop() { if (timer) { clearInterval(timer); timer = null; } }

  function render() {
    cards.forEach(function (card, i) {
      var n = i + 1;
      var status = 'step ' + n + ' of 3';
      card.classList.remove('is-running', 'is-waiting');
      if (step > 0) {
        if (n < step || (done && n <= step)) status = 'done ✓';
        else if (n === step) { status = 'running now'; card.classList.add('is-running'); }
        else { status = 'waiting'; card.classList.add('is-waiting'); }
      }
      card.querySelector('[data-status]').textContent = status;
    });
    caption.textContent = done ? 'Done. Sam still makes the call and writes the quote.' : captions[step];
    runLabel.textContent = step > 0 && !done ? 'Running…' : (done ? 'Run again' : 'Run example');
  }

  function advance() {
    if (step >= 3) { stop(); done = true; }
    else { step += 1; done = false; }
    render();
  }

  ex.querySelector('[data-run]').addEventListener('click', function () {
    stop(); step = 1; done = false; render();
    timer = setInterval(advance, 1600);
  });
  ex.querySelector('[data-next]').addEventListener('click', function () { stop(); advance(); });
  ex.querySelector('[data-reset]').addEventListener('click', function () { stop(); step = 0; done = false; render(); });
})();
