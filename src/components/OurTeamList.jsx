import PropTypes from "prop-types";
import TeamCard from "./TeamCard";

const OurTeamList = ({ members }) => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-3 lg:px-6">
        <div className=" grid grid-cols-1 gap-6 py-6 md:grid-cols-2 md:py-10 lg:grid-cols-3">
          {members.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

OurTeamList.propTypes = {
  members: PropTypes.array.isRequired,
};

export default OurTeamList;
