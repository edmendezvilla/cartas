function Jugador(apodo, vidas, valorCarta) {
    this.apodo = apodo;
    this.vidas = vidas;
    this.valorCarta = valorCarta;
  
    this.reducirVidas = function (cantidad) {
      this.vidas = this.vidas - cantidad ;
    };
    this.showapodo = function (){
        alert ( "Jugador: $ { this.apodo}le quedan $ {globalThis.Vidas} vidas total")
    }

    };
  
   let Jugadoruno = new Jugador (prompt("apodo")),
   number (prompt ("ingresar vidas")) ,
   Jugadoruno.showapodo(); 
   Jugadoruno.reducirVidas(number(prompt("vidas restantes")));
   Jugadoruno.showapodo();




