import { describe, expect, it } from 'vitest';
import i18n from './i18n';
import { Translations } from './i18n-types';

interface MockInterface {
  a: string;
  b: {
    b11: string;
  };
  c: {
    c11: string;
    c12: {
      c21: string;
    };
  };
}

const mockText: Translations<MockInterface> = {
  en: {
    a: 'deepA01',
    b: {
      b11: 'deepB11'
    },
    c: {
      c11: 'deepC11',
      c12: {
        c21: 'deepC21'
      }
    }
  },
  es: {
    a: 'profundoA01',
    b: {
      b11: 'profundoB11'
    },
    c: {
      c11: 'profundoC11',
      c12: {
        c21: 'profundoC21'
      }
    }
  }
};

describe('i18n module', () => {
  it('should throw if parameters are missing', () => {
    expect(() => i18n<MockInterface>()).toThrow('translations');
    expect(() => i18n<MockInterface>(mockText)).toThrow('default');
  });

  it('should throw if translations does not contain the default language', () => {
    expect(() => i18n<MockInterface>(mockText, 'fr')).toThrow('does not contain');
  });

  it('should throw if translations is not an object', () => {
    expect(() => i18n<MockInterface>([1, 2, 3], 'en')).toThrow('object');
  });

  it('should trow if route is not present in translations', () => {
    const { getText } = i18n<MockInterface>(mockText, 'en');
    expect(() => getText('en', 'bad.route')).toThrow('not found');
  });

  it('should trow if route is incomplete or ends in a value other than a string', () => {
    const { getText } = i18n<MockInterface>(mockText, 'en');
    expect(() => getText('en', 'c.c12')).toThrow('string');
  });

  it('should get the default translation if the language selected is not valid', () => {
    const { getText } = i18n<MockInterface>(mockText, 'en');
    expect(getText('fr', 'c.c12.c21')).toBe('deepC21');
  });

  it.each([
    ['en', 'a', 'deepA01'],
    ['en', 'b.b11', 'deepB11'],
    ['en', 'c.c11', 'deepC11'],
    ['en', 'c.c12.c21', 'deepC21'],
    ['es', 'a', 'profundoA01'],
    ['es', 'b.b11', 'profundoB11'],
    ['es', 'c.c11', 'profundoC11'],
    ['es', 'c.c12.c21', 'profundoC21']
  ])('should get the correct translation getText(%i, %i) -> %i', (a, b, expected) => {
    const { getText } = i18n<MockInterface>(mockText, 'en');
    expect(getText(a, b)).toBe(expected);
  });
});
