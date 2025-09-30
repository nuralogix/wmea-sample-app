import state from '../../state';
import { useSnapshot } from 'valtio';
import { useNavigate } from 'react-router';
import * as stylex from '@stylexjs/stylex';
import { Button, Card, Heading, Paragraph, TextInput } from '@nuralogix.ai/web-ui';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const styles = stylex.create({
  nextButton: {
    marginTop: '32px',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '40px 20px',
    boxSizing: 'border-box',
  },
  card: {
    padding: '32px',
    maxWidth: '450px',
    width: '100%',
  },
  introMessage: {
    marginBottom: '24px',
  },
});

const Login = () => {
  const { t } = useTranslation();
  const [accessCode, setAccessCode] = useState('');
  const [info, setInfo] = useState(t('ENTER_ACCESS_CODE'));
  //   const { login } = useSnapshot(state.auth);
  //   const navigate = useNavigate();

  //   const handleLogin = async () => {
  //     if (accessCode === 'admin') {
  //       login();
  //       navigate('/profile');
  //     } else {
  //       setInfo(t('INVALID_ACCESS_CODE'));
  //     }
  //   };

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setAccessCode(e.target.value);
  //   };

  //   return (
  //     <div {...stylex.props(styles.wrapper)}>
  //       <Card xstyle={styles.card}>
  //         <Heading>{t('LOGIN')}</Heading>
  //         <div {...stylex.props(styles.introMessage)}>
  //           <Paragraph>{info}</Paragraph>
  //         </div>

  //         <TextInput
  //           placeholder={t('ACCESS_CODE')}
  //           value={accessCode}
  //           onChange={handleChange}
  //           type="text"
  //         />
  //         <div {...stylex.props(styles.nextButton)}>
  //           <Button width="100%" onClick={handleLogin}>
  //             {t('LOGIN')}
  //           </Button>
  //         </div>
  //       </Card>
  //     </div>
  //   );
  // };

  const { login, isLoggedIn, isDev } = useSnapshot(state.auth);
  const navigate = useNavigate();

  // Dev-mode auto login/redirect
  useEffect(() => {
    if (isDev) {
      if (!isLoggedIn) login();
      navigate('/profile', { replace: true });
    }
  }, [isDev, isLoggedIn, login, navigate]);

  const handleLogin = async () => {
    if (accessCode === 'admin') {
      login();
      navigate('/profile');
    } else {
      setInfo(t('INVALID_ACCESS_CODE'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccessCode(e.target.value);
  };

  return (
    <div {...stylex.props(styles.wrapper)}>
      <Card xstyle={styles.card}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <Heading>{t('LOGIN')}</Heading>
          <div {...stylex.props(styles.introMessage)}>
            <Paragraph>{info}</Paragraph>
          </div>
          <TextInput
            placeholder={t('ACCESS_CODE')}
            value={accessCode}
            onChange={handleChange}
            type="text"
          />
          <div {...stylex.props(styles.nextButton)}>
            <Button type="submit" width="100%">
              {t('LOGIN')}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
