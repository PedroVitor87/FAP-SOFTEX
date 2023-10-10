const prompt = require('prompt-sync')({sigint: true}) //Importando o módulo 'prompt-sync' para facilitar a entrada do usuário

class Observer { //Classe abstrata Observador
  update() {} //Método que deve ser implementado nas subclasses
}
  
class Editor {   //Classe Editor (Assunto)
  constructor() {
    this.observadores = []; //Lista de observadores
  }
  
  adicionarObservador(observador) { //Adiciona um observador à lista
    this.observadores.push(observador);
  }

  removerObservador(observador) { //Remove um observador da lista
    const indice = this.observadores.indexOf(observador);
    if (indice !== -1) {
      this.observadores.splice(indice, 1);
    }
  }

  notificar(evento) {  //Notifica todos os observadores sobre um evento
    this.observadores.forEach(observador => {
      observador.update(evento);
    });
  }
}
  
class TextEditor extends Editor { //Subclasse TextEditor que estende Editor
  constructor() {
    super();
    this.linhas = []; //Lista de linhas de texto
  }

  inserirLinha(numeroLinha, texto) { //Insere uma linha de texto na posição especificada
    if (numeroLinha >= 0 && numeroLinha <= this.linhas.length) {
      this.linhas.splice(numeroLinha, 0, texto);
      this.notificar('inserirLinha');
    }
  }

  removerLinha(numeroLinha) { //Remover uma linha de texto na posição especificada
    if (numeroLinha >= 0 && numeroLinha < this.linhas.length) {
      this.linhas.splice(numeroLinha, 1);
      this.notificar('removerLinha');
    }
  }

  abrir() { //Notifica os observadores sobre o evento 'abrir'
    this.notificar('abrir');
  }

  salvar() { //Notifica os observadores sobre o evento 'salvar'
    this.notificar('salvar');
  }
}
  
class ImpressoraDeConteudo extends Observer { //Classe para imprimir o conteúdo
  constructor(textEditor) {
    super();
    this.textEditor = textEditor;
    this.textEditor.adicionarObservador(this); //Adiciona esta instância como um observador do TextEditor
  }

  update(evento) { //Método chamado quando o TextEditor notifica sobre 'abrir' ou 'salvar'
    if (evento === 'abrir' || evento === 'salvar') {
      console.log('Conteúdo do arquivo:');
      this.textEditor.linhas.forEach((linha, indice) => { //Imprime todas as linhas de texto
        console.log(`Linha ${indice + 1}: ${linha}`);
      });
      console.log('---------------------------');
    }
  }
}

function main() { //Função principal para interação com o usuário
  const textEditor = new TextEditor();
  const impressoraDeConteudo = new ImpressoraDeConteudo(textEditor);

  console.log('Digite as linhas de texto (digite "EOF" para encerrar):');

  let numeroLinha = 0;
  let entrada;

  while (true) { //Loop para receber entradas do usuário até que 'EOF' seja digitado
    entrada = prompt(`Linha ${numeroLinha + 1}: `);
    if (entrada === 'EOF') {
      break;
    }
    textEditor.inserirLinha(numeroLinha, entrada); //Insere a linha no TextEditor
    numeroLinha++;
  }

  textEditor.salvar(); //Notifica sobre o evento 'salvar'
}

//Chama a função principal para iniciar a interação com o usuário
main();
