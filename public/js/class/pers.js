
export class Personnage{ 
    static nb=0; 
    constructor(nom, ptvie, ptatt){ 
        this.nom = nom;
        this.ptvie = ptvie; 
        this.ptatt = ptatt; 
        Personnage.nb++;
    }
}


export class Guerrier extends Personnage{
    constructor(nom, ptvie, ptatt, ptrage){
        super(nom,ptvie,ptatt); 
        this.ptrage = ptrage; 
    }
}


export class Mage extends Personnage{
    constructor(nom, ptvie, ptatt){
        super(nom,ptvie,ptatt);

        let pospos = [7, 9, 11]; 
        this.ptmana = pospos[Math.floor(Math.random() * pospos.length)];
    }
}

export class Archer extends Personnage{
    constructor(nom, ptvie, ptatt){ 
        super(nom,ptvie,ptatt);
        this.nbfleches = Math.round(Math.random() * (11 - 7)) + 7;
    }
}