import { menuOpcoes, executaOpcaoMenu } from "./hemo-menu.mjs";

process.on('exit', fim);

let opcao;

while (true) {
    opcao = menuOpcoes();
    executaOpcaoMenu(opcao);    
}

function fim() {
    console.log('Fim do programa');
}