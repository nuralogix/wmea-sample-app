import state from '../../state';
import { useSnapshot } from 'valtio';
import { useNavigate } from 'react-router';
import * as stylex from '@stylexjs/stylex';
import { Button, Card, Heading, Paragraph, TextInput } from '@nuralogix.ai/web-ui';
import { useState } from 'react';

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
    const [accessCode, setAccessCode] = useState('');
    const [info, setInfo] = useState('Enter Access Code (default: admin)');
    const { login } = useSnapshot(state.auth);
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (accessCode === 'admin') {
            login();
            navigate('/profile');
        } else {
            setInfo('Invalid Access Code');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAccessCode(e.target.value);
    };

    return (
        <div {...stylex.props(styles.wrapper)}>
            <Card xstyle={styles.card}>
                <Heading>
                    Login
                </Heading>
                <div {...stylex.props(styles.introMessage)}>
                <Paragraph>{info}</Paragraph>
                </div>

                <TextInput
                    placeholder='Access Code'
                    value={accessCode}
                    onChange={handleChange}
                    type="text"
                />
                <div {...stylex.props(styles.nextButton)}>
                    <Button width="100%" onClick={handleLogin}>
                    Login
                    </Button>
                </div>
            </Card>
        </div>
    );
}

export default Login;