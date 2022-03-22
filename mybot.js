const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES","GUILD_PRESENCES", "GUILD_MEMBERS"], partials: ["CHANNEL"] });
//UNE ARCHIVO CONFIG AL ARCHIVO DEL BOT
/*const dquiz = require ('discord-quiz');*/
const config = require("./config.json");
const db = require("quick.db");
/*const gonzalo = require('./prueba.js');*/
require("./html.js");
/*const youtube = require("yt.js")*/
var prefix = config.prefix;

///////////////////////MENSAJE DE CONFIRMACIÓN EN LA CONSOLA//////////////////
client.on("ready", () => {
  console.log("Estoy listo!");
  
  client.user.setActivity("Pokémon Azul | s!help" ,{type: "PLAYING"})

});

////////////////////////MENSAJE DE AYUDA s!help//////////////////////////  
var ayuda = function(message, client) {//variable ayuda con todos los comandos
  var username =  message.author.username;
  var avatar = message.author.displayAvatarURL();
  
  const helpme = {
    color: 3447003,
      author: {
        name: username,
        icon_url: avatar
      },
      title: "Comandos",
      //url: "https://github.com/CraterMaik",
    
      fields: [
        {
          name: "s!hola",
          value: "Saludar siempre es de buena educación..."
        },
        {
          name: "s!hablar",
          value: "Una copa nunca viene mal para charlar."
        },
        {
          name: "s!meme",
          value: "Para que te rompas el culo."
        },
        {
          name: "s!info",
          value: "Así Oak no olvidará tu nombre."
        },
        {
          name: "s!pokemon",
          value: "Gotta catch 'em all!"
        }
      ],
      timestamp: new Date(),// te coge la hora actual
      footer: {
        icon_url: client.user.avatarURL,
        text: "El Sicario"
      },
  };
  
  message.channel.send({ embeds: [helpme] });
}

client.on('messageCreate', message => { 
  if (message.content.startsWith(prefix +"help")){
    ayuda(message, client);
  } 
});

////////////////////////MENSAJE DE BIENVENIDA s!hola//////////////////////////   
client.on('messageCreate', message => {
  var saludos = [`**${message.author.username}**, bienvenido a mi guarida.`,
                 `**${message.author.username}**, ¿en qué te puedo ayudar hoy?`,
                 `**${message.author.username}**, un placer hacer negocios contigo.`,
                 `¡MUAJAJAJA! Bienvenido, **${message.author.username}**`];
  
  var random = Math.floor(Math.random() * saludos.length);
  if (message.content.startsWith(prefix + "hola")) {
    message.channel.send(saludos[random]);

  }
});

////////////////////////MENSAJE PARA CONVERSACIÓN s!hablar//////////////////////////  
  client.on('messageCreate', message => {
    var Mensajes = ["Permíteme presentarme de nuevo. Me llaman el Sicario y será un placer negocios contigo. ¿El nieto de Oak? No sé de que me hablas...",
    "¿Conoces al Prof. Oak? Hablan de él como si fuera una especie de dios o algo. ¡Ja! Para alguien que se pasa quieto todo el tiempo en un solo cuadrado le dan demasiado crédito.", 
    "¿Por qué sólo existen 8 gimnasios en cada región? Quién sabe, quizá en la Meseta Añil sepan algo... o quizás no, jejeje.",
    "¿Alguna vez has completado la pokédex nacional? Es un reto muy  exigente, pero ése es un nuestro gran objetivo como entrenadores. Aún así, no es algo que pueda lograr cualquiera. No hay más que ver a nuestros amigos de la región de Galar. ¡MUAJAJAJA!",
    "Recuerdo mi primer día como entrenador. Aquel viejo en Ciudad Verde fue todo un espectáculo: en pie de guerra sólo por un café, jajaja.",
    "¿Te cuesta vencer al líder del gimnasio? Sólo lleva a tu pokémon más fuerte y 5 rattatas. Cuando tu pokémon esté débil, saca a los rattatas y aprovecha para curar. Siempre te recordaré...Raticate.",
    "Cuando vayas a capturar cualquier legendario, nunca olvides guardar la partida, no vaya a ser que lo pierdas para siempre...",
    "El dinero no da la felicidad... ni tampoco caramelos raros.",
    "Aprovecha al máximo los centros pokémon, que para algo vienen de nuestros impuestos."];
    
    var aleatorio = Math.floor(Math.random() * Mensajes.length);
    if (message.content.startsWith(prefix + "hablar")) {
      message.channel.send(Mensajes[aleatorio]);
  
    }
  });

///////////////////////MENSAJE DE MEMES s!memes///////////////////////

client.on('messageCreate', message => { 

const memes = [
{
  author: {
    name: message.author.username,
    icon_url: message.author.displayAvatarURL()
  },
	title: 'Túnel Roca',
  description: 'El Túnel Roca sí que fue un auténtico calvario. Menos mal que tenía uno de estos:',
	image: {
		url: 'https://i.pinimg.com/564x/8d/08/02/8d080241d132e6e63404d3db3c506559.jpg',
	},
  timestamp: new Date(),// te coge la hora actual
      footer: {
        icon_url: client.user.avatarURL,
        text: "El Sicario"
      },
},

{
  author: {
    name: message.author.username,
    icon_url: message.author.displayAvatarURL()
  },
	title: 'Lotería',
  description: 'Veo que has comprado lotería. Hace tiempo me tocó el gordo. ¿Quieres verlo?',
	image: {
		url: 'https://i.pinimg.com/564x/be/a7/46/bea746aeecf6605621bc9e99cbcf2373.jpg',
	},
  timestamp: new Date(),// te coge la hora actual
      footer: {
        icon_url: client.user.avatarURL,
        text: "El Sicario"
      },
},

{
  author: {
    name: message.author.username,
    icon_url: message.author.displayAvatarURL()
  },
	title: 'Jet Privado',
	description: 'Viajar es muy bueno ¿sabes? Vas a sitios nuevos, conoces gente nueva. Lo malo es que el billete del transporte cuesta lo suyo. Menos mal que yo siempre cuento con mi propio jet privado.',
  image: {
		url: 'https://i.pinimg.com/originals/91/14/cf/9114cf3bf4f8025a5e5ad39c98e987b1.png',
	},
  timestamp: new Date(),// te coge la hora actual
      footer: {
        icon_url: client.user.avatarURL,
        text: "El Sicario"
      },
}
];

var aleatorio = Math.floor(Math.random() * memes.length);
if(message.content.startsWith(prefix +"meme")){
message.channel.send({ embeds: [memes[aleatorio]]})};
 });
 
