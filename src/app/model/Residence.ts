import { Apartment } from "./Apartment";

export class Residence {
    id!: number;
    name!: string;
    address!: string;
    image!: string;
    status!: string;
    Apartments!: Apartment[] ;
    }