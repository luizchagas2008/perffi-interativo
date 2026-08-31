const botaoAtualizar = document.getElementById("atualizar");
const botaoTema = document.getElementById("tema");
const campoNome = document.getElementById("novoNome");
const nomePerfil = document.getElementById("nomePerfil1");
const profissao = document.getElementById("profissao");
const mensagem = document.getElementById("mensagem");
const perfil = document.querySelector(".perfil");
botaoAtualizar.addEventListener( "click", function name() {
    if (campoNome.value === "") {
        mensagem.textContent = "digite um nome antes de atualizar.";
        return;
    }
 nomePerfil.textContent = campoNome.value
 profissao.textContent = "desenvolvedor (a) web";
 perfil.classList.add("atualizado");
 mensagem.textContent = "perfil atualizado com sucesso!"
}
);
 botaoTema.addEventListener(
    "click", function () {
        document.body
        .classList
        .toggle("tema-escuro");
    }
 );
 campoNome.addEventListener(
    "input", function () {
 nomePerfil.textContent = campoNome.value;
} 
);
campoNome.addEventListener(
    "focus", function () {
        campoNome.style.border = "2px solid blue";
    }
);
campoNome.addEventListener(
    "blur", function () {
        campoNome.style.border = "1px solid gray";
    }
);
