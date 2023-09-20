const link = document.querySelector('a.itemmenu5');
link.addEventListener('click', function(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  setTimeout(function() {
    const newWindow = window.open(href);
    newWindow.addEventListener('load', function() {
      alert('Faça o login!');
    });
  }, 500); // atraso de 2 segundos
});