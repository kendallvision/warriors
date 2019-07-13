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
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

            <div class="main-app">
                <app-header 
                    title="Warriors for Christ"
                    slogan="Christian Ministries through Martial Arts"
                    logoUrl="/src/images/logoWarriors.jpg">
                </app-header>

                <div class="w3-row-padding">
                    <div class="w3-third">
                        <markdown-section source="/src/content/WhatWeTeach.md"></markdown-section>
                    </div>
                    <div class="w3-third">
                        <markdown-section source="/src/content/APEDefense.md"></markdown-section>
                    </div>
                    <div class="w3-third">
                        <markdown-section source="/src/content/RelatedLinks.md"></markdown-section>
                    </div>
                </div>

                <div class="w3-row-padding">
                    <div class="w3-third">
                        <markdown-section></markdown-section>
                    </div>
                    <div class="w3-third">
                        <markdown-section></markdown-section>
                    </div>
                    <div class="w3-third">
                        <markdown-section></markdown-section>
                    </div>
                </div>
            </div>
        `
    }
}
