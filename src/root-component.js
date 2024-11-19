import { LitElement, html, css, nothing } from 'lit'

import { NavbarComponent } from './navbar-component'

import { HibridosComponent } from './hibridos-component'

import { MecanicasComponent } from './mecanicas-component'

import { ScooterComponent } from './scooter-component'


export class RootComponent extends LitElement {
    static get properties() { 
        return {
            currentPage: {
                type: String

            },
        }
    }

    static get styles() {
        return css`
        #root-container {
            background-color: #666;
        }
        
        `
    }
    constructor() {
        super()
        this.currentPage = "scooter"
    }

    handlePageChange(e) {
        this.currentPage = e.detail
    }

    render() {
        let pageTemplate = nothing

        switch (this.currentPage) {
            case 'bicicletas-mecanicas':
                pageTemplate = html`<mecanicas-component></mecanicas-component>`
                break;

            case 'bicicletas-hibridas' :
                pageTemplate = html`<hibridos-component></hibridos-component>`
                break;
            case 'scooter' :
                pageTemplate = html`<scooter-component></scooter-component>`
                break;
        } 
        return html ` 
        <div id= "root-container">
        <navbar-component @change-page="${this.handlePageChange}"></navbar-component>
        <h1>Modelos y Tipos de Bicicletas y Scooter</h1>
        ${pageTemplate}

  
        </div>
        `
    }
}



window.customElements.define('root-component', RootComponent)