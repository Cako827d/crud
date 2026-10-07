const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let flashcards = [];
let proximoIdFlashcard = 1;

// CREATE

function cadastrarFlashcards() {


  rl.question("Digite a pergunta: ", (pergunta) => {

    rl.question("Digite a resposta: ", (resposta) => {

      rl.question("Digite a materia: ", (materia) => {

        rl.question("Digite a dificuldade: ", (dificuldade) => {

          let flashcard = {
            id: 1,
            pergunta: pergunta,
            resposta: resposta,
            materia: materia,
            dificuldade: dificuldade,
            acertos: 0,
            erros: 0,

          };


          flashcards.push(flashcard);

          proximoIdFlashcard++;

          console.log("\nFlashcards cadastrado com sucesso!");

          mostrarMenu();


        });

      });

    })
  })

}

// READ
function listarFlashcards() {

  console.log("\n--- LISTAR DE FLASHCARDS ---");

  if (flashcards.length === 0) {

    console.log("Nenhum flashcards cadastrado.");

    mostrarMenu();

    return;
  }

  for (let i = 0; i < flashcards.length; i++) {

    console.log("-------------------------");

    console.log("ID:", flashcards[i].id);
    console.log("pergunta:", flashcards[i].pergunta);
    console.log("resposta:", flashcards[i].resposta);
    console.log("materia:", flashcards[i].materia);
    console.log("dificuldade:", flashcards[i].dificuldade);
    console.log("acertos:", flashcards[i].acertos);
    console.log("erros:", flashcards[i].erros);

  }

  mostrarMenu();
}

// READ POR ID
function buscarFlashcardsPorId() {

  rl.question("Digite o ID do flashcards: ", (id) => {

    id = Number(id);

    let flashcardsEncontrado = null;

    for (let i = 0; i < flashcards.length; i++) {

      if (flashcards[i].id === id) {

        flashcardsEncontrado = flashcards[i];

      }

    }

    if (flashcardsEncontrado === null) {

      console.log("flashcards não encontrado.");

    } else {

      console.log("\nflashcards encontrado:");

      console.log("ID:", flashcardEncontrado.id);
      console.log("Pergunta:", flashcardEncontrado.pergunta);
      console.log("Resposta:", flashcardEncontrado.resposta);
      console.log("Materia:", flashEncontrado.materia);
      console.log("Dificuldade:", flashcardsEncontrado.dificuldade);
      console.log("Acertos:", flashcardsEncontrado.acertos);
      console.log("Erros:", flashcardsEncontrado.erros);

    }

    mostrarMenu();

  });

}


// UPDATE

function atualizarFlashcards() {

  rl.question("Digite o ID do flashcards que deseja atualizar: ", (id) => {

    id = Number(id);

    let flashcardsEncontrado = null;

    for (let i = 0; i < flashcards.length; i++) {

      if (flashcards[i].id === id) {

        flashcardsEncontrado = flashcards[i];

      }

    }

    if (flashcardsEncontrado === null) {

      console.log("flashcards não encontrado.");

      mostrarMenu();

      return;
    }

    console.log("flahcards encontrado:", flashcardsEncontrado.resposta);

    rl.question("Digite a nova pergunta: ", (pergunta) => {

      rl.question("Digite a nova resposta: ", (resposta) => {

        rl.question("Digite a nova materia: ", (materia) => {

          rl.question("Digite a nova dificuldade", (dificuldade) => {

            flashcardsEncontrado.pergunta = pergunta;
            flashcardsEncontrado.resposta = resposta;
            flashcardsEncontrado.materia = materia;
            flashcardsEncontrado.dificuldade = dificuldade;

            console.log("flashcards atualizado com sucesso!");

            mostrarMenu();

          });

        });

      });

    });
  })
}


// DELETE
function removerFlashcards() {

  rl.question("Digite o ID do flashcards: ", (id) => {

    id = Number(id);

    let indice = -1;

    for (let i = 0; i < flashcards.length; i++) {

      if (clientes[i].id === id) {

        indice = i;

      }

    }

    if (indice === -1) {

      console.log("flashcards não encontrado.");

    } else {

      flashcards.splice(indice, 1);

      console.log("flashcards removido com sucesso!");

    }

    mostrarMenu();

  });

}

//  BUSCAR POR MATERIA

function buscarPorMateria() {

  rl.question("Digite a matéria: ", (materia) => {

    let totalEncontrado = 0;

    console.log("\n" + materia);

    for (let i = 0; i < flashcards.length; i++) {

      if (flashcards[i].materia === materia) {

        console.log(
          flashcards[i].id + " - " + flashcards[i].pergunta
        );

        totalEncontrado++;
      }
    }

    console.log("Total encontrado:", totalEncontrado);

    mostrarMenu();
  });
}

