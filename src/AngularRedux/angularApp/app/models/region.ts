import { Country } from './country';

export class Region {
    public name: string = '';
    public expanded: boolean = false;
    public countries: Country[] = [];
}

