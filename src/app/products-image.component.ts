import { Component, Input } from "@angular/core";


@Component({
    selector:'product-image',
    template:`
    <img [src]="url" class="image-thumbnali">
    `,
    styles: ['img {width: 9rem;height:9rem}']
})

export class ProductImageComponent {
    @Input() url:string;

    constructor(){

    }
}