const siteUrl = "https://macoin.finance/sell";

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const msg = await message.channel.send(`**Venda MaCoin**
${siteUrl}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["venda"],
  permLevel: "User"
};

exports.help = {
  name: "sell",
  category: "Info",
  description: "Exibe a PancakeSwap configurada para venda da MaCoin.",
  usage: "sell"
};
