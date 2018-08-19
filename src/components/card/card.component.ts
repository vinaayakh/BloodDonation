import { Component, Input } from '@angular/core';
import { Person } from '../../models/person'
@Component({
    selector: 'card-component',
    templateUrl: 'card.component.html'
})
export class CardComponent {
    @Input('person') person: Person;

    constructor() { }

}
