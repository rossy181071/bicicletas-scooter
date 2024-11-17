import { LitElement, html, css } from "lit";

export class HibridosComponent extends LitElement {
    static get properties() {
        return {
            title0: { type: String },
            paragraph0: { type: String },

            title1: {type: String } ,
            imgUrl1: {type: String},

            title2: {type: String},
            imgUrl2: {type: String},
           
            title3: {type: String } ,
            imgUrl3: {type: String},

            title4: {type: String},
            imgUrl4: {type: String},

            title5: {type: String},
            imgUrl5: {type: String },



        }
    }

    constructor() {
        super()
        this.title0 = "Bienvenidos aqui se muestran las 4 bicicletas Hibridas mas nuevas"
        this.paragraph0 = html`Soy <strong>${this.name}</strong> y esta es mi pagina donde mostraremos diferentes tipos de Bicicletas y Scooter`

        this.title1 = "Bicicleta hibridas marca Redbull"
        this.imgUrl1 = "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2020/5/12/qt55ylppzj62oi9qk2zk/giant-escape-2-disc-hybrid-bike"

        this.title2 = "Bicicleta  Marca Giordano para hombre y mujer"
        this.imgUrl2 = "https://m.media-amazon.com/images/I/81AmMRIiBkL.jpg"

        this.title3 = "Bicicleta Marca Schwinn GTX "
        this.imgUrl3= "https://m.media-amazon.com/images/I/713qavOjQ9S._AC_UF894,1000_QL80_.jpg"

        this.title4 = "Bicicleta Urbana Marca San Rafael"
        this.imgUrl4 = "https://importbike.mx/cdn/shop/products/bicicletahibrida2021_San_Rafael_DS1_Colornegra.jpg?v=1608315008"

        this.title5 = "Bicicleta hibrida Spectrum"
        this.imgUrl5 = "https://chopchopbikes.com/cdn/shop/products/14_Spectrum-1.jpg?v=1676437651&width=1800"
    }


    static get styles() {
        return css`
        #hibridos-container {
            background-color: #6666cc;

            padding: 2vw;

        }
        .bici-img {
            width: 300px
        }
        `
    }

    render() {
        return html`
        <div id="hibridos-container">


            <h1>${this.title0}</h1>
            <p>${this.paragraph0}</p>
        </div>
        <ol>
                <li><h1>${this.title1}</h1></li>
                <img class="bici-img" src="${this.imgUrl1}">

                <li><h1>${this.title2}</h1></li>
                <img class="bici-img" src="${this.imgUrl2}">

                <li><h1>${this.title3}</h1></li>
                <img class="bici-img" src="${this.imgUrl3}">

                <li><h1>${this.title4}</h1></li>
                <img class="bici-img" src="${this.imgUrl4}">
                
                <li><h1>${this.title5}</h1></li>
                <img class="bici-img" src="${this.imgUrl5}">


            </ol>

        

        `
    }
}

window.customElements.define('hibridos-component', HibridosComponent)