////////////////////////MENSAJE DE INFO DEL JUGADOR s!info///////////////

var datos = function(message, client) {
  var username =  message.author.username;
  var avatar = message.author.displayAvatarURL();
  var Id = message.author.id;
  var fecha = message.author.createdAt.toLocaleDateString();
  var Rol = message.member.roles.cache.map(rol => '` ' + rol.name + '` ').join(' ,  ');
  let Puntos = db.fetch(`Puntoslist_${message.author.id}`);
  let Pokedex = db.fetch(`pokemon_${message.author.id}`);
  
  const dataplayer = {
    color: 3447003,
      author: {
        name: username,
        icon_url: avatar
      },
      title: "Datos del jugador",
    
      fields: [
        {
          name: "Nombre",
          value: username
        },
        {
          name: "ID",
          value: Id
        },
        {
          name: "Creación de la cuenta",
          value: `${fecha}`
        },
        {
          name: "Roles",
          value: `${Rol}`
        },
        {
          name: "Pokémon capturados",
          value:  `${Pokedex}`
        },
        {
          name: "Puntos",
          value: `${Puntos}`
        },
        
      ],
      timestamp: new Date(),// te coge la hora actual
      footer: {
        icon_url: client.user.avatarURL,
        text: "El Sicario"
      },
  };
  
  message.channel.send({ embeds: [dataplayer] });
  
}


client.on('messageCreate', message => { 
if(message.content.startsWith(prefix +"info")){
  datos(message, client);
}
});

/////////////////////MENSAJE PARA EL MAPA s!mapa/////////////////////////

client.on('messageCreate', message => {
  var username =  message.author.username;
  var avatar = message.author.displayAvatarURL();
  const mapakanto = {
    color: 3447003,
        author: {
        name: username,
        icon_url: avatar
      },
    title: 'Mapa de Kanto',
    image: {
      url: 'https://i.pinimg.com/originals/95/80/b0/9580b0cec48cdcb806888e9d30279382.jpg',
    },
    timestamp: new Date(),// te coge la hora actual
      footer: {
        icon_url: client.user.avatarURL,
        text: "El Sicario"
      },
  };
    if(message.content.startsWith(prefix +"mapa")){
      message.channel.send({ embeds: [mapakanto]});
    }});

/////////////////////MENSAJE CAPTURAR POKÉMON s!pokemon//////////////////

/*var Pokedex = 0*/
/*var Puntos = 0*/

