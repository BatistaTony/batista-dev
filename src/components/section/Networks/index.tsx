import React from "react";
import { NetworksContainer, NetWorkItem } from "./styles";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbBrandMedium,
  TbBrandGithub,
} from "react-icons/tb";

const NETWORK_LIST = [
  { icon: <TbBrandFacebook />, url: "https://facebook" },
  { icon: <TbBrandInstagram />, url: "https://instagram" },
  { icon: <TbBrandTwitter />, url: "https://twitter" },
  { icon: <TbBrandLinkedin />, url: "https://linkDin" },
  { icon: <TbBrandMedium />, url: "https://medium" },
  { icon: <TbBrandGithub />, url: "https://github" },
];

const Networks = () => {
  return (
    <NetworksContainer>
      {NETWORK_LIST.map((newtwork) => (
        <NetWorkItem href={newtwork.url} target="_blank" key={newtwork.url}>
          {newtwork.icon}
        </NetWorkItem>
      ))}
    </NetworksContainer>
  );
};

export default Networks;
