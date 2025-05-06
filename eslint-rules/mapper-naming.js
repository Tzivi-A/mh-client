export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ensure exported consts end with "Mapper" and enums with "Enum" in /mappers/'
    },
    messages: {
      invalidConst: 'Exported const in /mappers/ must end with "Mapper".',
      invalidEnum: 'Exported enum must end with "Enum".'
    },
    schema: []
  },
  create(context) {
    const filename = context.getFilename();
    const isMappingFolder = filename.includes('/mapping/') || filename.includes('\\mapping\\');

    return {
      ExportNamedDeclaration(node) {
        if (!isMappingFolder) return;

        if (node.declaration?.type === 'VariableDeclaration') {
          for (const declarator of node.declaration.declarations) {
            if (declarator.id?.type === 'Identifier' && !declarator.id.name.endsWith('Mapper')) {
              context.report({
                node: declarator.id,
                messageId: 'invalidConst'
              });
            }
          }
        }
      },

      TSEnumDeclaration(node) {
        if (!node.id.name.endsWith('Enum')) {
          context.report({
            node: node.id,
            messageId: 'invalidEnum'
          });
        }
      }
    };
  }
};
