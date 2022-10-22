import * as color from '../src';

describe('isColorAllowed', () => {
  afterEach(() => (process.env.NO_COLOR = 'false'));
  it('should enable color by default', () => {
    expect(color.black('foo bar')).toBe('[30mfoo bar[39m');
  });

  it('should disable color', () => {
    process.env.NO_COLOR = 'true';
    expect(color.black('foo bar')).toBe('foo bar');
  });
});

describe('encode', () => {
  it('should encode single opening element', () => {
    expect(color.encode(30, 39)).toEqual({
      open: '\x1B[30m',
      close: '\x1B[39m',
      regexp: /\x1b\[39m/g,
    });
  });

  it('should encode multiple opening elements', () => {
    expect(color.encode([38, 5, 3], 39)).toEqual({
      open: '\x1B[38;5;3m',
      close: '\x1B[39m',
      regexp: /\x1b\[39m/g,
    });
  });
});
