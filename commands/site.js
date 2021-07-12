const siteUrl = "https://macoin.finance/";

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const msg = await message.channel.send(`**Site**
${siteUrl}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "site",
  category: "Info",
  description: "Exibe o site da MaCoin.",
  usage: "site"
};
