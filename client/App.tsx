import { Container, ThemeProvider } from '@nuralogix.ai/web-ui';
import darkTheme from '@nuralogix.ai/web-ui/themes/dark';
import lightTheme from '@nuralogix.ai/web-ui/themes/light';
import state from './state';
import AppRouter from './components/AppRouter';
import { useSnapshot } from 'valtio';
import * as stylex from '@stylexjs/stylex';
import { LanguageInitializer } from './language/LanguageInitializer';
import Navbar from './components/Navbar/Navbar';

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
    <LanguageInitializer>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Container height="auto">
          <div {...stylex.props(styles.wrapper)}>
            <Navbar />
            <AppRouter />
          </div>
        </Container>
      </ThemeProvider>
    </LanguageInitializer>
  );
};

export default App;
