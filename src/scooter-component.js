import { LitElement, html, css  } from "lit";

export class ScooterComponent extends LitElement {
    static get properties() {
        return {
            title0: { type: String },
            

            title1 : {type: String},
            imgUrl1: {type: String},
            paragraph1 : {type: String },
           
            title2 : {type: String},
            imgUrl2: {type: String},
            paragraph2 : {type: String },
           
            title3 : {type: String},
            imgUrl3: {type: String},
            paragraph3 : {type: String},
           
            title4 : {type: String},
            imgUrl4: {type: String},
            paragraph4: {type:  String},
           
            title5 : {type: String},
            imgUrl5: {type: String},
            paragraph5: {type: String},


            
            

        }
    }

    static get styles() {
        return css`
        #scooter-container {
        background-color: #886666;
        
        padding: 2vw;
        }
.img-scooter {
    width: 300px
}

        `
    }

    constructor () {
       super()
    
       this.title0 = "Estos son los nuevos Scooter de moda en la ciudad."
       

       this.title1 = "Scooter Xiaomi"
       this.imgUrl1 = "https://chobs.mistoremx.com/images/202305/goods_img/0_P_1685057640998.jpg"
       this.paragraph1 = "Contamos con Una amplia gama en Scooter El Xiaomi Electric Scooter 4 Pro 2ndGen es un patinete eléctrico que llama la atención por varias razones, siendo una de ellas que está orientado tanto a usuarios avanzados como a aquellos que quieran dar el salto a este tipo de dispositivos"

       this.title2 = "Scooter Honey Whall"
       this.imgUrl2 = "https://honeywhale.com.mx/wp-content/uploads/2024/06/Honeywhale-scooter-M5-Pro-1-1020x1020.webp"
       this.paragraph2 = "El nuevo scooter eléctrico Honey Whale M5 Pro-2 , nuevas llantas, más anchas y gruesas. Utiliza un motor mejorado, rendimiento estable, gran potencia, diseño impermeable, sin miedo a la lluvia."

       this.title3 = "Scooter Nanofort plegable"
       this.imgUrl3 = "https://nanofort.com.mx/cdn/shop/products/1_1234b54d-b2f5-4828-83b2-905250742af6.jpg?v=1670885453"
       this.paragraph3 ="CARRITO TIPO SCOOTER. La silla de ruedas cuenta con un sistema eléctrico de 250W para funcionar, alcanza una velocidad de 8 km/h y puede dar marcha atrás hasta los 4 km/h con un sonido de advertencia cuando se coloca la reversa"

       this.title4 = "Scooter Sangkee Infantil"
       this.imgUrl4 = "https://sangkee.mx/wp-content/uploads/2021/10/Scooter-Ninos-Multifuncional-Con-Asiento-Y-Mango-Ajustable1.webp"
       this.paragraph4 = "Scooter ideal para ni;os con bonitos colores y mucha seguridad"

       this.title5 ="Scooter la Viga"
       this.imgUrl5 = "https://ss201.liverpool.com.mx/xl/1122655136_7p.jpg"
       this.paragraph5 = "Ideal para ni&a con bonito e idel color y muy sofisticado"

       
    }

    render () {
        return html`
       <div id="scooter-container">
       
       
       <h1>${this.title0}</h1>
    

        </div>
        <ol>

        <li><h1>${this.title1}</h1></li>
        <img class="img-scooter" src="${this.imgUrl1}">
        <p>${this.paragraph1}</p>

        <li><h1>${this.title2}</h1></li>
        <img class="img-scooter" src="${this.imgUrl2}">
        <p>${this.paragraph2}</p>
        
        <li><h1>${this.title3}</h1></li>
        <img class="img-scooter" src="${this.imgUrl3}">
        <p>${this.paragraph3}</p> 

        <li><h1>${this.title4}</h1></li>
        <img class="img-scooter" src="${this.imgUrl4}">
        <p>${this.paragraph4}</p>

        
        
        <li><h1>${this.title5}</h1></li>
        <img class="img-scooter" src="${this.imgUrl5}">
        <p>${this.paragraph5}</p>


        </ol>
       
         
         `
    }

}

window.customElements.define('scooter-component', ScooterComponent)