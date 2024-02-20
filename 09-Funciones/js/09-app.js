//Añadir Funciones a un método

const reproductor = {
  reproducir: function () {
    console.log("Reproduciendo canción");
  },
  pausar: function () {
    console.log("Pausando");
  },
  borrar: function (id) {
    console.log(`Borrando canción... ${id}`);
  },
};

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(20);
