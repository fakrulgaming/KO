const { ownerID } = require('../../owner.json') 
const colors = require('./../../colors.json')

module.exports = {
      name: "dm",
      description: "DM a user in the guild",
      aliases: ['pm'],
    run: async (bot, message, args) => {
        
        if(!message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES") && !ownerID.includes(message.author.id)) return;


      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(
          `<a:no:865963806483808256> You did not mention a user, or you gave an invalid id`
        );
      if (!args.slice(1).join(" "))
        return message.channel.send("<a:no:865963806483808256> You did not specify your message");
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("<a:no:865963806483808256> That user could not be DMed!"))
        .then(() => message.channel.send(`<a:yes:865963544380964864> Sent a message to ${user.user.tag}`));
    },
  };


/**
 * @INFO
 * Bot Coded by Fakrul Gaming#6646 |
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */