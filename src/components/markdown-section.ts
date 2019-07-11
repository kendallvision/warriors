import {LitElement, html, css, customElement, property} from 'lit-element'
import '@polymer/marked-element/marked-element.js'

@customElement('markdown-section')
export class MarkdownSection extends LitElement {

    public static styles = css`
        .main {
            background-color: #dedede;
            border-radius: 10px;
            padding: 1px 10px;
            min-height: 250px;
            max-height: 600px;
            font-size: 10pt;
            font-family: 'Roboto', Arial, Helvetica, sans-serif;
            margin-top: 10px;
        }
    `

    render() {
        return html`
            <div class="main">
                <marked-element>
                    <div slot="markdown-html"></div>
                    <script type="text/markdown">
                        # Sample
                        This is the sample markdown.
                        * Here is a list item
                        * Here is another.

                        \`\`\`
                            And this is a code block
                        \`\`\`
                    </script>
                </marked-element>
            </div>
        `
    }
}
