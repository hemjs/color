import * as color from '../src';

describe('color', () => {
  it('should reset text', () => {
    expect(color.reset('foo bar')).toBe('[0mfoo bar[0m');
  });

  it('should make text bold', () => {
    expect(color.bold('foo bar')).toBe('[1mfoo bar[22m');
  });

  it('should make text dim', () => {
    expect(color.dim('foo bar')).toBe('[2mfoo bar[22m');
  });

  it('should make text italic', () => {
    expect(color.italic('foo bar')).toBe('[3mfoo bar[23m');
  });

  it('should make text underline', () => {
    expect(color.underline('foo bar')).toBe('[4mfoo bar[24m');
  });

  it('should invert background and text color', () => {
    expect(color.inverse('foo bar')).toBe('[7mfoo bar[27m');
  });

  it('should make text hidden', () => {
    expect(color.hidden('foo bar')).toBe('[8mfoo bar[28m');
  });

  it('should make text strikethrough', () => {
    expect(color.strikethrough('foo bar')).toBe('[9mfoo bar[29m');
  });

  it('should set text color to black', () => {
    expect(color.black('foo bar')).toBe('[30mfoo bar[39m');
  });

  it('should set text color to red', () => {
    expect(color.red('foo bar')).toBe('[31mfoo bar[39m');
  });

  it('should set text color to green', () => {
    expect(color.green('foo bar')).toBe('[32mfoo bar[39m');
  });

  it('should set text color to yellow', () => {
    expect(color.yellow('foo bar')).toBe('[33mfoo bar[39m');
  });

  it('should set text color to blue', () => {
    expect(color.blue('foo bar')).toBe('[34mfoo bar[39m');
  });

  it('should set text color to magenta', () => {
    expect(color.magenta('foo bar')).toBe('[35mfoo bar[39m');
  });

  it('should set text color to cyan', () => {
    expect(color.cyan('foo bar')).toBe('[36mfoo bar[39m');
  });

  it('should set text color to white', () => {
    expect(color.white('foo bar')).toBe('[37mfoo bar[39m');
  });

  it('should set text color to gray', () => {
    expect(color.gray('foo bar')).toBe('[90mfoo bar[39m');
  });

  it('should set text color to bright black', () => {
    expect(color.brightBlack('foo bar')).toBe('[90mfoo bar[39m');
  });

  it('should set text color to bright red', () => {
    expect(color.brightRed('foo bar')).toBe('[91mfoo bar[39m');
  });

  it('should set text color to bright green', () => {
    expect(color.brightGreen('foo bar')).toBe('[92mfoo bar[39m');
  });

  it('should set text color to bright yellow', () => {
    expect(color.brightYellow('foo bar')).toBe('[93mfoo bar[39m');
  });

  it('should set text color to bright blue', () => {
    expect(color.brightBlue('foo bar')).toBe('[94mfoo bar[39m');
  });

  it('should set text color to bright magenta', () => {
    expect(color.brightMagenta('foo bar')).toBe('[95mfoo bar[39m');
  });

  it('should set text color to bright cyan', () => {
    expect(color.brightCyan('foo bar')).toBe('[96mfoo bar[39m');
  });

  it('should set text color to bright white', () => {
    expect(color.brightWhite('foo bar')).toBe('[97mfoo bar[39m');
  });

  it('should set background color to black', () => {
    expect(color.bgBlack('foo bar')).toBe('[40mfoo bar[49m');
  });

  it('should set background color to red', () => {
    expect(color.bgRed('foo bar')).toBe('[41mfoo bar[49m');
  });

  it('should set background color to green', () => {
    expect(color.bgGreen('foo bar')).toBe('[42mfoo bar[49m');
  });

  it('should set background color to yellow', () => {
    expect(color.bgYellow('foo bar')).toBe('[43mfoo bar[49m');
  });

  it('should set background color to blue', () => {
    expect(color.bgBlue('foo bar')).toBe('[44mfoo bar[49m');
  });

  it('should set background color to magenta', () => {
    expect(color.bgMagenta('foo bar')).toBe('[45mfoo bar[49m');
  });

  it('should set background color to cyan', () => {
    expect(color.bgCyan('foo bar')).toBe('[46mfoo bar[49m');
  });

  it('should set background color to white', () => {
    expect(color.bgWhite('foo bar')).toBe('[47mfoo bar[49m');
  });

  it('should set background color to bright black', () => {
    expect(color.bgBrightBlack('foo bar')).toBe('[100mfoo bar[49m');
  });

  it('should set background color to bright red', () => {
    expect(color.bgBrightRed('foo bar')).toBe('[101mfoo bar[49m');
  });

  it('should set background color to bright green', () => {
    expect(color.bgBrightGreen('foo bar')).toBe('[102mfoo bar[49m');
  });

  it('should set background color to bright yellow', () => {
    expect(color.bgBrightYellow('foo bar')).toBe('[103mfoo bar[49m');
  });

  it('should set background color to bright blue', () => {
    expect(color.bgBrightBlue('foo bar')).toBe('[104mfoo bar[49m');
  });

  it('should set background color to bright magenta', () => {
    expect(color.bgBrightMagenta('foo bar')).toBe('[105mfoo bar[49m');
  });

  it('should set background color to bright cyan', () => {
    expect(color.bgBrightCyan('foo bar')).toBe('[106mfoo bar[49m');
  });

  it('should set text background color to bright white', () => {
    expect(color.bgBrightWhite('foo bar')).toBe('[107mfoo bar[49m');
  });
});
