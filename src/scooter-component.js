import { LitElement, html, css  } from "lit";

export class ScooterComponent extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            paragraph: { type: String },
            imgUrl: { type: String},
            moviesParagraph: { type: String }

        }
    }

    static get styles() {
        return css`
        #scooter-container {
        background-color: #886666;
        
        padding: 2vw;
        }
        `
    }

    constructor () {
       super()
       this.title = "Scooter" 
       this.paragraph = "Estos son los nuevos Scooter de moda en la ciudad"
       this.imgUrl = "https://m.media-amazon.com/images/I/71dA+jxNjyL.jpg"
    }

    render () {
        return html`
       <div id="Scooter-container">
       <h1>${this.title}</h1>
        <p>${this.paragraph}</p>
        <img src="${this.imgUrl}">
        <p>${this.moviesPoster}</p>
         </div>
         `
    }

}

window.customElements.define('scooter-component', ScooterComponent)