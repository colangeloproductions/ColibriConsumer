import ReactDOM from 'react-dom';
import React from 'react';
import { Heading, Icon, Text } from '@ugg/colibri';
import packageInfo from '../package.json';

const App = () => {
  const packageName = '@ugg/colibri';
  const packageVersion =
    packageInfo.dependencies && packageInfo.dependencies[packageName];

  const iconType = 'ProgHoldManual';

  return (
    <>
      <Heading>
        React app using {packageName}: {packageVersion || 'Not Found'}
      </Heading>
      <Icon type={iconType} size='Large' />
      <Text>{iconType}</Text>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
