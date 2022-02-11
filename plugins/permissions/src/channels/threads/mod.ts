import { BotWithCache } from "../../../deps.ts";
import addToThread from "./addToThread.ts";
import getArchivedThreads from "./getArchivedThreads.ts";
import joinThread from "./joinThread.ts";
import leaveThread from "./leaveThread.ts";
import removeThreadMember from "./removeThreadMember.ts";

export default function setupThreadPermChecks(bot: BotWithCache) {
  addToThread(bot);
  getArchivedThreads(bot);
  joinThread(bot);
  leaveThread(bot);
  removeThreadMember(bot);
}
