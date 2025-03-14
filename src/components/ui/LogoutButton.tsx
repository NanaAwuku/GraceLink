import { useLogout } from "@/hooks/useAuth";

const LogoutButton = () => {
  const logoutMutation = useLogout();

  return (
    <button
      onClick={() => logoutMutation.mutate()}
      className="bg-red-500 text-white px-4 py-2 rounded"
    //   disabled={logoutMutation.isLoading}
    >
      {/* {logoutMutation.isLoading ? "Logging out..." : "Logout"} */}
    </button>
  );
};

export default LogoutButton;