client.on('messageCreate', message => {
  if(message.content.startsWith(prefix +"pokedex")){
    let pokemon = db.fetch(`pokemonlist_${message.author.id}`).sort()

    message.channel.send(`**${message.author.username}**, has capturado los siguientes pokémon hasta ahora: ${pokemon}`)
  }})

    const lista = require("./ListaPokemon.json");

    
    client.on('messageCreate', message => {
      var username =  message.author.username;
      var avatar = message.author.displayAvatarURL();
      const ayudapokemon = {
        color: 3447003,
        author: {
        name: username,
        icon_url: avatar
      },
      title: "Modo de Captura",
      description: "¡Explora cada uno de los rincones de Kanto y captura a las 151 criaturas!\nPara ello debes introducir el comando s!(lugar).\nP.ej: s!ruta1, s!ciudadverde\n\nUna vez captures un pokémon, puedes hacerlo evolucionar con el comando\ns!evol (nombre del pokémon).\nP.ej: s!evol bulbasaur\n¡OJO! Eevee tiene tres comandos para evolucionar : s!evol eevee1/eevee2/eevee3\n\nConsejo: Utiliza el comando s!mapa para consultar el mapa de la región y\nel comando s!pokedex para ver los pokémon capturados",
      timestamp: new Date(),// te coge la hora actual
      footer: {
        icon_url: client.user.avatarURL,
        text: "El Sicario"
      },
      }
      if(message.content.startsWith(prefix +"pokemon")){
        message.channel.send({embeds: [ayudapokemon]})
      }})
    
    const Ruta1 = [lista.WildPokemon.Pidgey, lista.WildPokemon.Rattata]
    const Ruta2 = [lista.WildPokemon.Pidgey, lista.WildPokemon.Rattata, lista.WildPokemon.Caterpie, lista.WildPokemon.Weedle, lista.WildPokemon["Nidoran-H"],lista.WildPokemon["Nidoran-M"], lista.WildPokemon["Mr. Mime"]]
    const Ruta3 = [lista.WildPokemon.Pidgey, lista.WildPokemon.Rattata, lista.WildPokemon.Spearow, lista.WildPokemon.Jigglypuff, lista.WildPokemon.Sandshrew, lista.WildPokemon.Mankey]
    const Ruta4 = [lista.WildPokemon.Pidgey, lista.WildPokemon.Rattata, lista.WildPokemon.Spearow, lista.WildPokemon.Ekans, lista.WildPokemon.Sandshrew, lista.WildPokemon.Mankey]
    const Ruta5 = [lista.WildPokemon.Pidgey, lista.WildPokemon.Rattata, lista.WildPokemon.Oddish, lista.WildPokemon.Mankey, lista.WildPokemon.Bellsprout, lista.WildPokemon.Meowth, lista.WildPokemon.Abra, lista.WildPokemon.Jigglypuff, lista.WildPokemon.Pidgeotto]
    const Ruta6 = [lista.WildPokemon.Pidgey, lista.WildPokemon.Rattata, lista.WildPokemon.Oddish, lista.WildPokemon.Mankey, lista.WildPokemon.Bellsprout, lista.WildPokemon.Meowth, lista.WildPokemon.Abra, lista.WildPokemon.Jigglypuff, lista.WildPokemon.Pidgeotto, lista.WildPokemon.Psyduck, lista.WildPokemon.Golduck, lista.WildPokemon.Magikarp, lista.WildPokemon.Poliwag, lista.WildPokemon.Goldeen, lista.WildPokemon.Shellder, lista.WildPokemon.Krabby]
    const Ruta7 = [lista.WildPokemon.Pidgey, lista.WildPokemon.Rattata, lista.WildPokemon.Mankey, lista.WildPokemon.Oddish, lista.WildPokemon.Growlithe, lista.WildPokemon.Meowth, lista.WildPokemon.Bellsprout, lista.WildPokemon.Vulpix, lista.WildPokemon.Abra, lista.WildPokemon.Pidgeotto, lista.WildPokemon.Jigglypuff] 
    const Ruta8 = [lista.WildPokemon.Pidgey, lista.WildPokemon.Rattata, lista.WildPokemon.Mankey, lista.WildPokemon.Ekans, lista.WildPokemon.Growlithe, lista.WildPokemon.Meowth, lista.WildPokemon.Sandshrew, lista.WildPokemon.Vulpix, lista.WildPokemon.Abra, lista.WildPokemon.Pidgeotto, lista.WildPokemon.Jigglypuff, lista.WildPokemon.Kadabra]
    const Ruta9 = [lista.WildPokemon.Ekans, lista.WildPokemon.Rattata, lista.WildPokemon.Spearow, lista.WildPokemon.Sandshrew, lista.WildPokemon["Nidoran-H"], lista.WildPokemon["Nidoran-M"], lista.WildPokemon.Nidorina, lista.WildPokemon.Nidorino, lista.WildPokemon.Raticate, lista.WildPokemon.Fearow]
    const Ruta10 = [lista.WildPokemon.Ekans, lista.WildPokemon.Rattata, lista.WildPokemon.Spearow, lista.WildPokemon.Sandshrew, lista.WildPokemon["Nidoran-H"], lista.WildPokemon["Nidoran-M"], lista.WildPokemon.Voltorb, lista.WildPokemon.Magnemite, lista.WildPokemon.Raticate, lista.WildPokemon.Machop, lista.WildPokemon.Magikarp, lista.WildPokemon.Poliwag, lista.WildPokemon.Goldeen, lista.WildPokemon.Poliwhirl, lista.WildPokemon.Slowpoke, lista.WildPokemon.Krabby, lista.WildPokemon.Horsea, lista.WildPokemon.Kingler]
    const Ruta11 = [lista.WildPokemon.Ekans, lista.WildPokemon.Sandshrew, lista.WildPokemon.Spearow, lista.WildPokemon.Drowzee]
    const Ruta12 = [lista.WildPokemon.Snorlax, lista.WildPokemon.Magikarp, lista.WildPokemon.Poliwag, lista.WildPokemon.Goldeen, lista.WildPokemon.Tentacool, lista.WildPokemon.Krabby, lista.WildPokemon.Horsea, lista.WildPokemon.Seadra]
    const Ruta13 = [lista.WildPokemon.Pidgey, lista.WildPokemon.Pidgeotto, lista.WildPokemon.Oddish, lista.WildPokemon.Gloom, lista.WildPokemon.Venonat, lista.WildPokemon.Bellsprout, lista.WildPokemon.Weepinbell, lista.WildPokemon["Farfetch'd"], lista.WildPokemon.Ditto]
    const Ruta14 = [lista.WildPokemon.Pidgey, lista.WildPokemon.Pidgeotto, lista.WildPokemon.Oddish, lista.WildPokemon.Gloom, lista.WildPokemon.Venonat, lista.WildPokemon.Bellsprout, lista.WildPokemon.Weepinbell, lista.WildPokemon.Venomoth, lista.WildPokemon.Ditto]
    const Ruta15 = [lista.WildPokemon.Pidgey, lista.WildPokemon.Pidgeotto, lista.WildPokemon.Oddish, lista.WildPokemon.Gloom, lista.WildPokemon.Venonat, lista.WildPokemon.Bellsprout, lista.WildPokemon.Weepinbell, lista.WildPokemon.Venomoth, lista.WildPokemon.Ditto]
    const Ruta16 = [lista.WildPokemon.Rattata, lista.WildPokemon.Raticate, lista.WildPokemon.Spearow, lista.WildPokemon.Fearow, lista.WildPokemon.Doduo, lista.WildPokemon.Snorlax]
    const Ruta17 = [lista.WildPokemon.Raticate, lista.WildPokemon.Spearow, lista.WildPokemon.Fearow, lista.WildPokemon.Ponyta, lista.WildPokemon.Doduo, lista.WildPokemon.Dodrio, lista.WildPokemon.Magikarp, lista.WildPokemon.Poliwag, lista.WildPokemon.Goldeen, lista.WildPokemon.Krabby, lista.WildPokemon.Tentacool]
    const Ruta18 = [lista.WildPokemon.Rattata, lista.WildPokemon.Raticate, lista.WildPokemon.Spearow, lista.WildPokemon.Fearow, lista.WildPokemon.Doduo, lista.WildPokemon.Magikarp, lista.WildPokemon.Poliwag, lista.WildPokemon.Goldeen, lista.WildPokemon.Krabby, lista.WildPokemon.Tentacool, lista.WildPokemon.Shellder, lista.WildPokemon.Lickitung]
    const Ruta19 = [lista.WildPokemon.Magikarp, lista.WildPokemon.Poliwag, lista.WildPokemon.Goldeen, lista.WildPokemon.Tentacool, lista.WildPokemon.Tentacruel, lista.WildPokemon.Shellder, lista.WildPokemon.Horsea, lista.WildPokemon.Staryu]
    const Ruta20 = [lista.WildPokemon.Magikarp, lista.WildPokemon.Poliwag, lista.WildPokemon.Goldeen, lista.WildPokemon.Tentacool, lista.WildPokemon.Tentacruel, lista.WildPokemon.Shellder, lista.WildPokemon.Horsea, lista.WildPokemon.Staryu]
    const Ruta21 = [lista.WildPokemon.Pidgey, lista.WildPokemon.Pidgeotto, lista.WildPokemon.Rattata, lista.WildPokemon.Raticate, lista.WildPokemon.Tangela, lista.WildPokemon.Magikarp, lista.WildPokemon.Poliwag, lista.WildPokemon.Goldeen, lista.WildPokemon.Tentacool, lista.WildPokemon.Tentacruel, lista.WildPokemon.Shellder, lista.WildPokemon.Horsea, lista.WildPokemon.Staryu]
    const Ruta22 = [lista.WildPokemon.Rattata, lista.WildPokemon.Spearow, lista.WildPokemon["Nidoran-H"], lista.WildPokemon["Nidoran-M"], lista.WildPokemon.Mankey, lista.WildPokemon.Magikarp, lista.WildPokemon.Poliwag, lista.WildPokemon.Goldeen]
    const Ruta23 = [lista.WildPokemon.Spearow, lista.WildPokemon.Fearow, lista.WildPokemon.Ekans, lista.WildPokemon.Arbok, lista.WildPokemon.Sandshrew, lista.WildPokemon.Sandslash, lista.WildPokemon.Nidorina, lista.WildPokemon.Nidorino, lista.WildPokemon.Mankey, lista.WildPokemon.Primeape, lista.WildPokemon.Ditto, lista.WildPokemon.Poliwag, lista.WildPokemon.Poliwhirl, lista.WildPokemon.Goldeen, lista.WildPokemon.Slowbro, lista.WildPokemon.Kingler, lista.WildPokemon.Seadra, lista.WildPokemon.Seaking]
    const Ruta24 = [lista.WildPokemon.Caterpie, lista.WildPokemon.Metapod, lista.WildPokemon.Weedle, lista.WildPokemon.Kakuna, lista.WildPokemon.Pidgey, lista.WildPokemon.Oddish, lista.WildPokemon.Venonat, lista.WildPokemon.Abra, lista.WildPokemon.Bellsprout, lista.WildPokemon.Charmander]
    const Ruta25 = [lista.WildPokemon.Caterpie, lista.WildPokemon.Metapod, lista.WildPokemon.Weedle, lista.WildPokemon.Kakuna, lista.WildPokemon.Pidgey, lista.WildPokemon.Oddish, lista.WildPokemon.Venonat, lista.WildPokemon.Abra, lista.WildPokemon.Bellsprout]
    const CiudadCeleste = [lista.WildPokemon.Bulbasaur, lista.WildPokemon.Jynx]
    const CiudadCarmin = [lista.WildPokemon.Squirtle, lista.WildPokemon["Farfetch'd"]]
    const CiudadAzafran = [lista.WildPokemon.Hitmonchan, lista.WildPokemon.Hitmonlee, lista.WildPokemon.Lapras]
    const CiudadAzulona = [lista.WildPokemon.Eevee]
    const CiudadFucsia = [lista.WildPokemon.Gyarados]
    const IslaCanela = [lista.WildPokemon.Seel, lista.WildPokemon.Dewgong, lista.WildPokemon.Muk, lista.WildPokemon.Electrode, lista.WildPokemon.Rhydon, lista.WildPokemon.Tangela, lista.WildPokemon.Omanyte, lista.WildPokemon.Kabuto, lista.WildPokemon.Aerodactyl]
    const BosqueVerde = [lista.WildPokemon.Weedle, lista.WildPokemon.Caterpie, lista.WildPokemon.Kakuna, lista.WildPokemon.Metapod, lista.WildPokemon.Pikachu, lista.WildPokemon.Pidgey, lista.WildPokemon.Pidgeotto]
    const MtMoon = [lista.WildPokemon.Zubat, lista.WildPokemon.Geodude, lista.WildPokemon.Paras, lista.WildPokemon.Clefairy, lista.WildPokemon.Sandshrew]
    const CuevaCeleste = [lista.WildPokemon.Arbok, lista.WildPokemon.Raichu, lista.WildPokemon.Sandslash, lista.WildPokemon.Golbat, lista.WildPokemon.Gloom, lista.WildPokemon.Parasect, lista.WildPokemon.Venomoth, lista.WildPokemon.Kadabra, lista.WildPokemon.Weepinbell, lista.WildPokemon.Graveler, lista.WildPokemon.Magneton, lista.WildPokemon.Dodrio, lista.WildPokemon.Hypno, lista.WildPokemon.Ditto, lista.WildPokemon.Wigglytuff, lista.WildPokemon.Electrode, lista.WildPokemon.Marowak, lista.WildPokemon.Rhyhorn, lista.WildPokemon.Rhydon, lista.WildPokemon.Chansey, lista.WildPokemon.Lickitung, lista.WildPokemon.Mewtwo, lista.WildPokemon.Magikarp, lista.WildPokemon.Poliwag, lista.WildPokemon.Goldeen, lista.WildPokemon.Slowbro, lista.WildPokemon.Kingler, lista.WildPokemon.Seadra, lista.WildPokemon.Seaking]
    const CuevaDiglett = [lista.WildPokemon.Diglett, lista.WildPokemon.Dugtrio]
    const Camion = [lista.WildPokemon.Mew]
    const CentralEnergia = [lista.WildPokemon.Voltorb, lista.WildPokemon.Pikachu, lista.WildPokemon.Magnemite, lista.WildPokemon.Magneton, lista.WildPokemon.Electabuzz, lista.WildPokemon.Raichu, lista.WildPokemon.Grimer, lista.WildPokemon.Muk, lista.WildPokemon.Zapdos]
    const TunelRoca = [lista.WildPokemon.Zubat, lista.WildPokemon.Geodude, lista.WildPokemon.Machop, lista.WildPokemon.Onix]
    const TorrePokemon = [lista.WildPokemon.Gastly, lista.WildPokemon.Haunter, lista.WildPokemon.Gengar, lista.WildPokemon.Cubone]
    const Casino = [lista.WildPokemon.Nidorina, lista.WildPokemon.Nidorino, lista.WildPokemon.Clefairy, lista.WildPokemon.Vulpix, lista.WildPokemon.Wigglytuff, lista.WildPokemon.Abra, lista.WildPokemon.Scyther, lista.WildPokemon.Pinsir, lista.WildPokemon.Porygon, lista.WildPokemon.Dratini]
    const ZonaSafari = [lista.WildPokemon["Nidoran-H"], lista.WildPokemon["Nidoran-M"], lista.WildPokemon.Nidorina, lista.WildPokemon.Nidorino, lista.WildPokemon.Paras, lista.WildPokemon.Parasect, lista.WildPokemon.Paras, lista.WildPokemon.Parasect, lista.WildPokemon.Venonat, lista.WildPokemon.Venomoth, lista.WildPokemon.Exeggcute, lista.WildPokemon.Rhyhorn, lista.WildPokemon.Chansey, lista.WildPokemon.Tangela, lista.WildPokemon.Scyther, lista.WildPokemon.Pinsir, lista.WildPokemon.Magikarp, lista.WildPokemon.Poliwag, lista.WildPokemon.Goldeen, lista.WildPokemon.Seaking, lista.WildPokemon.Psyduck, lista.WildPokemon.Slowpoke, lista.WildPokemon.Krabby, lista.WildPokemon.Dratini, lista.WildPokemon.Dragonair, lista.WildPokemon.Doduo, lista.WildPokemon.Cubone, lista.WildPokemon.Marowak, lista.WildPokemon.Kangaskhan, lista.WildPokemon.Tauros]
    const MansionPokemon = [lista.WildPokemon.Rattata, lista.WildPokemon.Raticate, lista.WildPokemon.Vulpix, lista.WildPokemon.Growlithe, lista.WildPokemon.Ponyta, lista.WildPokemon.Grimer, lista.WildPokemon.Muk, lista.WildPokemon.Koffing, lista.WildPokemon.Weezing, lista.WildPokemon.Magmar, lista.WildPokemon.Ditto]
    const IslasEspuma = [lista.WildPokemon.Seel, lista.WildPokemon.Horsea, lista.WildPokemon.Krabby, lista.WildPokemon.Shellder, lista.WildPokemon.Slowpoke, lista.WildPokemon.Staryu, lista.WildPokemon.Psyduck, lista.WildPokemon.Zubat, lista.WildPokemon.Golbat, lista.WildPokemon.Golduck, lista.WildPokemon.Slowbro, lista.WildPokemon.Kingler, lista.WildPokemon.Tentacool, lista.WildPokemon.Articuno]
    const CalleVictoria = [lista.WildPokemon.Onix, lista.WildPokemon.Machop, lista.WildPokemon.Zubat, lista.WildPokemon.Geodude, lista.WildPokemon.Golbat, lista.WildPokemon.Machoke, lista.WildPokemon.Marowak, lista.WildPokemon.Graveler, lista.WildPokemon.Venomoth, lista.WildPokemon.Moltres]
    
    function random_item(sitio)
    {
      return sitio[Math.floor(Math.random()*sitio.length)];
    }
    
    const { MessageEmbed } = require('discord.js');
    client.on('messageCreate', message => {
    lugar=["ruta1","ruta2","ruta3","ruta4","ruta5","ruta6","ruta7","ruta8","ruta9","ruta10","ruta11","ruta12","ruta13","ruta14","ruta15","ruta16","ruta17","ruta18","ruta19","ruta20","ruta21","ruta22","ruta23","ruta24","ruta25","ciudadceleste","ciudadcarmin","ciudadazafran","ciudadazulona","ciudadfucsia","islacanela","bosqueverde","mtmoon","cuevaceleste","cuevadiglett","camion","centralenergia","tunelroca","torrepokemon","casino","zonasafari","mansionpokemon","islasespuma","callevictoria"];
    for(i = 0; i < lugar.length; i++){
    if(message.content == prefix + lugar[i]){
    switch(lugar[i]){
      case "ruta1": var appearedpokemon = random_item(Ruta1); break;
      case "ruta2": var appearedpokemon = random_item(Ruta2); break;
      case "ruta3": var appearedpokemon = random_item(Ruta3); break;
      case "ruta4": var appearedpokemon = random_item(Ruta4); break;
      case "ruta5": var appearedpokemon = random_item(Ruta5); break;
      case "ruta6": var appearedpokemon = random_item(Ruta6); break;
      case "ruta7": var appearedpokemon = random_item(Ruta7); break;
      case "ruta8": var appearedpokemon = random_item(Ruta8); break;
      case "ruta9": var appearedpokemon = random_item(Ruta9); break;
      case "ruta10": var appearedpokemon = random_item(Ruta10); break;
      case "ruta11": var appearedpokemon = random_item(Ruta11); break;
      case "ruta12": var appearedpokemon = random_item(Ruta12); break;
      case "ruta13": var appearedpokemon = random_item(Ruta13); break;
      case "ruta14": var appearedpokemon = random_item(Ruta14); break;
      case "ruta15": var appearedpokemon = random_item(Ruta15); break;
      case "ruta16": var appearedpokemon = random_item(Ruta16); break;
      case "ruta17": var appearedpokemon = random_item(Ruta17); break;
      case "ruta18": var appearedpokemon = random_item(Ruta18); break;
      case "ruta19": var appearedpokemon = random_item(Ruta19); break;
      case "ruta20": var appearedpokemon = random_item(Ruta20); break;
      case "ruta21": var appearedpokemon = random_item(Ruta21); break;
      case "ruta22": var appearedpokemon = random_item(Ruta22); break;
      case "ruta23": var appearedpokemon = random_item(Ruta23); break;
      case "ruta24": var appearedpokemon = random_item(Ruta24); break;
      case "ruta25": var appearedpokemon = random_item(Ruta25); break;
      case "ciudadceleste": var appearedpokemon = random_item(CiudadCeleste); break;
      case "ciudadcarmin": var appearedpokemon = random_item(CiudadCarmin); break;
      case "ciudadazafran": var appearedpokemon = random_item(CiudadAzafran); break;
      case "ciudadazulona": var appearedpokemon = random_item(CiudadAzulona); break;
      case "ciudadfucsia": var appearedpokemon = random_item(CiudadFucsia); break;
      case "islacanela": var appearedpokemon = random_item(IslaCanela); break;
      case "bosqueverde": var appearedpokemon = random_item(BosqueVerde); break;
      case "mtmoon": var appearedpokemon = random_item(MtMoon); break;
      case "cuevaceleste": var appearedpokemon = random_item(CuevaCeleste); break;
      case "cuevadiglett": var appearedpokemon = random_item(CuevaDiglett); break;
      case "camion": var appearedpokemon = random_item(Camion); break;
      case "centralenergia": var appearedpokemon = random_item(CentralEnergia); break;
      case "tunelroca": var appearedpokemon = random_item(TunelRoca); break;
      case "torrepokemon": var appearedpokemon = random_item(TorrePokemon); break;
      case "casino": var appearedpokemon = random_item(Casino); break;
      case "zonasafari": var appearedpokemon = random_item(ZonaSafari); break;
      case "mansionpokemon": var appearedpokemon = random_item(MansionPokemon); break;
      case "islasespuma": var appearedpokemon = random_item(IslasEspuma); break;
      case "callevictoria": var appearedpokemon = random_item(CalleVictoria); break;
    }
      
    let pokemon = db.fetch(`pokemonlist_${message.author.id}`)
    if(pokemon===null||pokemon.includes(appearedpokemon.Name)) {
        const capturaEmbed = new MessageEmbed()
        .setAuthor({ name: `${message.author.username}`, iconURL: `${message.author.displayAvatarURL()}`})
        .setTitle(`¡Has capturado un ${appearedpokemon.Name}!\n`)
        .setImage(`${appearedpokemon.Image}`)
        .setTimestamp()
        .setFooter({ text: 'El Sicario'});
        
        message.channel.send({ embeds: [capturaEmbed] });
        db.add(`Puntoslist_${message.author.id}`, 3)
    }
    if(pokemon===null||!pokemon.includes(appearedpokemon.Name)) {
        const captura2Embed = new MessageEmbed()
        .setAuthor({ name: `${message.author.username}`, iconURL: `${message.author.displayAvatarURL()}`})
        .setTitle(`¡Has capturado un ${appearedpokemon.Name}!\n¡${appearedpokemon.Name} se ha registrado en tu Pokédex!`)
        .setImage(`${appearedpokemon.Image}`)
        .setTimestamp()
        .setFooter({ text: 'El Sicario'});
          
        message.channel.send({ embeds: [captura2Embed] });
        db.add(`Puntoslist_${message.author.id}`, 3)
        db.push(`pokemonlist_${message.author.id}`, appearedpokemon.Name)
        db.add(`pokemon_${message.author.id}`, 1)
       } 
    }}})

