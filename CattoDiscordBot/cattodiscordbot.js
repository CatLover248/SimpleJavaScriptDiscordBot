//Good video explaining this -> https://www.youtube.com/watch?v=7rU_KyudGBY
const Discord = require("discord.js")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })


var catImgs = ["https://c.tenor.com/SoBzDkrJuNUAAAAC/cat-hack.gif", "https://i.pinimg.com/originals/56/69/42/566942b729a1e9158c41d7b0c1df689c.jpg", "https://cdn.shopify.com/s/files/1/1915/5397/products/HackerCat_530x@2x.jpg?v=1598995616", "https://images.squarespace-cdn.com/content/v1/59551c6ed482e9b2f9cfd19e/1623407137645-LUTYG3GZ4D8SP1MFNH2Y/Hacker+cat.jpg?format=750w", "https://memegenerator.net/img/instances/75928946.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeM8pjsE8kc1J6L4BoFFZ6-eSp9K8tyRESCA&usqp=CAU",
"https://tenor.com/view/cat-pout-kitty-kitten-sad-gif-20310806",
"https://media.tenor.co/videos/146935e698960bf723a1cd8031f6312f/mp4",
"https://images-ext-2.discordapp.net/external/eIDoIshp1uV4T3m8huAljvIthH3is4pR3IrOzCqUqL4/https/i.imgur.com/wa0jJdq.mp4",
"https://media.tenor.co/videos/78c1527ca1bddbfdf8bf3b36a3c42ff0/mp4",
"https://media.tenor.co/videos/f1b41e9763c3114e6c0363b9a36a9812/mp4",
"https://media.tenor.co/videos/42a393fba6628f408ded2f951dab5fbb/mp4",
"https://media.tenor.co/videos/95a61a426569bdf620b5d678b31396e5/mp4",
]

client.on("ready", () => {
  console.log("Bot started")
  client.user.setActivity("Catto is made by FatyCaty#0717 :D")
  client.user.setStatus("idle")
})

client.on("message", msg => {
  if(msg.content.trim() === "!c"){
    msg.channel.send("**Error: Please specify a command, for a list of commands do: -c help**")
  }
  if(msg.content.startsWith("!c help")){
      msg.channel.send("```<Catto help>\n> Commands:\n!c help - shows the list of commands and some other information\n!c - sends cat image in chat\n!c amogus - Amogus\n!c talk [spanish/swedish] - talks Spanish or Swedish\n!c root [quit - force stops/quits bot] - command for Catto managment and development by FatyCaty or any other dev in the future\n```")
  }
  if(msg.content.startsWith("!c cat")){
    //returns random number depending on list of array
    var num = Math.floor(Math.random() * catImgs.length)
    msg.channel.send(catImgs[num])
  }
  if(msg.content.startsWith("!c amogus")){
    msg.channel.send("Amogus sussy imposter caught in 4k lolololol xd cope + ratio + didnt ask + fbhdfdjfhbdf")
  }
  if (msg.content.startsWith("!c talk")){
    if(msg.content.startsWith("!c talk spanish")){
      msg.channel.send("¡Hola amigo, me llamo Catto!")
    }
    if(msg.conent.startsWith("!c talk swedish")){
      msg.channel.send("Hej! Jag heter Catto!")
    }
    else{
      msg.channel.send("Error: Please specify Language")
    }
  }
  if(msg.content.startsWith("!c dev") || msg.author === "FatyCaty#0717"){
    msg.content.send("command in progress")
  }
})



client.login("el token")
