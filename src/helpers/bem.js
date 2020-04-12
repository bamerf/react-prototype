export const createBemFn = (block) => (element, modifier) =>
  `${block}${element !== undefined ? `__${element}` : ""}${
    modifier !== undefined ? `--${modifier}` : ""
  }`;
