import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "Whaly",
  //BotName
  inviteLink:
    "https://discord.com/api/oauth2/authorize?client_id=1037317292163350609&permissions=8&scope=applications.commands%20bot",
  //BotInvite Link
  Features: [
    {
      name: "Moderation",
      description:
        "Moderation is the process of eliminating or lessening extremes.",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "99% Uptime",
      description:
        "Uptime is a measure of system reliability, expressed as the percentage of time a machine, typically a computer.",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "A lot of commands",
      description:
        "There are a lot of commands in Whaly and we add some every single day",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    {
      name: "Permission Checks",
      description:
        "Check's a users permission level for administrator commands",
      logo: <CgCrown className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 25, //-  - Your
  memberCount: 700, //--   - Bot
  executedCommand: 397, //--  - Stats
  availableCommand: 20, //---   - Here
  //Do not change if you don't know about them
  faceBookLogo: (
    <BsFacebook className="h-10 w-10 text-[#4267B2] hover:scale-125 easeIn cursor-pointer" />
  ),
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  youTubeLogo: (
    <BsYoutube className="h-10 w-10 text-[#FF0000] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  githubLink: "",
  twitterLink: "https://twitter.com/silvxrstudios",
  mediumLink: "",
  facebookLink: "",
  discordLink: "https://discord.gg/zqKdVNJQGk",
  youtubeLink: "https://www.youtube.com",
};

export default config;
