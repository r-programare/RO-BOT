import { BaseCommandInteraction } from 'discord.js';

export async function server(interaction: BaseCommandInteraction): Promise<void> {
    const result = 'Server name: ' + interaction.guild.name +
                   '\nMember count: ' + interaction.guild.memberCount;
    await interaction.reply(result);
}