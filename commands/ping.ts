import { BaseCommandInteraction } from 'discord.js';

export async function ping(interaction: BaseCommandInteraction): Promise<void> {
    await interaction.reply('Pong!');
}