import {LitElement, html, css, customElement, property} from 'lit-element'
import '@polymer/marked-element/marked-element.js'

@customElement('markdown-section')
export class MarkdownSection extends LitElement {

    @property({type:String})
    public source:string = '/src/content/default.md'

    public static styles = css`
        .main {
            background-image: linear-gradient(#dedede, #efefef);
            border-radius: 10px;
            padding: 1px 10px;
            min-height: 250px;
            max-height: 600px;
            font-size: 10pt;
            font-family: 'Roboto', Arial, Helvetica, sans-serif;
            margin-top: 10px;
        }

        .main h2 {
            color: darkblue;
        }
    `

    render() {
        return html`
            <div class="main">
                <marked-element>
                    <div slot="markdown-html"></div>
                    <script type="text/markdown" src=${this.source}></script>
                </marked-element>
            </div>
        `
    }
}
