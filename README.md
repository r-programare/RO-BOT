# RO-BOT
This is the source code for the discord bot of [r/programare](https://www.reddit.com/r/programare/).

Currently there is not a lot going on, but you can see work that needs to be done by checking the issues or, of course, you can create an issue yourself, whether it's a feature request, bug or whatever.

# Development environment
Before actually running the code you need to have a discord bot ready to be tested. For this you could create a discord bot that has at least the `send message` permission. You can follow [discord.js's](https://discordjs.guide/preparations/#installing-node-js) guide on how to set up an environment. You can create a discord server only meant for testing the bot, and then add the bot to it using the bot's invite URL

The bot is written in typescript. You need a `config.json` file in which you'll put your bot's token, client id and your server's guild id:
```js
{
  "TOKEN": "...",
  "CLIENT_ID": "...",
  "GUILD_ID": "..."
}
```
To start the bot up:
```sh
npm install

# To run the bot:
npm run ts
node build/index.js

# To register the slash commands:
node build/deploy-commands.js
```

# Contributing
Anyone can contribute to RO-BOT, just make sure to follow these rules:
 - To start working on something, the first thing you should do is create an issue if it doesn't already exist. When creating an issue make sure you assign a corresponding label to it(`enhancement` is for new features, `bug` is for (duh) reporting bugs, `documentation` is for (duh!) documentation). There are no hard rules, just pick up something appropiate
 - All you changes go to a separate branch from `main`, never modify `main` directly, `main` is only meant to be merged _into_. Name the branch `RB-<issue_number>-Description-of-what-is-being-worked-on`. For example, if you're working on issue #1 and you need to provide some info in the `README` then you could name the branch something like `RB-1-Update-whatever-in-README`
 - Commit messages should look like:
   ```
   (#issue-number) Short description of change(at most 80-100 columns)

   Optionally more text describing changes
   ```
   Keep the messages short and descriptive. For a guide on how to write good commit messages you can check out "[How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)"
 - It's recommended to run `eslint` before pushing your changes:
   ```js
   npm run lint
   ```
 - When you are happy with your changes you can create a pull request, the only thing to keep in mind is to make sure you link the PR with the issue you're working on