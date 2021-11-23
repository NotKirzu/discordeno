import type { StageInstance } from "../../types/channels/stageInstance.ts";
import type { Bot } from "../../bot.ts";
import { PrivacyLevel } from "../../types/channels/privacyLevel.ts";

/** Creates a new Stage instance associated to a Stage channel. Requires the user to be a moderator of the Stage channel. */
export async function createStageInstance(bot: Bot, channelId: bigint, topic: string, privacyLevel?: PrivacyLevel) {
  if (!bot.utils.validateLength(topic, { max: 120, min: 1 })) {
    throw new Error(bot.constants.Errors.INVALID_TOPIC_LENGTH);
  }

  const result = await bot.rest.runMethod<StageInstance>(bot.rest, "post", bot.constants.endpoints.STAGE_INSTANCES, {
    channel_id: channelId.toString(),
    topic,
    privacy_level: privacyLevel || PrivacyLevel.GuildOnly,
  });

  return {
    id: bot.transformers.snowflake(result.id),
    guildId: bot.transformers.snowflake(result.guild_id),
    channelId: bot.transformers.snowflake(result.channel_id),
    topic: result.topic,
  };
}
