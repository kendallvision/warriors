import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  const contentRootDiv = document.createElement('div');
  contentRootDiv.setAttribute('id', 'contentRoot'); 
  div.appendChild(contentRootDiv);
  document.body.appendChild(div);

  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
