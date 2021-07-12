const siteUrl = "https://macoin.finance/buy";

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const msg = await message.channel.send(`**Compre MaCoin**
${siteUrl}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["comprar", "exchange"],
  permLevel: "User"
};

exports.help = {
  name: "buy",
  category: "Info",
  description: "Exibe a PancakeSwap configurada para compra da MaCoin.",
  usage: "buy"
};
