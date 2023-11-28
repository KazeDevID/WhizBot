const Command = require('../../functions/commandHandler');
const fetch = require("node-fetch");

Command.create({
  name: 'luffy',
  async run({ q, reply }) {
    if (!q) return reply('What can I do to help?');
    try {
      let api = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Luffy&text=${q}`);
      let res = await api.json();
      reply(res);
    } catch (err) {
      console.log(err);
    }
  }
});

Command.create({
  name: 'nino',
  async run({ q, reply }) {
    if (!q) return reply('What can I do to help?');
    try {
      let api = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Nino&text=${q}`);
      let res = await api.json();
      reply(res);
    } catch (err) {
      console.log(err);
    }
  }
});

Command.create({
  name: 'miku',
  async run({ q, reply }) {
    if (!q) return reply('What can I do to help?');
    try {
      let api = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Miku&text=${q}`);
      let res = await api.json();
      reply(res);
    } catch (err) {
      console.log(err);
    }
  }
});

Command.create({
  name: 'paimon',
  async run({ q, reply }) {
    if (!q) return reply('What can I do to help?');
    try {
      let api = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Paimon&text=${q}`);
      let res = await api.json();
      reply(res);
    } catch (err) {
      console.log(err);
    }
  }
});

Command.create({
  name: 'klee',
  async run({ q, reply }) {
    if (!q) return reply('What can I do to help?');
    try {
      let api = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Klee&text=${q}`);
      let res = await api.json();
      reply(res);
    } catch (err) {
      console.log(err);
    }
  }
});

Command.create({
  name: 'erza',
  async run({ q, reply }) {
    if (!q) return reply('What can I do to help?');
    try {
      let api = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Erza&text=${q}`);
      let res = await api.json();
      reply(res);
    } catch (err) {
      console.log(err);
    }
  }
});

Command.create({
  name: 'robin',
  async run({ q, reply }) {
    if (!q) return reply('What can I do to help?');
    try {
      let api = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Robin&text=${q}`);
      let res = await api.json();
      reply(res);
    } catch (err) {
      console.log(err);
    }
  }
});
