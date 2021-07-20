import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit(): void {
    this.btnCalss = `btn ${this.btnCalss}`
  }

  @Input() progreso: number = 60;
  @Input() btnCalss: string = 'btn-primary';
  
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();
  
  cambiarValor(valor: number){
    
    if(this.progreso>= 100 && valor >=0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    
    
      if(this.progreso<= 0 && valor < 0){
        this.valorSalida.emit(0);
        return this.progreso = 0;
      }

      this.progreso = this.progreso + valor;
      this.valorSalida.emit(this.progreso);
    return;
  }

  onChange(newValue: any){

    if(newValue >= 100){
      this.progreso = 100;
    }else if (newValue <=0){
      this.progreso = 0;
    }else {
      this.progreso = newValue;
    }

    this.valorSalida.emit(this.progreso);
  }

}
