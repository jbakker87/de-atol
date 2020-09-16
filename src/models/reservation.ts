export class Reservation {

    reservatieId;
    tocht_type;
    aantal_volwassenen;
    aantal_kinderen;
    datum_reservatie;

    constructor({reservatieId, tocht_type, aantal_volwassenen, aantal_kinderen, datum_reservatie}){
        this.reservatieId = reservatieId;
        this.tocht_type = tocht_type;
        this.aantal_volwassenen = aantal_volwassenen;
        this.aantal_kinderen = aantal_kinderen;
        this.datum_reservatie = datum_reservatie;
    }
}
