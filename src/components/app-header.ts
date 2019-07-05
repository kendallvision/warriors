import {LitElement, html, css, customElement, property} from 'lit-element'

@customElement('app-header')
export class AppHeader extends LitElement {

    @property({type: String})
    public title:string = ''

    @property({type: String})
    public logoUrl:string = ''

    @property({type: String})
    public slogan:string = ''

    static styles:any = css `
        .app-header-main {
            background-image: linear-gradient(#2a2a2a, black);
            color: white;
        }

        .app-header {
            height: 80px;
            width: 100%;
        }

        .app-header p {
            margin: 0;
            font-size: 10pt;
            color: #ccc;
        }
  
        .app-header-title {
            font-size: 1.75em;
            margin-bottom: 0;
        }

        .app-header-logo {
            float: left;
            margin-right: 10px;
            background-color: white;
            padding: 3px;
            cursor: pointer;
        }

        .app-header-logo img {
            width: 55px;
        }
    `

    render() {
        return html`
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

            <div class="app-header-main w3-container">
                <div class="app-header">
                    <div class="app-header-logo">
                        <img src="${this.logoUrl}" alt="${this.title}"/>
                    </div>
                    <div>
                        <h1 class="app-header-title">${this.title}</h1>
                        <p>${this.slogan}</p>
                    </div>
                </div>
            </div>
        `
    }
}
