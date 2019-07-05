import {LitElement, html, css, customElement} from 'lit-element'

@customElement('main-app')
export class MainApp extends LitElement {
    render() {
        return html `
            <div>
                Place application components here.
            </div>
        `
    }
}
