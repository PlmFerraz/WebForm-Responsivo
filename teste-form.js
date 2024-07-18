const botaoEnviar = document.getElementsByClassName("enviar")[0];
const botaoCancelar = document.getElementsByClassName("cancelar")[0];

botaoEnviar.onclick = function () {
  const campos = document.querySelectorAll("input");
  let texto = "";

  const usuarios = {};

  for (let i = 0; i < campos.length; i++) {
    const elementoCampo = campos[i];
    usuarios[elementoCampo.placeholder.toLowerCase()] = elementoCampo.value;
  }
  enviar(usuarios);
};

botaoEnviar.onmousedown = function () {
  botaoEnviar.classList.add("button_ativo");
};

botaoEnviar.onmouseup = function () {
  botaoEnviar.classList.remove("button_ativo");
};

function enviar(usuarios) {
  const areaDoTexto = document.getElementsByTagName("textarea")[0];
  areaDoTexto.value = `
  Nome: ${usuarios.nome}
  Email: ${usuarios.email}
  Telefone: ${usuarios.telefone}
  Assunto: ${usuarios.assunto}
  `;
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
