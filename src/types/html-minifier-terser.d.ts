declare module 'html-minifier-terser' {
  export interface Options {
    caseSensitive?: boolean;
    collapseBooleanAttributes?: boolean;
    collapseWhitespace?: boolean;
    conservativeCollapse?: boolean;
    keepClosingSlash?: boolean;
    minifyCSS?: boolean;
    minifyJS?: boolean;
    removeComments?: boolean;
    removeEmptyAttributes?: boolean;
    removeRedundantAttributes?: boolean;
    sortAttributes?: boolean;
    sortClassName?: boolean;
  }

  export function minify(value: string, options?: Options): Promise<string>;
}
