export class Passagier {

    passagierId;
    voornaam;
    achternaam;
    email;

    constructor({passagierId, voornaam, achternaam, email}){
        this.passagierId = passagierId;
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.email = email;
    }
}
