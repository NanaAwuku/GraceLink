import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/authSlice";

// Function to send login request
const loginUser = async (credentials:any) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) throw new Error("Invalid credentials");
  return response.json(); // Expected response: { user, token }
};

// Hook for login
export const useLogin = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      dispatch(login(data)); // Save user in Redux
      localStorage.setItem("token", data.token); // Store token locally
    },
  });
};

// Function to logout
export const useLogout = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: async () => {
      localStorage.removeItem("token"); // Clear token
      dispatch(logout()); // Update Redux state
    },
  });
};
