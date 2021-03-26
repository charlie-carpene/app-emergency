import I18n from 'i18n-js';
import * as Localization from 'expo-localization';
import en from './en';
import fr from './fr';

I18n.locale = Localization.locale;
I18n.fallbacks = true;
I18n.translations = { en, fr };

export default I18n;
