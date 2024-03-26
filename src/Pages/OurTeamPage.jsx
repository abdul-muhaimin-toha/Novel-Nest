import { useLoaderData } from "react-router-dom";
import OurTeamList from "../components/OurTeamList";
import SecondaryPageHeader from "../components/SecondaryPageHeader";

const OurTeamPage = () => {
  const members = useLoaderData();
  return (
    <>
      <SecondaryPageHeader title="Talented People Behind The Scene" />
      <OurTeamList members={members} />
    </>
  );
};

export default OurTeamPage;

export const TeamMembersDataLoader = async () => {
  const response = await fetch("/teamsMembers.json");
  return response.json();
};
