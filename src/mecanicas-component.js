import { LitElement, html, css } from "lit";

export class MecanicasComponent extends LitElement {
    static properties() {
        return {
            name: { type: String },
            title: { type:  String },
            moviesParagraph: { type: String }
        }
    }

    constructor () {
        super() 
        this.name = "Rossy"
        this.title = `Mucho gusto aqui les mostraremos Bicicletas y Scooter de Moda ${this.name}`
        this.moviesParagraph = "Mis 8 modelos de bicicletas mas modernas son:"
    
    }

    static get styles() {
        return css`
        #mecanicas-container {
            background-color: #668896;

            padding: 2vw;


        }
        .movie-poster {
            width: 300px
        }
        `
    }

    render() {
        return html`
        <div id="mecanicas-container">
            <h1>${this.title}</h1>
            <p>${this.moviesParagraph}</p>
            <ol>
                <li><h3>Bicicleta Mecanica Marca Benotto</h3><img class="movie-poster" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmIglko7EvVdnErE8q__QsKGsjSPDEiKCqA&s"></li>
                <li><h3>Bicicleta Mecanica Marca Pinarello</h3><img class="movie-poster" src="https://www.activasports.mx/media/catalog/product/cache/38638af44e11084df24309520042fcf5/b/i/bicicleta_de_ruta_pinarello_f5_rival_etap_axs_fulcrum_racing_azul_-_activa_sports_1.jpg"></li>
                <li><h3>Bicicleta Mecanica Sparki</h3><img class="movie-poster" src="https://m.media-amazon.com/images/I/41B5a8zEk1L._AC_UF894,1000_QL80_.jpg"></li>
                <li><h3>Bicicleta Mecanica Nordic</h3><img class="movie-poster" src="https://http2.mlstatic.com/D_NQ_NP_903854-MLA71238908290_082023-O.webp"></li>
            </ol>
        </div>`
    }
}




window.customElements.define('mecanicas-component', MecanicasComponent)