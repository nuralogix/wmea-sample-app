import { Container, ThemeProvider } from '@nuralogix.ai/web-ui';
import darkTheme from '@nuralogix.ai/web-ui/themes/dark';
import lightTheme from '@nuralogix.ai/web-ui/themes/light';
import state from './state';
import AppRouter from './components/AppRouter';
import { useSnapshot } from 'valtio';
import * as stylex from '@stylexjs/stylex';
import initI18n from './language/i18n';
import { supportedLanguages } from './language/constants';
import { useEffect, useState } from 'react';
import { type SupportedLanguage } from './types';

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
  const { theme, language } = useSnapshot(state.general);
  const [isLangInitialized, setIsLangInitialized] = useState(false);

  useEffect(() => {
    const browserLanguage = navigator.language.split('-')[0];
    const matchedLanguage = (
      supportedLanguages.includes(browserLanguage) ? browserLanguage : 'en'
    ) as SupportedLanguage;
    const languageToSet = language || matchedLanguage;

    const languageFilesPath = `./language/strings.{{lng}}.json`;

    initI18n(`${languageFilesPath}`, languageToSet).then(() => {
      setIsLangInitialized(true);
    });
  }, []);

  if (!isLangInitialized) return null;

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
