const Discord=require('discord.js')
const client=new Discord.Client({
    intents:[Discord.GatewayIntentBits.MessageContent,Discord.GatewayIntentBits.GuildInvites,Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.DirectMessages,

    ]
})

client.on('ready',(c)=>{
    console.log('client ready')
    console.log(c)
})
client.login('MTA5ODY0OTY0NzczMzU1MTE4NA.Gi5qpR.zgZTdIgpom7yCu27u1n9IJ3rWHAlr84wxM1FCs')

client.on('channelCreate',(c)=>{
    console.log('channel created')

})

client.on('messageCreate',(m)=>{
    console.log(m.content)
})
