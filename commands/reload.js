exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (!args || args.length < 1) return message.reply("Um comando a ser recarregado deve ser passado.");
  const command = client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0]));
  let response = await client.unloadCommand(args[0]);
  if (response) return message.reply(`Erro ao descarregar: ${response}`);

  response = client.loadCommand(command.help.name);
  if (response) return message.reply(`Erro ao carregar: ${response}`);

  message.reply(`O comando \`${command.help.name}\` foi recarregado`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "reload",
  category: "Sistema",
  description: "Recarrega um comando que foi modificado.",
  usage: "reload [comando]"
};
