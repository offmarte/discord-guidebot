const bscscanUrl = "https://bscscan.com/address/0x20f23bc6f28bd31f9869b9c7750fdeafed7d22cd";

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const msg = await message.channel.send({embed: {
        color: 3066993,
        title: "MaCoin · BECK",
        description: "Detalhes do contrato da MaCoin",
        url: bscscanUrl,
        fields: [{
            name: "Contract Address",
            value: `[0x20F23bC6F28bd31f9869b9C7750fDEaFED7d22Cd](${bscscanUrl})`
        },
        {
            name: "Symbol",
            value: "BECK"
        },
        {
            name: "Decimals",
            value: "9"
        }]
    }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["contrato", "token"],
  permLevel: "User"
};

exports.help = {
  name: "contract",
  category: "Info",
  description: "Exibe o endereço do contrato e detalhes do contrato da MaCoin.",
  usage: "contract"
};
