import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0017/9579/brand.gif?itok=0GMEdPZR"