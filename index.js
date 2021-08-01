const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  function vaciarLista() {
    const ulEl = document.querySelector(".lista");
    const ulLength = ulEl.children.length;

    for (let i = 0; i < ulLength; i++) {
      ulEl.removeChild(ulEl.children[0]);
    }
  }

  vaciarLista();

  function crearNuevaLista() {
    const ulEl = document.querySelector(".lista");
    const listaLn = cosasQueAprendimos.length;

    for (let index = 0; index < listaLn; index++) {
      const newLi = document.createElement("li");
      newLi.classList = cosasQueAprendimos[index].class;
      newLi.innerText = cosasQueAprendimos[index].tema;
      ulEl.appendChild(newLi);
    }
  }

  crearNuevaLista();
}

main();
