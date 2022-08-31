import React from "react";
import { NetworksContainer, NetWorkItem } from "./style";

const Networks = () => {
  const newtWorks = [1, 2, 3, 4, 5];

  return (
    <NetworksContainer>
      {newtWorks.map((newtWork) => (
        <NetWorkItem />
      ))}
    </NetworksContainer>
  );
};

export default Networks;
