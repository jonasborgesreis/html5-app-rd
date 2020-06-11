const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container-list');
app.appendChild(container);

var currentData = localStorage.getItem('mocky');

if (currentData) {
  var request = new XMLHttpRequest();
  request.open('GET', currentData, true);
  request.onload = async function () {

    var data = await JSON.parse(this.response);
    if (data) {
      data.forEach(user => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const h1 = document.createElement('h1');
        h1.textContent = user.login;

        const image = document.createElement('img')
        image.setAttribute('src', user.avatar_url);


        container.appendChild(card);
        card.appendChild(image);
        card.appendChild(h1);
      });
    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Erro de conexão com serviço!`;
      app.appendChild(errorMessage);
    }
  }
  request.send();

  setTimeout(function() {
    // localStorage.clear();
    localStorage.removeItem('mocky');
  }, 300000);

} else {
  window.location.href = 'index.html';
}