/////////////////////MENSAJE EVOLUCIONAR POKEMON s!evol////////////////////////////

client.on('messageCreate', message => {
  evolu=["bulbasaur","ivysaur","charmander","charmeleon","squirtle","wartortle","caterpie","metapod","weedle","kakuna","pidgey","pidgeotto","rattata","spearow","ekans","pikachu","sandshrew","nidoran-h","nidorina","nidoran-m","nidorino","clefairy","vulpix","jigglypuff","zubat","oddish","gloom","paras","venonat","diglett","meowth","psyduck","mankey","growlithe","poliwag","poliwhirl","abra","kadabra","machop","machoke","bellsprout","weepinbell","tentacool","geodude","graveler","ponyta","slowpoke","magnemite","doduo","seel","grimer","shellder","gastly","haunter","drowzee","krabby","voltorb","exeggcute","cubone","koffing","rhyhorn","horsea","goldeen","staryu","magikarp","eevee1","eevee2","eevee3","omanyte","kabuto","dratini","dragonair"];
  for(i = 0; i < evolu.length; i++){
  if(message.content == 's!evol ' + evolu[i]){
    switch(evolu[i]){
      case "bulbasaur": var preevolpokemon = lista.WildPokemon.Bulbasaur ;var evolpokemon = lista.WildPokemon.Ivysaur; break;
      case "ivysaur": var preevolpokemon = lista.WildPokemon.Ivysaur ;var evolpokemon = lista.WildPokemon.Venusaur; break;
      case "charmander": var preevolpokemon = lista.WildPokemon.Charmander ;var evolpokemon = lista.WildPokemon.Charmeleon; break;
      case "charmeleon": var preevolpokemon = lista.WildPokemon.Charmeleon ;var evolpokemon = lista.WildPokemon.Charizard; break;
      case "squirtle": var preevolpokemon = lista.WildPokemon.Squirtle ;var evolpokemon = lista.WildPokemon.Wartortle; break;
      case "wartortle": var preevolpokemon = lista.WildPokemon.Wartortle ;var evolpokemon = lista.WildPokemon.Blastoise; break;
      case "caterpie": var preevolpokemon = lista.WildPokemon.Caterpie ;var evolpokemon = lista.WildPokemon.Metapod; break;
      case "metapod": var preevolpokemon = lista.WildPokemon.Metapod ;var evolpokemon = lista.WildPokemon.Butterfree; break;
      case "weedle": var preevolpokemon = lista.WildPokemon.Weedle ;var evolpokemon = lista.WildPokemon.Kakuna; break;
      case "kakuna": var preevolpokemon = lista.WildPokemon.Kakuna ;var evolpokemon = lista.WildPokemon.Beedrill; break;
      case "pidgey": var preevolpokemon = lista.WildPokemon.Pidgey ;var evolpokemon = lista.WildPokemon.Pidgeotto; break;
      case "pidgeotto": var preevolpokemon = lista.WildPokemon.Pidgeotto ;var evolpokemon = lista.WildPokemon.Pidgeot; break;
      case "rattata": var preevolpokemon = lista.WildPokemon.Rattata ;var evolpokemon = lista.WildPokemon.Raticate; break;
      case "spearow": var preevolpokemon = lista.WildPokemon.Spearow ;var evolpokemon = lista.WildPokemon.Fearow; break;
      case "ekans": var preevolpokemon = lista.WildPokemon.Ekans ;var evolpokemon = lista.WildPokemon.Arbok; break;
      case "pikachu": var preevolpokemon = lista.WildPokemon.Pikachu ;var evolpokemon = lista.WildPokemon.Raichu; break;
      case "sandshrew": var preevolpokemon = lista.WildPokemon.Sandshrew ;var evolpokemon = lista.WildPokemon.Sandslash; break;
      case "nidoran-h": var preevolpokemon = lista.WildPokemon["Nidoran-H"] ;var evolpokemon = lista.WildPokemon.Nidorina; break;
      case "nidorina": var preevolpokemon = lista.WildPokemon.Nidorina ;var evolpokemon = lista.WildPokemon.Nidoqueen; break;
      case "nidoran-m": var preevolpokemon = lista.WildPokemon["Nidoran-M"] ;var evolpokemon = lista.WildPokemon.Nidorino; break;
      case "nidorino": var preevolpokemon = lista.WildPokemon.Nidorino ;var evolpokemon = lista.WildPokemon.Nidoking; break;
      case "clefairy": var preevolpokemon = lista.WildPokemon.Clefairy ;var evolpokemon = lista.WildPokemon.Clefable; break;
      case "vulpix": var preevolpokemon = lista.WildPokemon.Vulpix ;var evolpokemon = lista.WildPokemon.Ninetales; break;
      case "jigglypuff": var preevolpokemon = lista.WildPokemon.Jigglypuff ;var evolpokemon = lista.WildPokemon.Wigglytuff; break;
      case "zubat": var preevolpokemon = lista.WildPokemon.Zubat ;var evolpokemon = lista.WildPokemon.Golbat; break;
      case "oddish": var preevolpokemon = lista.WildPokemon.Oddish ;var evolpokemon = lista.WildPokemon.Gloom; break;
      case "gloom": var preevolpokemon = lista.WildPokemon.Gloom ;var evolpokemon = lista.WildPokemon.Vileplume; break;
      case "paras": var preevolpokemon = lista.WildPokemon.Paras ;var evolpokemon = lista.WildPokemon.Parasect; break;
      case "venonat": var preevolpokemon = lista.WildPokemon.Venonat ;var evolpokemon = lista.WildPokemon.Venomoth; break;
      case "diglett": var preevolpokemon = lista.WildPokemon.Diglett ;var evolpokemon = lista.WildPokemon.Dugtrio; break;
      case "meowth": var preevolpokemon = lista.WildPokemon.Meowth ;var evolpokemon = lista.WildPokemon.Persian; break;
      case "psyduck": var preevolpokemon = lista.WildPokemon.Psyduck ;var evolpokemon = lista.WildPokemon.Golduck; break;
      case "mankey": var preevolpokemon = lista.WildPokemon.Mankey ;var evolpokemon = lista.WildPokemon.Primeape; break;
      case "growlithe": var preevolpokemon = lista.WildPokemon.Growlithe ;var evolpokemon = lista.WildPokemon.Arcanine; break;
      case "poliwag": var preevolpokemon = lista.WildPokemon.Poliwag ;var evolpokemon = lista.WildPokemon.Poliwhirl; break;
      case "poliwhirl": var preevolpokemon = lista.WildPokemon.Poliwhirl ;var evolpokemon = lista.WildPokemon.Poliwrath; break;
      case "abra": var preevolpokemon = lista.WildPokemon.Abra ;var evolpokemon = lista.WildPokemon.Kadabra; break;
      case "kadabra": var preevolpokemon = lista.WildPokemon.Kadabra ;var evolpokemon = lista.WildPokemon.Alakazam; break;
      case "machop": var preevolpokemon = lista.WildPokemon.Machop ;var evolpokemon = lista.WildPokemon.Machoke; break;
      case "machoke": var preevolpokemon = lista.WildPokemon.Machoke ;var evolpokemon = lista.WildPokemon.Machamp; break;
      case "bellsprout": var preevolpokemon = lista.WildPokemon.Bellsprout ;var evolpokemon = lista.WildPokemon.Weepinbell; break;
      case "weepinbell": var preevolpokemon = lista.WildPokemon.Weepinbell ;var evolpokemon = lista.WildPokemon.Victreebel; break;
      case "tentacool": var preevolpokemon = lista.WildPokemon.Tentacool ;var evolpokemon = lista.WildPokemon.Tentacruel; break;
      case "geodude": var preevolpokemon = lista.WildPokemon.Geodude ;var evolpokemon = lista.WildPokemon.Graveler; break;
      case "graveler": var preevolpokemon = lista.WildPokemon.Graveler ;var evolpokemon = lista.WildPokemon.Golem; break;
      case "ponyta": var preevolpokemon = lista.WildPokemon.Ponyta ;var evolpokemon = lista.WildPokemon.Rapidash; break;
      case "slowpoke": var preevolpokemon = lista.WildPokemon.Slowpoke ;var evolpokemon = lista.WildPokemon.Slowbro; break;
      case "magnemite": var preevolpokemon = lista.WildPokemon.Magnemite ;var evolpokemon = lista.WildPokemon.Magneton; break;
      case "doduo": var preevolpokemon = lista.WildPokemon.Doduo ;var evolpokemon = lista.WildPokemon.Dodrio; break;
      case "seel": var preevolpokemon = lista.WildPokemon.Seel ;var evolpokemon = lista.WildPokemon.Dewgong; break;
      case "grimer": var preevolpokemon = lista.WildPokemon.Grimer ;var evolpokemon = lista.WildPokemon.Muk; break;
      case "shellder": var preevolpokemon = lista.WildPokemon.Shellder ;var evolpokemon = lista.WildPokemon.Cloyster; break;
      case "gastly": var preevolpokemon = lista.WildPokemon.Gastly ;var evolpokemon = lista.WildPokemon.Haunter; break;
      case "haunter": var preevolpokemon = lista.WildPokemon.Haunter ;var evolpokemon = lista.WildPokemon.Gengar; break;
      case "drowzee": var preevolpokemon = lista.WildPokemon.Drowzee ;var evolpokemon = lista.WildPokemon.Hypno; break;
      case "krabby": var preevolpokemon = lista.WildPokemon.Krabby ;var evolpokemon = lista.WildPokemon.Kingler; break;
      case "voltorb": var preevolpokemon = lista.WildPokemon.Voltorb ;var evolpokemon = lista.WildPokemon.Electrode; break;
      case "exeggcute": var preevolpokemon = lista.WildPokemon.Exeggcute ;var evolpokemon = lista.WildPokemon.Exeggutor; break;
      case "cubone": var preevolpokemon = lista.WildPokemon.Cubone ;var evolpokemon = lista.WildPokemon.Marowak; break;
      case "koffing": var preevolpokemon = lista.WildPokemon.Koffing ;var evolpokemon = lista.WildPokemon.Weezing; break;
      case "rhyhorn": var preevolpokemon = lista.WildPokemon.Rhyhorn ;var evolpokemon = lista.WildPokemon.Rhydon; break;
      case "horsea": var preevolpokemon = lista.WildPokemon.Horsea ;var evolpokemon = lista.WildPokemon.Seadra; break;
      case "goldeen": var preevolpokemon = lista.WildPokemon.Goldeen ;var evolpokemon = lista.WildPokemon.Seaking; break;
      case "staryu": var preevolpokemon = lista.WildPokemon.Staryu ;var evolpokemon = lista.WildPokemon.Starmie; break;
      case "magikarp": var preevolpokemon = lista.WildPokemon.Magikarp ;var evolpokemon = lista.WildPokemon.Gyarados; break;
      case "eevee1": var preevolpokemon = lista.WildPokemon.Eevee ;var evolpokemon = lista.WildPokemon.Vaporeon; break;
      case "eevee2": var preevolpokemon = lista.WildPokemon.Eevee ;var evolpokemon = lista.WildPokemon.Jolteon; break;
      case "eevee3": var preevolpokemon = lista.WildPokemon.Eevee ;var evolpokemon = lista.WildPokemon.Flareon; break;
      case "omanyte": var preevolpokemon = lista.WildPokemon.Omanyte ;var evolpokemon = lista.WildPokemon.Omastar; break;
      case "kabuto": var preevolpokemon = lista.WildPokemon.Kabuto ;var evolpokemon = lista.WildPokemon.Kabutops; break;
      case "dratini": var preevolpokemon = lista.WildPokemon.Dratini ;var evolpokemon = lista.WildPokemon.Dragonair; break;
      case "dragonair": var preevolpokemon = lista.WildPokemon.Dragonair ;var evolpokemon = lista.WildPokemon.Dragonite; break;
    }

    let pokemon = db.fetch(`pokemonlist_${message.author.id}`)
    
    if(pokemon===null||pokemon.includes(preevolpokemon.Name)){
      if(pokemon===null||pokemon.includes(evolpokemon.Name)) {
      const evolEmbed = new MessageEmbed()
      .setAuthor({ name: `${message.author.username}`, iconURL: `${message.author.displayAvatarURL()}`})
      .setTitle(`¡Tu ${preevolpokemon.Name} ha evolucionado en ${evolpokemon.Name}!\n`)
      .setImage(`${evolpokemon.Image}`)
      .setTimestamp()
      .setFooter({ text: 'El Sicario'});
    
      message.channel.send({ embeds: [evolEmbed] });
      db.add(`Puntoslist_${message.author.id}`, 5)
      }
    if(pokemon===null||!pokemon.includes(evolpokemon.Name)) {

      const evol2Embed = new MessageEmbed()
      .setAuthor({ name: `${message.author.username}`, iconURL: `${message.author.displayAvatarURL()}`})
      .setTitle(`¡Tu ${preevolpokemon.Name} ha evolucionado en ${evolpokemon.Name}!\n¡${evolpokemon.Name} se ha registrado en tu Pokédex!`)
      .setImage(`${evolpokemon.Image}`)
      .setTimestamp()
      .setFooter({ text: 'El Sicario'});
    
      message.channel.send({ embeds: [evol2Embed] });
      db.add(`Puntoslist_${message.author.id}`, 5)
      db.push(`pokemonlist_${message.author.id}`, evolpokemon.Name)
      db.add(`pokemon_${message.author.id}`, 1)
     } 
  }else{
    message.channel.send(`**${message.author.username}**, no tienes el pokémon que quieres evolucionar.`)
  }
  
}}
})

