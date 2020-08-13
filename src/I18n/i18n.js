const FR = require('../I18n/languages/fr');
const EN = require('../I18n/languages/en');
const ES = require('../I18n/languages/es');

export const translation = (language, key) => {
    if (language === 'en'){
        return EN[key]
    }
    else if (language === 'fr'){
        return FR[key]
    }
    else if (language === 'es'){
        return ES[key]
    }
}