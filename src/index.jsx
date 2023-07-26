import ReactDOM from 'react-dom';
import React from 'react';
import {
  ThemeProvider,
  Heading,
  Icon,
  Text,
  TextColor,
  ThemeMode,
  ThemeType,
} from '@ugg/colibri';
import packageInfo from '../package.json';

const App = () => {
  const packageName = '@ugg/colibri';
  const packageVersion =
    packageInfo.dependencies && packageInfo.dependencies[packageName];

  const iconType = 'ProgHoldManual';

  return (
    <ThemeProvider
      themeType={ThemeType.UNITEDGRINDING}
      themeMode={ThemeMode.DAY}
    >
      <Heading>
        React app using {packageName}: {packageVersion || 'Not Found'}
      </Heading>
      <Icon type={iconType} size='Large' />
      <Text color={TextColor.interaction}>{iconType}</Text>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
