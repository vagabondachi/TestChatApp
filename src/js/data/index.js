import React from 'react';


import {
  RiStarSmileFill,
  RiTeamFill,
  RiGamepadFill
} from "react-icons/ri";

const Nav_Buttons = [
  {
    index: 0,
    icon: <RiStarSmileFill />,
  },
  {
    index: 1,
    icon: <RiTeamFill />,
  },
  {
    index: 2,
    icon: <RiGamepadFill />,
  },
];


const ChatList = [
  {
    id: 0,
    img: "C:/Users/pearl/OneDrive/Desktop/Weedle/assets/images/smallweedle.png",
    name: "atty woo",
    time: "9:36",
    unread: 0,
    pinned: true,
    online: false,
  },
  {
    id: 1,
    img: "C:/Users/pearl/OneDrive/Desktop/Weedle/assets/images/smallweedle.png",
    name: "arthur",
    time: "9:50",
    unread: 5,
    pinned: false,
    online: true,
  },
  {
    id: 2,
    img: "C:/Users/pearl/OneDrive/Desktop/Weedle/assets/images/smallweedle.png",
    name: "arthur",
    time: "9:50",
    unread: 5,
    pinned: true,
    online: true,
  },
  {
    id: 3,
    img: "C:/Users/pearl/OneDrive/Desktop/Weedle/assets/images/smallweedle.png",
    name: "arthur",
    time: "9:50",
    unread: 5,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: "C:/Users/pearl/OneDrive/Desktop/Weedle/assets/images/smallweedle.png",
    name: "arthur",
    time: "9:50",
    unread: 5,
    pinned: false,
    online: true,
  },
  {
    id: 5,
    img: "C:/Users/pearl/OneDrive/Desktop/Weedle/assets/images/smallweedle.png",
    name: "arthur",
    time: "9:50",
    unread: 5,
    pinned: false,
    online: true,
  },
];

export {

  Nav_Buttons,
  ChatList

};
