document.querySelector('a.icone4').addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    setTimeout(function() {
      window.open(href, '_blank');
    }, 2000); // atraso de 2 segundos
  });