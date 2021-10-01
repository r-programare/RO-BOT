import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { readFile } from 'fs/promises';
import { commands, cmdDesc } from './command_registry.js';

const config: Record<string, string> = JSON.parse((await readFile('./config.json')).toString());
const { TOKEN, CLIENT_ID, GUILD_ID } = config;

const builders: SlashCommandBuilder[] = [];

for (const cmdName in commands) {
    builders.push(new SlashCommandBuilder()
        .setName(cmdName)
        .setDescription(commands[cmdName][cmdDesc]));
}

const slashCommands = builders.map(command => command.toJSON());
const rest = new REST({ version: '9' }).setToken(TOKEN);

rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: slashCommands })
    .then(() => console.log('Registered application commands!'))
    .catch(console.error);