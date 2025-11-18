import WebFormWizard from './WebFormWizard';
import MobileFormWizard from './MobileFormWizard';
import { useMobileDetection } from '../../hooks/useMobileDetection';

const Profile = () => {
  const { isMobile } = useMobileDetection();
  return isMobile ? <MobileFormWizard /> : <WebFormWizard />;
};

export default Profile;
