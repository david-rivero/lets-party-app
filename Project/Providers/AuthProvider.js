import ConfigProvider from './ConfigProvider';

const config = ConfigProvider();

const Configuration = {
  googleWeb: {
    issuer: 'https://accounts.google.com',
    client_id: config.googleWebClientId,
    client_secret: config.googleWebClientSecret,
    redirect: 'com.letspartyapp.app:/oauth2callback'
  },
  googleAndroid: {
    issuer: 'https://accounts.google.com',
    client_id: config.googleAndroidClientId,
    redirect: 'com.letspartyapp.app:/oauth2callback'
  },
  facebook: {
    client_id: config.facebookClientId,
    client_secret: config.facebookClientSecret,
    redirect: 'http://localhost/facebook'
  }
};

export default Configuration;
