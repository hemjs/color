import { build, encode } from './utils';

export function reset(str: string): string {
  return build(str, encode(0, 0));
}

export function bold(str: string): string {
  return build(str, encode(1, 22));
}

export function dim(str: string): string {
  return build(str, encode(2, 22));
}

export function italic(str: string): string {
  return build(str, encode(3, 23));
}

export function underline(str: string): string {
  return build(str, encode(4, 24));
}

export function inverse(str: string): string {
  return build(str, encode(7, 27));
}

export function hidden(str: string): string {
  return build(str, encode(8, 28));
}

export function strikethrough(str: string): string {
  return build(str, encode(9, 29));
}

export function black(str: string): string {
  return build(str, encode(30, 39));
}

export function red(str: string): string {
  return build(str, encode(31, 39));
}

export function green(str: string): string {
  return build(str, encode(32, 39));
}

export function yellow(str: string): string {
  return build(str, encode(33, 39));
}

export function blue(str: string): string {
  return build(str, encode(34, 39));
}

export function magenta(str: string): string {
  return build(str, encode(35, 39));
}

export function cyan(str: string): string {
  return build(str, encode(36, 39));
}

export function white(str: string): string {
  return build(str, encode(37, 39));
}

export function gray(str: string): string {
  return build(str, encode(90, 39));
}

export function brightBlack(str: string): string {
  return build(str, encode(90, 39));
}

export function brightRed(str: string): string {
  return build(str, encode(91, 39));
}

export function brightGreen(str: string): string {
  return build(str, encode(92, 39));
}

export function brightYellow(str: string): string {
  return build(str, encode(93, 39));
}

export function brightBlue(str: string): string {
  return build(str, encode(94, 39));
}

export function brightMagenta(str: string): string {
  return build(str, encode(95, 39));
}

export function brightCyan(str: string): string {
  return build(str, encode(96, 39));
}

export function brightWhite(str: string): string {
  return build(str, encode(97, 39));
}

export function bgBlack(str: string): string {
  return build(str, encode(40, 49));
}

export function bgRed(str: string): string {
  return build(str, encode(41, 49));
}

export function bgGreen(str: string): string {
  return build(str, encode(42, 49));
}

export function bgYellow(str: string): string {
  return build(str, encode(43, 49));
}

export function bgBlue(str: string): string {
  return build(str, encode(44, 49));
}

export function bgMagenta(str: string): string {
  return build(str, encode(45, 49));
}

export function bgCyan(str: string): string {
  return build(str, encode(46, 49));
}

export function bgWhite(str: string): string {
  return build(str, encode(47, 49));
}

export function bgBrightBlack(str: string): string {
  return build(str, encode(100, 49));
}

export function bgBrightRed(str: string): string {
  return build(str, encode(101, 49));
}

export function bgBrightGreen(str: string): string {
  return build(str, encode(102, 49));
}

export function bgBrightYellow(str: string): string {
  return build(str, encode(103, 49));
}

export function bgBrightBlue(str: string): string {
  return build(str, encode(104, 49));
}

export function bgBrightMagenta(str: string): string {
  return build(str, encode(105, 49));
}

export function bgBrightCyan(str: string): string {
  return build(str, encode(106, 49));
}

export function bgBrightWhite(str: string): string {
  return build(str, encode(107, 49));
}
