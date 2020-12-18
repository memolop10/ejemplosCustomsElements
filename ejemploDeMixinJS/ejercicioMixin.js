let Prestaciones = ClaseBase => class extends ClaseBase{
    prestacion(persona){
        console.log('viene desde prestacion',persona);
    }
}

let Bonos = ClaseBase => class extends ClaseBase{
    bonos;
    get bonos(){
      return this._bonos;
    }
    set bonos(value){
        this._bonos = value;
    }
}

class Persona{
    name;
    lastName;
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
}

class Empleo extends Prestaciones(Bonos(Persona)){
    nombreEmpleo;
    constructor(nombreEmpleo,name,lastName){
        super(name,lastName);
        this.nombreEmpleo = nombreEmpleo;
        this.prestacion(name);
        this.bonos = ['SGMM'];
        console.log(this.bonos);
    }
}
const memo = new Empleo('programador','Memo','Lopez');
console.log(memo)