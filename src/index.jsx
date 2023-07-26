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

  const icon1 = 'ProgHoldManual';
  const icon2 = 'RomeoStar';

  return (
    <ThemeProvider
      themeType={ThemeType.UNITEDGRINDING}
      themeMode={ThemeMode.DAY}
    >
      <Heading>
        React app using {packageName}: {packageVersion || 'Not Found'}
      </Heading>
      <Icon type={icon1} size='Large' />
      <Text color={TextColor.interaction}>{icon1}</Text>
      <Icon type={icon2} size='Large' />
      <Text color={TextColor.interaction}>{icon2}</Text>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
