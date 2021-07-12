const tutoUrl= "https://www.evernote.com/shard/s705/sh/637c5a78-3df7-093f-3097-54212d2bbc12/05169afa76999b20ea0aa5b251f2f3fb";

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const msg = await message.channel.send(`**Como adicionar a Binance Smart Chain e a MaCoin à Trust Wallet e como conectar a Trust na PancakeSwap V2**
${tutoUrl}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tutorialtrust", "trustwallet"],
  permLevel: "User"
};

exports.help = {
  name: "trust",
  category: "Tutoriais",
  description: "Tutorial da Trust Wallet.",
  usage: "trust"
};
