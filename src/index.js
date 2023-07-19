import ReactDOM from 'react-dom';
import React from 'react';
import { Heading, Icon } from '@ugg/colibri';
const App = () => {
  return (
    <>
      <Heading>This is my React app using Colibri!</Heading>
      <Icon type='Beer' />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
