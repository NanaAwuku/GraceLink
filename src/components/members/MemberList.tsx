import React from "react";
import { useFetchMembers } from "../../hooks/useFetchData";

const MembersList = () => {
  const { data: members, isLoading, error } = useFetchMembers();

  if (isLoading) return <p>Loading members...</p>;
  if (error) return <p>Error loading members</p>;

  return (
    <ul>
      {members.map((member:any) => (
        <li key={member.id}>{member.name}</li>
      ))}
    </ul>
  );
};

export default MembersList;
