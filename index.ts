/*class Album{
    title: string
    songs:string[]
    constructor(title, songs:string[]){
        this.title = title;
        this.songs = songs;
    }
}

class Banda{
    members:string[];
    albums:Album[];
    constructor(members:string[], albums:Album[]){
        this.members = members;
        this.albums = albums;
    }
}

function main(){
    const unAlbum = {
        title:"album de joaco"
        songs: ["una cancion"]
    }
    const unAlbum = new Album("album de joaco", []);
    const unaBanda = new Banda(["joaco"], []);
}

main();*/

class Edificio{
  pisos:Piso[]
  constructor(pisos:Piso[]){
    this.pisos = pisos;

  }
  addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento){
    const pisoEncontrado = this.pisos.find(p=>p.nombre == nombreDePiso);
     return pisoEncontrado.pushDepartamento(departamento);
  }
  getDepartamentosByPiso(nombreDelPiso: string): Departamento[]{
    const pisoEncontrado = this.pisos.find((p) => p.nombre == nombreDelPiso);
    return pisoEncontrado.getDepartamentos();

  }
}


class Departamento{
    nombre:string
    constructor(nombre){
      this.nombre = nombre;
    }
   getName(){
    return this.nombre;
   } 

  }

  class Piso{
    nombre: string
    deptos: Departamento[] = [];
    constructor(nombre){
      this.nombre = nombre;
     
    }
    pushDepartamento(depto:Departamento){
      return this.deptos.push(depto);
    }
    getDepartamentos(): Departamento[]{
      return this.deptos
    }
  }








function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main() {
    testClaseEdificio();
  }
  main();