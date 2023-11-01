import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefa-ac2',
  templateUrl: './tarefa-ac2.component.html',
  styleUrls: ['./tarefa-ac2.component.css']
})
export class TarefaAC2Component {
  tarefas = [
    { descricao: 'Fazer Café', conclusao: true },
    { descricao: 'Limpar o Quintal', conclusao: false },
    { descricao: 'Lavar a Louça', conclusao: true },
    { descricao: 'Apostar no Bicho', conclusao: true },
    { descricao: 'Preparar a Janta', conclusao: false },
    { descricao: 'Limpar o Banheiro', conclusao: false }
  ];

  mudarStatusTarefa(tarefa: any) {
    tarefa.conclusao = !tarefa.conclusao;
  }

}
