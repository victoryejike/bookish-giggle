import Mark from "../assets/avatar-mark-webber.webp";
import Kimberly from "../assets/avatar-kimberly-smith.webp";
import Angela from "../assets/avatar-angela-gray.webp";
import Anna from "../assets/avatar-anna-kim.webp";
import Nathan from "../assets/avatar-nathan-peterson.webp";
import Jacob from "../assets/avatar-jacob-thompson.webp";
import Rizky from "../assets/avatar-rizky-hasanuddin.webp";
import Chess from "../assets/image-chess.webp";
export const Notification = [
  {
    profileName: "Mark Webber",
    avatar: Mark,
    type: "reaction",
    time: "1m ago",
    readStatus: false,

    notificationFor: {
      newGroupMember: false,
      newFollower: false,
      groupName: null,
      postType: "text",
      post: "My first tournament today",
    },
  },
  {
    profileName: "Angela Gray",
    avatar: Angela,
    type: "follow",
    time: "5m ago",
    readStatus: false,

    notificationFor: {
      newGroupMember: false,
      newFollower: true,
      groupName: null,
      postType: null,
      post: "",
    },
  },
  {
    profileName: "Jacob Thompson",
    avatar: Jacob,
    type: "join",
    time: "1 day ago",
    readStatus: false,

    notificationFor: {
      newGroupMember: true,
      groupName: "Chess Club",
      newFollower: false,
      postType: null,
      post: "",
    },
  },
  {
    profileName: "Rizky Hasanuddin",
    avatar: Rizky,
    type: "message",
    time: "5 days ago",
    readStatus: true,

    notificationFor: {
      newGroupMember: false,
      groupName: null,
      newFollower: false,
      postType: "text",
      post: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
  },
  {
    profileName: "Kimberly Smith",
    avatar: Kimberly,
    type: "image-comment",
    time: "1 week ago",
    readStatus: true,

    notificationFor: {
      newGroupMember: false,
      groupName: null,
      newFollower: false,
      postType: "image",
      post: Chess,
    },
  },
  {
    profileName: "Nathan Peterson",
    avatar: Nathan,
    type: "reaction",
    time: "2 weeks ago",
    readStatus: true,

    notificationFor: {
      newGroupMember: false,
      groupName: null,
      newFollower: false,
      postType: "text",
      post: "5 end-game strategies to increase your win rate",
    },
  },
  {
    profileName: "Anna Kim",
    avatar: Anna,
    type: "left-group",
    time: "2 weeks ago",
    readStatus: true,

    notificationFor: {
      newGroupMember: false,
      groupName: "Chess Club",
      newFollower: false,
      postType: null,
      post: "",
    },
  },
];

export type NotificationType = {
  profileName: string;
  avatar: string;
  type: string;
  time: string;
  readStatus: boolean;
  notificationFor: TNotification;
};

type TNotification = {
  newGroupMember: boolean;
  groupName: string;
  newFollower: boolean;
  postType: string | null;
  post: string;
};
