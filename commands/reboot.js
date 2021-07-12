exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  await message.reply("O bot está desligando.");
  await Promise.all(client.commands.map(cmd =>
    client.unloadCommand(cmd)
  ));
  process.exit(0);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "reboot",
  category: "Sistema",
  description: "Desliga o bot. Se estiver rodando em PM2, o bot irá reiniciar automaticamente.",
  usage: "reboot"
};
