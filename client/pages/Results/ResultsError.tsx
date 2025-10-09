import { Card, Button, Paragraph, Camera, Glasses, Stopwatch, Warning } from '@nuralogix.ai/web-ui';
import { useTranslation } from 'react-i18next';
import * as stylex from '@stylexjs/stylex';
import { useNavigate } from 'react-router';

const styles = stylex.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: 48,
    padding: '0 16px', // Add horizontal padding for mobile
    boxSizing: 'border-box',
  },
  card: {
    padding: '32px',
    maxWidth: '450px',
    width: '100%',
    '@media (max-width: 640px)': {
      padding: '24px 20px', // Reduce padding on mobile for better use of space
    },
  },
  helpRow: {
    display: 'flex',
    alignItems: 'center',
  },
  helpIcon: {
    marginRight: '12px',
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
});

const ResultsError = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const helpItems = [
    { icon: <Camera height="30px" width="30px" />, textKey: 'KIOSK_HELP_CAMERA' as const },
    { icon: <Glasses height="30px" width="30px" />, textKey: 'KIOSK_HELP_ACCESSORIES' as const },
    { icon: <Stopwatch height="30px" width="30px" />, textKey: 'KIOSK_HELP_STAY' as const },
  ];
  return (
    <div {...stylex.props(styles.wrapper)}>
      <Card xstyle={styles.card}>
        <div {...stylex.props(styles.center, styles.mb16)}>
          <Warning height="45px" width="45px" />
        </div>
        <div {...stylex.props(styles.mb16)}>
          <Paragraph variant="error" fontWeight="bold">
            {t('RESULTS_PROCESSING_ERROR')}
          </Paragraph>
        </div>
        {helpItems.map(({ icon, textKey }, idx) => (
          <div
            key={textKey}
            {...stylex.props(
              styles.helpRow,
              idx === helpItems.length - 1 ? styles.mb24 : styles.mb16
            )}
          >
            <span {...stylex.props(styles.helpIcon)}>{icon}</span>
            <Paragraph>{t(textKey)}</Paragraph>
          </div>
        ))}
        <Button width="100%" variant="primary" onClick={() => navigate('/measurement')}>
          {t('MEASURE_AGAIN')}
        </Button>
        <div {...stylex.props(styles.center, styles.mt12)}>
          <Button variant="link" onClick={() => navigate('/')}>
            {t('EXIT')}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ResultsError;
