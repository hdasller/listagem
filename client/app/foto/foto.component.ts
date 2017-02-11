import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html' ,
    styleUrls: ['./foto.component.css']
    
})
export class FotoComponent {
    @Input() first_name: string = '';
    @Input() titulo: string = '';
    @Input() pagina: Number = null;
    @Input() avatar: string = '';
    @Input() url: string = '';
    
    last_name: string = '';
    descricao: string = '';
    id: string  = '';
    _id: string = '';
    dados: string = '';
}