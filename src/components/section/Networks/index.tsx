import React from "react";
import { NetworksContainer, NetWorkItem } from "./styles";
import { NETWORK_LIST } from "./../../../static-data/networks";

import { NetworkType } from "../../../typescript/types";

const Networks = () => {
  return (
    <NetworksContainer className="networks-c">
      {NETWORK_LIST.map((newtwork: NetworkType) => (
        <NetWorkItem href={newtwork.url} target="_blank" key={newtwork.url}>
          {newtwork.icon}
        </NetWorkItem>
      ))}
    </NetworksContainer>
  );
};

export default Networks;
