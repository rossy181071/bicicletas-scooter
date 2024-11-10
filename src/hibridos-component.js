import { LitElement, html, css } from "lit";

export class HibridosComponent extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            name: { type: String },
            paragraph: { type: String }
        }
    }

    constructor() {
        super()
        this.title = "Bienvenidos aqui se muestran las 4 bicicletas Hibridas mas nuevas"
        this.name = "Rossy"
        this.paragraph = html`Soy <strong>${this.name}</strong> y esta es mi pagina donde mostraremos diferentes tipos de Bicicletas y Scooter`
    }


    static get styles() {
        return css`
        #homepage-container {
            background-color: #6666cc;

            padding: 2vw;

        }
        .movie-poster {
            width: 300px
        }
        `
    }

    render() {
        return html`
        <div id="homepage-container">
            <h1>${this.title}</h1>
            <p>${this.paragraph}</p>
        </div>
        <ol>
                <li><h3>Bicicleta hibridas marca Redbull</h3><img class="movie-poster" src="https://img.redbull.com/images/q_auto,f_auto/redbullcom/2020/5/12/qt55ylppzj62oi9qk2zk/giant-escape-2-disc-hybrid-bike"></li>
                <li><h3>Bicicleta  Marca Giordano para hombre y mujer </h3><img class="movie-poster" src="https://m.media-amazon.com/images/I/81AmMRIiBkL.jpg"></li>
            </ol>

        

        `
    }
}

window.customElements.define('hibridos-component', HibridosComponent)