import type { User } from "../../types/users/user.ts";
import type { Bot } from "../../bot.ts";

/** Modifies the bot's username or avatar.
 * NOTE: username: if changed may cause the bot's discriminator to be randomized.
 */
export async function editBotProfile(bot: Bot, options: { username?: string; botAvatarURL?: string | null }) {
  const avatar = options?.botAvatarURL ? await bot.utils.urlToBase64(options?.botAvatarURL) : options?.botAvatarURL;

  const result = await bot.rest.runMethod<User>(bot.rest, "patch", bot.constants.endpoints.USER_BOT, {
    username: options.username?.trim(),
    avatar,
  });

  return bot.transformers.user(bot, result);
}
