import { TeamMember } from "./teamMember.ts";

/** https://discord.com/developers/docs/topics/teams#data-models-team-object */
export interface Team {
  /** A hash of the image of the team's icon */
  icon: string | null;
  /** The unique id of the team */
  id: string;
  /** The members of the team */
  members: TeamMember[];
  /** The name of the team */
  name: string;
  /** The user id of the current team owner */
  ownerUserId: string;
}
