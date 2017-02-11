import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';
import { PainelComponent } from '../painel/painel.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html',
      styleUrls: ['./listagem.component.css']

})
export class ListagemComponent {
    
    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = '';
    paginacao: string []= [];
    route: ActivatedRoute;
    pagina: number = null;
    

    constructor(service: FotoService, route:ActivatedRoute) {
        this.route = route;
            this.route.params.subscribe(params => {
            let pagina = params['pagina'];
            this.pagina = pagina;
            
        });

        service.pagina().subscribe(total => this.pagina = total );

        this.service = service;
        service.lista(this.pagina)
            .subscribe(fotos => {
                
                
                
                    var  paginacao = [];
       for(var i=1; i<=this.pagina; i++){

           var valor = {"pagina": i}
           paginacao.push(valor);
       

       }
       this.paginacao = paginacao;

                this.fotos = fotos;
             
            }, erro => console.log(erro))
    }






}