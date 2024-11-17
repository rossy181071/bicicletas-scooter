import { LitElement, html, css } from "lit";

export class MecanicasComponent extends LitElement {
    static properties() {
        return {
    
            title0: { type:  String },
            Paragraph0: { type: String },

            title1 : {type: String },
            imgUrl1 : {type: String},
           
            title2 : {type: String },
            imgUrl2 : {type: String},
            
            title3 : {type: String },
            imgUrl3 : {type: String},
            
            title4 : {type: String },
            imgUrl4 : {type: String},
           
            title5 : {type: String },
            imgUrl5 : {type: String},
            



        }
    }

    constructor () {
        super() 
    
        this.title0 = `Mucho gusto aqui les mostraremos Bicicletas y Scooter de Moda $`
        this.Paragraph0 = "Mis modelos de bicicletas Mecanicas mas modernas son:"

        this.title1 = "Bicicleta Mecanica Marca Benotto"
        this.imgUrl1= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmIglko7EvVdnErE8q__QsKGsjSPDEiKCqA&s"

        this.title2 = "Bicicleta Mecanica Marca Pinarello</"
        this.imgUrl2 = "https://www.activasports.mx/media/catalog/product/cache/38638af44e11084df24309520042fcf5/b/i/bicicleta_de_ruta_pinarello_f5_rival_etap_axs_fulcrum_racing_azul_-_activa_sports_1.jpg"

        this.title3 = "Bicicleta Mecanica Sparki"
        this.imgUrl3 = "https://m.media-amazon.com/images/I/41B5a8zEk1L._AC_UF894,1000_QL80_.jpg"

        this.title4 = "Bicicleta Mecanica Nordic"
        this.imgUrl4 = "https://http2.mlstatic.com/D_NQ_NP_903854-MLA71238908290_082023-O.webp"

        this.title5 = "Bicicleta Mecanica Optimus"
        this.imgUrl5 = "https://ciudadmovilcolombia.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-24-at-2.58.59-PM.jpeg"
    
    }

    static get styles() {
        return css`
        #mecanicas-container {
            background-color: #668896;

            padding: 2vw;


        }
        .img-mecanicas {
            width: 300px
        }
        `
    }

    render() {
        return html`
        <div id="mecanicas-container">
            
        
        <h1>${this.title0}</h1>
            <p>${this.Paragraph0}</p>
           </div>         
            <ol>
                

            <li><h1>${this.title1}</h1></li>
            <img class="img-mecanicas" src="${this.imgUrl1}">
            
            <li><h1>${this.title2}</h1></li>
            <img class="img-mecanicas" src="${this.imgUrl2}">
           
            <li><h1>${this.title3}</h1></li>
            <img class="img-mecanicas" src="${this.imgUrl3}">
           
            <li><h1>${this.title4}</h1></li>
            <img class="img-mecanicas" src="${this.imgUrl4}">
           
            <li><h1>${this.title5}</h1></li>
            <img class="img-mecanicas" src="${this.imgUrl5}">


            </ol>
        `
    }
}




window.customElements.define('mecanicas-component', MecanicasComponent)