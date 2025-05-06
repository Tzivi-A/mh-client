export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce exported consts in /mappers/ to end with "Mapper"'
    },
    messages: {
      invalidName: 'Exported const in /mappers/ must end with "Mapper".'
    },
    schema: [] // no options
  },
  create(context) {
    const filename = context.getFilename();
    const isMappingFolder =
      filename.includes('/app/mappers/') || filename.includes('\\app\\mappers\\');

    return {
      ExportNamedDeclaration(node) {
        if (!isMappingFolder) return;

        if (node.declaration?.type === 'VariableDeclaration') {
          for (const declarator of node.declaration.declarations) {
            if (declarator.id?.type === 'Identifier' && !declarator.id.name.endsWith('Mapper')) {
              context.report({
                node: declarator.id,
                messageId: 'invalidName'
              });
            }
          }
        }
      }
    };
  }
};
