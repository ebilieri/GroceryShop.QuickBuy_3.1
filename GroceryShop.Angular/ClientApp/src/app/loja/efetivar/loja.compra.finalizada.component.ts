import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './loja.compra.finalizada.component.html',
  styleUrls: ['./loja.compra.finalizada.component.css']
})

export class LojaCompraFinalizadaComponent implements OnInit {

  public pedidoId: string;

    ngOnInit(): void {
      this.pedidoId = sessionStorage.getItem("pedidoId");
    }

}
