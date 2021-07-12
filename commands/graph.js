const graphUrl = "https://charts.bogged.finance/?token=0x20F23bC6F28bd31f9869b9C7750fDEaFED7d22Cd";

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const msg = await message.channel.send(`**Gráfico**
${graphUrl}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["grafico"],
  permLevel: "User"
};

exports.help = {
  name: "graph",
  category: "Info",
  description: "Exibe o gráfico da MaCoin.",
  usage: "graph"
};
