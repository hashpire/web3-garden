export function slugify(fileName: string): string {
  // characters: space, ? , / , \ #
  return fileName
    .replace(/\s/g, '_')
    .replace(/\?/g, 'qm')
    .replace(/#/g, 'sharp')
    .replace(/\\/g, 'backslash')
    .replace(/\//g, 'slash');
}
