import i18n from 'i18n-js';
import { I18nManager } from 'react-native';

i18n.isRTL = I18nManager.isRTL;

I18nManager.allowRTL(true);

export default i18n;