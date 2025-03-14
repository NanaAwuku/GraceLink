import { useQuery } from "@tanstack/react-query";

// Fetch members data
const fetchMembers = async () => {
  const response = await fetch("/api/members"); // Replace with your API URL
  if (!response.ok) throw new Error("Failed to fetch members");
  return response.json();
};

// React Query Hook
export const useFetchMembers = () => {
  return useQuery({
    queryKey: ["members"],
    queryFn: fetchMembers,
  });
};
