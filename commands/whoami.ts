import { BaseCommandInteraction } from 'discord.js';

export async function whoami(interaction: BaseCommandInteraction): Promise<void> {
    const result = 'User tag: ' + interaction.user.tag + '\nId: ' + interaction.user.id;
    await interaction.reply(result);
}