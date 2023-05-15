import * as hemo from './hemo-funcoes.mjs';
import * as rls from 'readline-sync';

export function menuOpcoes() {
    console.log(
        `
        ===== SISTEMA DE CADASTRO DE DOADORES =====
        1 - Cadastrar doador
        2 - Listar doadores
        3 - Buscar doador por tipo sanguíneo
        4 - Buscar doador por data da última doação
        5 - Sair
        `
            );
        return parseInt(rls.question('Escolha uma opção: '));
}

export function executaOpcaoMenu(opcao) {
    switch (opcao) {
        case 1:
            hemo.cadastrar();
            break;
        case 2:
            hemo.listar();
            break;
        case 3:
            hemo.buscarDoadorPorTipoSanguineo();
            break;
        case 4:
            hemo.buscarDoadorPorDataUltimaDoacao();
            break
        case 5:
            process.exit(0);
        default:
            console.log('Opção inválida');
            break;
    }       
}