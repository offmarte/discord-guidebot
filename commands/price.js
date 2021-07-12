const fetch = require("node-fetch")

const BECK = "0x20F23bC6F28bd31f9869b9C7750fDEaFED7d22Cd";
const PcsV2API = "https://api.pancakeswap.info/api/v2/tokens/";

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    fetch(`${PcsV2API}${BECK}`)
        .then(res => res.json())
        .then(json => {
            message.channel.send(`**Preço da MaCoin**
**USD:** ${parseFloat(json.data.price).toFixed(9)}
**BNB:** ${parseFloat(json.data.price_BNB).toFixed(9)}

*Atualizado ${new Date(json.updated_at)}` );
        });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["price", "preco"],
  permLevel: "User"
};

exports.help = {
  name: "price",
  category: "Info",
  description: "Exibe o preço da MaCoin em USD e BNB.",
  usage: "price"
};
