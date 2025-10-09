import { Card, Button, Paragraph, Camera } from '@nuralogix.ai/web-ui';
import { useTranslation } from 'react-i18next';
import * as stylex from '@stylexjs/stylex';
import { useNavigate } from 'react-router';

const styles = stylex.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '24px 16px 32px',
    boxSizing: 'border-box',
    zIndex: 1000,

    marginTop: 0,
  },
  card: {
    padding: '28px 24px 32px',
    maxWidth: 480,
    width: '100%',
    '@media (min-width: 480px)': {
      padding: '32px 32px 40px',
    },
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
  cameraIconWrap: {
    width: 72,
    height: 72,
    borderRadius: 72,
    background: 'rgba(255,255,255,0.04)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  actionsRow: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 12,
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
        <div {...stylex.props(styles.center)}>
          <div {...stylex.props(styles.cameraIconWrap)}>
            <Camera height="40px" width="40px" />
          </div>
        </div>
        <div {...stylex.props(styles.mb16)}>
          <Paragraph variant="error" fontWeight="bold">
            {t('CAMERA_PERMISSION_DENIED')}
          </Paragraph>
        </div>
        <div {...stylex.props(styles.mb24)}>
          <Paragraph>{t('CAMERA_PERMISSION_INSTRUCTIONS')}</Paragraph>
        </div>
        <div {...stylex.props(styles.actionsRow)}>
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
