export class Reservation {

    reservatieId;
    tocht_type;
    aantal_volwassenen;
    aantal_kinderen;
    datum_reservatie;
    vaardatum1;
    vaardatum2;
    vaardatum3;

    constructor({reservatieId, tocht_type, aantal_volwassenen, aantal_kinderen, datum_reservatie, vaardatum1, vaardatum2, vaardatum3}){
        this.reservatieId = reservatieId;
        this.tocht_type = tocht_type;
        this.aantal_volwassenen = aantal_volwassenen;
        this.aantal_kinderen = aantal_kinderen;
        this.datum_reservatie = datum_reservatie;
        this.vaardatum1 = vaardatum1;
        this.vaardatum2 = vaardatum2;
        this.vaardatum3 = vaardatum3;
    }
}
