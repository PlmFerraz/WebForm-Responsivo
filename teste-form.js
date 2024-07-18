const botaoEnviar = document.getElementsByClassName("enviar")[0];
const botaoCancelar = document.getElementsByClassName("cancelar")[0];

botaoEnviar.onclick = function () {
  const campos = document.querySelectorAll("input");
  let texto = "";

  for (let i = 0; i < campos.length; i++) {
    const elementoCampo = campos[i];
    console.log(elementoCampo);
    texto += elementoCampo.value;
  }
  enviar(texto);
};

botaoEnviar.onmousedown = function () {
  botaoEnviar.classList.add("button_ativo");
};

botaoEnviar.onmouseup = function () {
  botaoEnviar.classList.remove("button_ativo");
};

function enviar(texto) {
  const areaDoTexto = document.getElementsByTagName("textarea")[0];
  areaDoTexto.value = texto;
}

botaoCancelar.onclick = function () {
  const formulario = document.querySelector("form");
  const areaDoTexto = document.getElementsByTagName("textarea")[0];

  formulario.reset();
  areaDoTexto.value = "";
};

botaoCancelar.onmousedown = function () {
  botaoCancelar.classList.add("button_ativo");
};

botaoCancelar.onmouseup = function () {
  botaoCancelar.classList.remove("button_ativo");
};
