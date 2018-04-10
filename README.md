This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The purpose of this application is to provide a basic website for Warriors-For-Christ.

<h1>Getting Started</h1>
npm install
npm start

<h1>Key features</h1>
•	Uses standard git flow with two primary branches: master and develop

•	All work initially committed to develop

•	Master connected to Heroku for auto-deployment.  I am using the free feature of Heroku to host the website.  I have the “warriors-for-christ.com” domain registered with Google Domains and pointed at Heroku.

•	All this means that I can commit and push to “develop” all I want for testing.  Once I merge to “master” it automatically builds and deploys to Heroku.  Basic “Devops”.

•	Integrated with Circlci for code analysis.  Each pull request is automatically reviewed.

•	Uses W3.css (from w3schools) for responsiveness.  It automatically adjusts spacing and sizes for desktop, tablet, or mobile phone viewing.
