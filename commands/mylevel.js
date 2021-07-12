exports.run = async (client, message, args, level) => {
  const friendly = client.config.permLevels.find(l => l.level === level).name;
  message.reply(`Seu nível de permissão é: ${level} - ${friendly}`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nivel", "meunivel"],
  permLevel: "User"
};

exports.help = {
  name: "mylevel",
  category: "Diversos",
  description: "Exibe seu nível de permissão para o canal atual.",
  usage: "mylevel"
};
