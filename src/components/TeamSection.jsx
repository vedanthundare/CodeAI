import React from "react";
import TeamMemberComponent from "./TeamMemberComponent";

const TeamSection = ({ members }) => {
  return (
    <div className="mt-12">
      <div className="team-section flex justify-center flex-wrap gap-4 mt-6">
        {members.map((member, index) => (
          <TeamMemberComponent key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