/////////////////////MENSAJE GYM LEADER s!gym////////////////////////////

client.on('messageCreate', message => { 
  if (message.content.startsWith(prefix +"gym")){
    message.channel.send({embed: {
      color: 3447003,
      description: "Bienvenido al castillo del Líder de Gimnasio.\nEn este modo podrás desafiar a los líderes de gimnasio y obtener sus medallas para coronarte campeón.\n\nAntes de desafiar a estos entrenadores, deberás recopilar información sobre cada uno de ellos. Para ello, deberás responder correctamente 3 preguntas por cada entrenador ejecutando el siguiente comando:\n\ns!(nombre del líder de gimnasio)(un número del 1 al 3)\nP.ej., s!brock1\n\nUna vez hayas respondido correctamente a las tres preguntas, podrás desafiarle mediante el siguiente comando:\n\ns!(nombre del líder de gimnasio)battle\nP.ej., s!brockbattle\n\n¿Tienes lo que hace falta para ser el mejor?"
    }});
}
});

////////////////////////MENSAJE PARA NUEVOS MIEMBROS//////////////////////////  

client.on("guildMemberAdd", (member) => {
  let canal = client.channels.cache.get('810233733017632798'); 
  canal.send(`${member.user}, bienvenido a ${member.guild.name}. Antes de empezar lee las #reglas y recuerda que te espero en mi guarida jejeje.`);
 
});


///////////////////////NOTIFICACIONES DE YOUTUBE//////////////////////////

/* const channelid = "UCO-jPzEflHkb3gCxnCL94lw";

const newvideo = "810241612767690752";

const Youtube = require('youtube-notification');

const notifier = new Youtube({
    hubCallback: 'https://necessary-probable-slouch.glitch.me/yt',
    secret: 'Thanks_To_Use_MY_ProJect_BY_LA|Ali#1229'
});
notifier.setup();

notifier.on('notified', data => {
    console.log('New Video in ${data.channel.name}');
    client.channels.cache.get(newvideo).send(`New Video Uploaded In ${data.channel.name}, Video: ${data.channel.title},Link: ${data.channel.link}`);

});
notifier.subscribe(channelid); */



/*client.on('message', message => { 
  if(message.content.startsWith(prefix +"pepe")){
    gonzalo.pepe(message,client);
  }
  });*/

  /*gonzalo.pepe(message,client);*/

  

 // end if

// con esto coge los archivos del .config
client.login(config.token);
