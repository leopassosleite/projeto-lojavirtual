import { Injectable } from "@angular/core";

export interface Menu {
    state: string;
    name: string;
    icon: string;
    role: string;
}

const MENUITEMS = [
    { state: 'dashboard', name: 'Dashboard', icon: 'dashboard', role: '' },
    { state: 'client', name: 'Clientes', icon: 'face', role: 'admin' },
    { state: 'product', name: 'Produtos', icon: 'precision_manufacturing', role: 'admin' },
    { state: 'category', name: 'Categorias', icon: 'category', role: 'admin' },
    { state: 'order', name: 'Compra', icon: 'shopping_cart', role: '' },
];

@Injectable()
export class Menuitems {
    getMenuItem(): Menu[] {
        return MENUITEMS
    }
}
