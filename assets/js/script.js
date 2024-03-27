(function () {
    // Función privada para mostrar videos
    function mostrarVideo(url, id) {
      const iframe = document.getElementById(id);
      iframe.setAttribute("src", url);
    }
  
    // Función pública para insertar videos
    window.mostrarVideo = function (url, id) {
      mostrarVideo(url, id);
    };
  })();

  class Multimedia {
    constructor(url) {
      this._url = url;
    }
  
    // Cierre para proteger el atributo url
    get url() {
      return this._url;
    }
  
    setInicio() {
      console.log("Este método es para realizar un cambio en la URL del video");
    }
  }

  class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      this.id = id;
    }
  
    playMultimedia() {
      mostrarVideo(this.url, this.id);
    }
  
    setInicio(tiempo) {
      const nuevaUrl = `${this.url}?start=${tiempo}`;
      mostrarVideo(nuevaUrl, this.id);
    }
  }

  const musica = new Reproductor(
    "https://www.youtube.com/embed/5PSNL1qE6VY",
    "musica"
  );
  const peliculas = new Reproductor(
    "https://www.youtube.com/embed/bLvqoHBptjg",
    "peliculas"
  );
  const series = new Reproductor(
    "https://www.youtube.com/embed/gZbybAkuPJg",
    "series"
  );
  
  musica.playMultimedia();
  peliculas.playMultimedia();
  series.playMultimedia();

  musica.setInicio(60); 
  peliculas.setInicio(60);
  series.setInicio(60);


  