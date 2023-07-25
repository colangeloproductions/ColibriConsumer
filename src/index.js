import ReactDOM from 'react-dom';
import React from 'react';
import { Heading, Icon } from '@ugg/colibri';
import packageInfo from '../package.json';

const App = () => {
  const packageName = '@ugg/colibri';
  const packageVersion =
    packageInfo.dependencies && packageInfo.dependencies[packageName];

  return (
    <>
      <Heading>
        React app using Colibri {packageName}: {packageVersion || 'Not Found'}
      </Heading>
      <Icon type='Beer' />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
