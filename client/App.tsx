import { useEffect } from 'react';
import { Container, ThemeProvider } from '@nuralogix.ai/web-ui';
import darkTheme from '@nuralogix.ai/web-ui/themes/dark';
import lightTheme from '@nuralogix.ai/web-ui/themes/light';
import state from './state';
import AppRouter from './components/AppRouter';
import { useSnapshot } from 'valtio';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  wrapper: {
    height: '100%',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
});

const App = () => {
  const { theme } = useSnapshot(state.general);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Container>
          <div {...stylex.props(styles.wrapper)}>
            <AppRouter />
          </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;