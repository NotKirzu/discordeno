import { rest } from "../../rest/rest.ts";
import { User } from "../../types/users/user.ts";
import { Collection } from "../../util/collection.ts";
import { endpoints } from "../../util/constants.ts";

/** Get a list of users that reacted with this emoji. */
export async function getReactions(
  channelId: string,
  messageId: string,
  reaction: string,
  options?: DiscordGetReactions,
) {
  const users = (await rest.runMethod(
    "get",
    endpoints.CHANNEL_MESSAGE_REACTION(channelId, messageId, reaction),
    options,
  )) as User[];

  return new Collection(users.map((user) => [user.id, user]));
}
