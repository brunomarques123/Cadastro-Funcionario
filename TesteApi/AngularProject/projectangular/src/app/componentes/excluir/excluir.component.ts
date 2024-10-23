
import { Router } from '@angular/router';
import { FuncionarioService } from './../../services/funcionario.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Funcionario } from 'src/app/models/Funcionario';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit{

  inputdata: any;
  funcionario!: Funcionario;


  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router,
    private ref:MatDialogRef<ExcluirComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: number}

  ){}

  ngOnInit(): void {
    this.inputdata = this.data;

    this.funcionarioService.GetFuncionario(this.inputdata.id).subscribe((data) =>{

      this.funcionario = data.dados;
    })

  }

  Excluir(){
    this.funcionarioService.ExcluirFuncionario(this.inputdata.id).subscribe((data) =>{
      this.ref.close();
      window.location.reload();
    })
  }

  Cancelar(){
    this.ref.close();
  }
}
