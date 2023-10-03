// Class in JS

// const mobil1 = {
//     transmisi : "Manual",
//     bahanBakar : "Bensin",
//     mesin : 1500,
// };
const mobil2 ={
    transmisi :"Automatic",
    bahanBakar : "Solar",
    mesin : 2000,
    nyalakanMesin : function        //methode
};
console.log(mobil);


//template
//dari class mobil lalu buat 
//membuat properti dengan class yg berbeda - beda
class Mobil{
    constructor(transmisi,bahanBakar, mesin){
        this.transmisi = transmisi;
        this.bahanBakar = bahanBakar;
        this.mesin = mesin;
    }
}

//CREATE OBJECT
const mobil1= new Mobil("Manual", "Bensin", 1500);
const mobil2 = new Mobil("Automatic", "Solar", 2000);
console.log(mobil1, mobil2);