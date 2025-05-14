export class Movie {
    name: string;
    lang: string;
    year: number;
    price: number;

    constructor(name: string, lang: string, year: number, price: number) {
        this.name = name;
        this.lang = lang;
        this.year = year;
        this.price = price;
    }
}