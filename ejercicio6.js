const listaItems = document.querySelectorAll("li");
listaItems.forEach(li => {
  li.classList.add("resaltado");
  li.classList.remove("oculto");
});
