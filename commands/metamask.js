const tutoUrl= "https://www.evernote.com/shard/s705/sh/9cc833bd-30be-36ed-f82e-34b27edb00fa/921941bf3c9cb4f14ec0943c57bc11cf";

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const msg = await message.channel.send(`**Como adicionar a Binance Smart Chain e a MaCoin à Metamask e como importar carteiras.**
${tutoUrl}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tutorialmetamask", "metamasktut"],
  permLevel: "User"
};

exports.help = {
  name: "metamask",
  category: "Tutoriais",
  description: "Tutorial da Metamask.",
  usage: "metamask"
};
