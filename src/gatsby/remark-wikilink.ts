import GithubSlugger from 'github-slugger';
import { slugify } from './slugify';

type WikilinkArgs = {
  fileName?: string;
  heading?: string;
  alias?: string;
};

const slugifyHeading = GithubSlugger.slug;

export const wikilinkToUrl = ({ fileName, heading }: WikilinkArgs) => {
  return (
    (fileName &&
      heading &&
      `${slugify(fileName)}#${slugifyHeading(heading)}`) ||
    (fileName && slugify(fileName)) ||
    (heading && `#${slugifyHeading(heading)}`) ||
    '#'
  );
};

export const wikilinkToLinkText = ({
  fileName,
  heading,
  alias,
}: WikilinkArgs): string => {
  return (
    alias ||
    (fileName && heading && `${fileName} > ${heading}`) ||
    fileName ||
    `> ${heading}`
  );
};
