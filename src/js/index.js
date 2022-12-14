// passo 1

const abas = document.querySelectorAll(".aba");

// passo 2

abas.forEach((aba) => {
  aba.addEventListener("click", function () {
    if (aba.classList.contains("selecionado")) {
      return;
    }

    //passo 3

    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    //passo 4

    aba.classList.add("selecionado");

    //passo 5

    const informacaoSelecionada = document.querySelector(
      ".informacao.selecionado"
    );
    informacaoSelecionada.classList.remove("selecionado");

    //passo 6

    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;

    const informacaoASerMostrada = document.getElementById(
      idDoElementoDeInformacoesDaAba
    );
    informacaoASerMostrada.classList.add("selecionado");
  });
});
