const visit = require('unist-util-visit');

module.exports = ({ markdownAST }, pluginOptions) => {
  visit(markdownAST, 'link', (node) => {
    if (pluginOptions.transformUrl && node.url) {
      node.url = pluginOptions.transformUrl(node.url);
    }
  });

  return markdownAST;
};
