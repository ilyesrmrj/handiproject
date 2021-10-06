import React from "react";
import Commitment from "./discoverComponents/commitment";
import WhoWeAre from "./discoverComponents/whoWeAre";
import HandiTeamComponent from "./discoverComponents/handiTeam";

const DiscoverPage = () => {
  return (
    <>
      <WhoWeAre />
      <Commitment />
      <HandiTeamComponent />
    </>
  );
};

export default DiscoverPage;
