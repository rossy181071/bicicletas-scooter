import { LitElement, html,css } from "lit";

export class NavbarComponent extends LitElement { 
    static get properties() {
    return {
        pages: { type: Array }
    }

    }

    constructor() {
        super()
        this.pages = [
            {
                url: 'bicicletas-mecanicas',
                title: 'Mecanicas'
            },
            {
                url: 'bicicletas-hibridas',
                title: 'Hibridas' 
            },
            {
                url: 'scooter',
                title: 'Scooter'
            }
        ]
    }


    static get styles() {
        return css `
        #navbar-container {
        background-color: #888;
        
        display:table;
        width: 100%;
        table-layout: fixed;
    }
        #navbar-container h2 {
        display: table-cell;
        text-align: center;
        
        background-color: #333;
        padding: 20px;}

        
        }`
    }
    triggerPageChange(e) {
        this.dispatchEvent(new CustomEvent('change-page',{
            detail: e.target.id
        }))
    }

    render() {
        return html`
        <div id="navbar-container">
            ${this.pages.map(page => html`<h2 id="${page.url}" @click="${this.triggerPageChange}">${page.title}</h2>`)}
        </div>
        `
    }
}



window.customElements.define('navbar-component', NavbarComponent)