const utils = require('../utils');

const subcommands = utils.generateSubcommands('set');

module.exports = {
	name: 'set',
	execute: async function(interaction, db) { utils.runSubcommandOrGroup(subcommands, interaction, db); }
};
