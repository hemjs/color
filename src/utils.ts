import { Code } from './types';

export const isColorAllowed = () => !process.env.NO_COLOR;

export function encode(open: number | number[], close: number): Code {
  open = !Array.isArray(open) ? [open] : open;
  return {
    open: `\x1b[${open.join(';')}m`,
    close: `\x1b[${close}m`,
    regexp: new RegExp(`\\x1b\\[${close}m`, 'g'),
  };
}

export function build(str: string, code: Code): string {
  if (isColorAllowed()) {
    str = str.replace(code.regexp, code.open);
    return `${code.open}${str}${code.close}`;
  }
  return str;
}
