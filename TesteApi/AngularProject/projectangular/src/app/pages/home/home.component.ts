import { MatDialog } from '@angular/material/dialog';
import { Funcionario } from './../../models/Funcionario';
import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { ExcluirComponent } from 'src/app/componentes/excluir/excluir.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  funcionarios: Funcionario[]=[];
  funcionariosGeral: Funcionario[]=[];

  coluna =['Situacao', 'Nome', 'Sobrenome', 'Departamento', 'Ações', 'Excluir']

  constructor(
    private funcionarioService: FuncionarioService,
    private dialog: MatDialog
  )
  { }

  ngOnInit(): void {

    this.funcionarioService.GetFuncionarios().subscribe(data =>{
      const dados = data.dados;

      dados.map((item) =>{
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR')
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR')
      })

      this.funcionarios = data.dados;
      this.funcionariosGeral = data.dados;

    });

  }

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();

    this.funcionarios = this.funcionariosGeral.filter(funcionario => {
      return funcionario.nome.toLowerCase().includes(value);
    })
  }


  OpenDialog(id: number){
    this.dialog.open(ExcluirComponent, {
      width: '480px',
      height: '460px',
      data:{
        id:id
      }

    });

  }

  }


