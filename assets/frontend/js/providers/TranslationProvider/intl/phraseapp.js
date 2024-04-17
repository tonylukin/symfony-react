import BootstrapService from 'frontend/js/api/BootstrapService';
import Cookies from 'js-cookie';
import LanguageService from 'frontend/js/api/LanguageService';
import { initializePhraseAppEditor } from 'react-intl-phraseapp';

const config = {
  projectId: BootstrapService.getAppValue('phaseProjectId'),
  phraseEnabled: BootstrapService.getAppValue('environment') !== 'PROD' && Cookies.get('enableLocaleEditor'),
  prefix: '[[__',
  suffix: '__]]',
  autoLowercase: false,
  forceLocale: LanguageService.getSupportedLocale(),
};

initializePhraseAppEditor(config);

const escapeId = (id) => `${config.prefix}phrase_${id}${config.suffix}`;

function phrased(func) {
  if (!config.phraseEnabled) {
    return func;
  }

  // eslint-disable-next-line func-names
  return function (descriptor) {
    const { id } = descriptor;
    // https://github.com/phrase/react-intl-phraseapp/blob/master/src/injectIntl.tsx#L20
    const escapedString = id.replace('<', '[[[[[[html_open]]]]]]').replace('>', '[[[[[[html_close]]]]]]');
    return escapeId(escapedString);
  };
}

export default phrased;
