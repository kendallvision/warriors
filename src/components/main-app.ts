import {LitElement, html, css, customElement} from 'lit-element'

@customElement('main-app')
export class MainApp extends LitElement {

    public static styles = css`
        .main-app {
            min-height: 600px;
        }
    `

    render() {
        return html `
            <div class="main-app">
                <app-header 
                    title="Warriors for Christ"
                    slogan="Christian Ministries through Martial Arts"
                    logoUrl="/src/images/logoWarriors.jpg">
                </app-header>
            </div>
        `
    }
}
