import { Component, Input, OnInit,ElementRef,ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
    
    @Input() titulo: string;
    @Input() lastName: string;
elemento: ElementRef;

constructor(elemento: ElementRef){
    this.elemento = elemento;
}


    ngOnInit() {
        this.lastName = 
             this.lastName.length > 1 ?
             this.lastName.substr(0, 1) + '.' : 
             this.lastName;
    }
    
    fadeOut(cb){
        $(this.elemento.nativeElement).fadeOut(cb);

    }

}