import { Card, Button, Paragraph, Camera } from '@nuralogix.ai/web-ui';
import { useTranslation } from 'react-i18next';
import * as stylex from '@stylexjs/stylex';
import { useNavigate } from 'react-router';

const styles = stylex.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: 48,
    zIndex: 1000,
  },
  card: {
    padding: '32px',
    maxWidth: '450px',
    width: '100%',
  },
  mb16: {
    marginBottom: '16px',
  },
  mb24: {
    marginBottom: '24px',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mt12: {
    marginTop: '12px',
  },
  denyText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CameraPermissionsNotGranted = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleDenyPermissions = () => {
    navigate('/'); // Redirect to appropriate page
  };

  return (
    <div {...stylex.props(styles.wrapper)}>
      <Card xstyle={styles.card}>
        <div {...stylex.props(styles.center, styles.mb16)}>
          <Camera height="45px" width="45px" />
        </div>
        <div {...stylex.props(styles.mb16)}>
          <Paragraph variant="error" fontWeight="bold">
            {t('CAMERA_PERMISSION_NOT_GRANTED_TITLE')}
          </Paragraph>
        </div>
        <div {...stylex.props(styles.mb24)}>
          <Paragraph>{t('CAMERA_PERMISSION_INSTRUCTIONS')}</Paragraph>
        </div>
        <div {...stylex.props(styles.mt12)}>
          <Paragraph>
            {t('CAMERA_PERMISSION_DENY_TEXT')}
            <Button variant="link" onClick={handleDenyPermissions}>
              {t('CAMERA_PERMISSION_DENY_LINK')}
            </Button>
          </Paragraph>
        </div>
      </Card>
    </div>
  );
};

export default CameraPermissionsNotGranted;
