import React from 'react';
import ReactDOM from 'react-dom';
import RootContainer from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RootContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
