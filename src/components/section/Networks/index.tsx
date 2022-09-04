import React from "react";
import { NetworksContainer, NetWorkItem } from "./style";
import { Work } from "react-iconly";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbBrandMedium,
  TbBrandGithub,
} from "react-icons/tb";

const NETWORK_LIST = [
  { icon: <TbBrandFacebook />, url: "facebook" },
  { icon: <TbBrandInstagram />, url: "instagram" },
  { icon: <TbBrandTwitter />, url: "twitter" },
  { icon: <TbBrandLinkedin />, url: "linkDin" },
  { icon: <TbBrandMedium />, url: "medium" },
  { icon: <TbBrandGithub />, url: "github" },
];

const Networks = () => {
  return (
    <NetworksContainer>
      {NETWORK_LIST.map((newtWork) => (
        <NetWorkItem key={newtWork.url}>{newtWork.icon}</NetWorkItem>
      ))}
    </NetworksContainer>
  );
};

export default Networks;