// BUSCAR POR ID

function buscarPorDificuldade() {

  rl.question(
    "1 - Fácil\n2 - Médio\n3 - Difícil\nDigite a dificuldade: ",
    (opcao) => {

      let dificuldade;

      if (opcao === "1") {
        dificuldade = "facil";
      }

      if (opcao === "2") {
        dificuldade = "medio";
      }

      if (opcao === "3") {
        dificuldade = "dificil";
      }

      console.log("\nFlashcards " + dificuldade + ":");

      for (let i = 0; i < flashcards.length; i++) {

        if (flashcards[i].dificuldade === dificuldade) {

          console.log("ID:", flashcards[i].id);
          console.log("Pergunta:", flashcards[i].pergunta);
        }
      }

      mostrarMenu();
    }
  );
}

// MODO DE ESTUDO

function modoDeEstudoo() {


}

// MOSTRAR DESEMPENHO

function mostrarDesempenho() {

  rl.question('Qual seu id ', (id) => {

    for (let i = 0; i < flashcards.length; i++) {

      if (flashcards[i].id === id) {

        let tentativas = flashcards[i].acertos + flashcards[i].erros;

        console.log(tentativas);

        if (flashcards[i].acertos > flashcards[i].erros) {
          console.log('Bom desempenho');

        } else if (flashcards[i].acertos === flashcards[i].erros) {
          console.log('Precisa praticar mais');

        } else {
          console.log('Revisar este conteudo');
        }
      }

      mostrarMenu();

    }
  });
}

// FLASHCARDS COM MAIS ERROS

function flashcardsComMaisErros() {

  let maiorErros = 0;
  let flashcardMaior;

  for (let i = 0; i < flashcards.length; i++) {

    if (flashcards[i].erros > maiorErros) {

      maiorErros = flashcards[i].erros;

      flashcardMaior = flashcards[i];



    }

  }

  console.log("flashcards que mais precisa de revisao");

  console.log('flashcardsMaior.id');

  console.log('flashcardMaior.pergunta');

  console.log('flashcardMaior.materia');

  console.log('flashcardMaior.erros');

  mostrarMenu();



}
// ESTATISTICAS GERAIS

function estatisticasGerais() {

  let totalAcertos = 0;
  let totarErros = 0;

  for (let i = 0; i < flashcards.length; i++) {

    totalAcertos = totalAcertos + flashcards[i].acertos;
    totalErros = totalErros + flashcards[i].erros;

  }

  let totalRespostas = totalAcertos + totalErros;


  console.log("======= ESTATÍSTICAS =======");
  console.log("flashcards cadastrados:", flashcards.length);
  console.log("Total de acertos:", totalAcertos);
  console.log("Total de erros:", totalErros);
  console.log("Total de respostas:", totalRespostas);

  mostrarMenu();

}

function mostrarMenu() {



  console.log("\n===============================");
  console.log("       FLASHCARDS               ");
  console.log("===============================");

  console.log("\nFLASHCARDS");
  console.log("1 - Cadastrar flashcards");
  console.log("2 - Listar flashcards");
  console.log("3 - Buscar flashcards por ID");
  console.log("4 - Atualizar flashcards");
  console.log("5 - Remover flashcards");
  console.log("6 - Buscar por materia");
  console.log("7 - Buscar por dificuldade");
  console.log("8 - Modo de estudo");
  console.log("9 - Modo de desempenho");
  console.log("10 - Flashcards com mais erros");
  console.log("11 - Estatisticas gerais");

  console.log("\n0 - Sair");

  rl.question("\nEscolha uma opção: ", (opcao) => {

    if (opcao === "1") {

      cadastrarFlashcards();

    } else if (opcao === "2") {

      listarFlashcards();

    } else if (opcao === "3") {

      buscarFlashcardsPorId();

    } else if (opcao === "4") {

      atualizarFlashcards();

    } else if (opcao === "5") {

      removerFlashcards();

    } else if (opcao === "6") {

      buscarPorMateria();

    } else if (opcao === "7") {

      buscarPorDificuldade();

    } else if (opcao === "8") {

      modoDeEstudo();

    } else if (opcao === "9") {

      modoDeDesempenho();

    } else if (opcao === "10") {

      flashcardsComMaisErros();

    } else if (opcao === "11") {

      estatisticasGerais();

    } else if (opcao === "0") {

      console.log("Sistema encerrado.");

      rl.close();

    } else {

      console.log("Opção inválida.");

      mostrarMenu();

    }

  });

}



// =====================================
// INICIAR PROGRAMA
// =====================================

mostrarMenu();