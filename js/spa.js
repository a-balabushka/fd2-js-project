window.onhashchange = renderNewState;

function renderNewState() {
  const hash = window.location.hash;
  let state = decodeURIComponent(hash.substr(1));

  if (state === '') {
    state = { page: 'main' };
  } else {
    state = JSON.parse(state);
  }

  switch (state.page) {
    case 'main':
      document.title = 'Battle City';
      document.getElementById('main').style.display = 'flex';
      document.getElementById('play').style.display = 'none';
      document.getElementById('controls').style.display = 'none';
      document.getElementById('records').style.display = 'none';
      break;
    case 'play':
      refreshPage();

      document.title = 'Play - Battle City';
      document.getElementById('play').style.display = 'block';
      document.getElementById('controls').style.display = 'none';
      document.getElementById('records').style.display = 'none';
      document.getElementById('main').style.display = 'none';
      break;
    case 'controls':
      document.title = 'Controls';
      document.getElementById('controls').style.display = 'flex';
      document.getElementById('play').style.display = 'none';
      document.getElementById('records').style.display = 'none';
      document.getElementById('main').style.display = 'none';
      break;
    case 'records':
      document.title = 'Records';
      document.getElementById('records').style.display = 'flex';
      document.getElementById('play').style.display = 'none';
      document.getElementById('controls').style.display = 'none';
      document.getElementById('main').style.display = 'none';
      break;
  }
}

function switchToState(state) {
  location.hash = encodeURIComponent(JSON.stringify(state));
}
function switchToMain() {
  switchToState({ page: 'main' });
}

function switchToPlay() {
  switchToState({ page: 'play' });
}
function switchToControls() {
  switchToState({ page: 'controls' });
}
function switchToRecords() {
  switchToState({ page: 'records' });
}
renderNewState();


function refreshPage() {
  window.onbeforeunload = function(e) {
    const dialogText = 'Refresh';
    e.returnValue = dialogText;
    return dialogText;
  };

  document.onmouseover = function () {
    window.innerDocClick = true;
  };

  document.onmouseleave = function () {
    window.innerDocClick = false;
  };

  window.onhashchange = function () {
    if (!window.innerDocClick) {
      alert('Please, refresh page');
    }
  };
}
