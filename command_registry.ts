import { BaseCommandInteraction } from 'discord.js';
import { whoami } from './commands/whoami.js';
import { server } from './commands/server.js';
import { ping } from './commands/ping.js';

type CommandDescription = [
    description: string,
    exec: (interaction: BaseCommandInteraction) => Promise<void>,
];

export const cmdDesc = 0;
export const cmdExec = 1;

export const commands: Record<string, CommandDescription> = {
    'ping': ['Check if the bot is alive!', ping],
    'server': ['Get server info!', server],
    'whoami': ['Get user info!', whoami],
};