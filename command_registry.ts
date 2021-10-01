import { BaseCommandInteraction } from 'discord.js';

type CommandDescription = [
    description: string,
    exec: (interaction: BaseCommandInteraction) => Promise<void>,
];

export const cmdDesc = 0;
export const cmdExec = 1;

export const commands: Record<string, CommandDescription> = {
    'ping': [
        'Check if the bot is alive!',
        async (interaction: BaseCommandInteraction): Promise<void> => {
            await interaction.reply('Pong!');
        },
    ],
    'server': [
        'Get server info!',
        async (interaction: BaseCommandInteraction): Promise<void> => {
            const result = 'Server name: ' + interaction.guild.name +
                           '\nMember count: ' + interaction.guild.memberCount;
            await interaction.reply(result);
        },
    ],
    'whoami': [
        'Get user info!',
        async (interaction: BaseCommandInteraction): Promise<void> => {
            const result = 'User tag: ' + interaction.user.tag + '\nId: ' + interaction.user.id;
            await interaction.reply(result);
        },
    ],
};