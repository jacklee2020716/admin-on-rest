import assert from 'assert';

import reducer from './TranslationReducer';
import { DEFAULT_LOCALE } from './index';

describe('TranslationReducer', () => {
    it('should return DEFAULT_LOCALE by DEFAULT_LOCALE', () => {
        assert.equal(DEFAULT_LOCALE, reducer()(undefined, {}));
    });
});
