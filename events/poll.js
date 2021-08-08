const client = require("../index");

    const channelIds = [
      '834390097633345541',
      '852831690900373535',// #updates
    ]
  
    const addReactions = (message) => {
      message.react('👍')
  
      setTimeout(() => {
        message.react('👎')
      }, 750)
    }
    client.on('messageCreate', async (message) => {
        if (channelIds.includes(message.channel.id)) {
          addReactions(message)
        }
    })
