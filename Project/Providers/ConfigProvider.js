import Config from 'react-native-config';

export default function ConfigProvider() {
  return {
    googleWebClientId: Config.GOOGLE_WEB_CLIENT_ID,
    googleWebClientSecret: Config.GOOGLE_WEB_CLIENT_SECRET,
    googleAndroidClientId: Config.GOOGLE_ANDROID_CLIENT_ID,
    facebookClientId: Config.FACEBOOK_CLIENT_ID,
    facebookClientSecret: Config.FACEBOOK_CLIENT_SECRET
  }
}
