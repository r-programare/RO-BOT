import { Client, Intents } from 'discord.js';
import { readFile } from 'fs/promises';
import { cmdExec, commands } from './command_registry.js';

const config: Record<string, string> = JSON.parse((await readFile('./config.json')).toString());
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) {
        return;
    }
    const { commandName } = interaction;

    if (commandName in commands) {
        await commands[commandName][cmdExec](interaction);
    }
    else {
        await interaction.reply('Command not implemented yet!');
    }
});

client.login(config['TOKEN']);