const botaoAtualizar = document.getElementById("atualizar");
const botaoTema = document.getElementById("tema");
const campoNome = document.getElementById("novoNome");
const campoProf = document.getElementById ("novaProf")
const nomePerfil = document.getElementById("nomePerfil");
const profissao = document.getElementById("profissao");
const mensagem = document.getElementById("mensagem");
const perfil = document.querySelector(".perfil");
botaoAtualizar.addEventListener("click", function name() {
    if (campoNome.value === "") {
        mensagem.textContent = "digite um nome antes de atualizar.";
        return;
    } else if (campoProf.value === "") {
        mensagem.textContent = "digite uma profissão antes de atualizar.";
        return;
    }

    nomePerfil.textContent = campoNome.value;
    profissao.textContent = campoProf.value;
    perfil.classList.add("atualizado");
    mensagem.textContent = "perfil atualizado com sucesso!";
});


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
campoNome.classList.add(
    "campo-ativo"
);
campoNome.classList.remove(
    "campo-ativo"
);
