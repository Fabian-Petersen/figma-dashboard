import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { LoginFormData } from "@/app/schemas";

interface AuthResponse {
  accessToken: string;
  idToken: string;
  refreshToken: string;
}

export function useAuth() {
  const router = useRouter();

  const loginMutation = useMutation<AuthResponse, Error, LoginFormData>({
    mutationFn: async (credentials) => {
      const { data } = await api.post<AuthResponse>(
        "/api/auth/login",
        credentials
      );
      return data;
    },
    onSuccess: (data) => {
      // Store tokens securely
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("idToken", data.idToken);
      if (data.refreshToken) {
        localStorage.setItem("refreshToken", data.refreshToken);
      }

      // Redirect to dashboard
      router.push("/dashboard");
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("idToken");
    localStorage.removeItem("refreshToken");
    router.push("/login");
  };

  return {
    login: loginMutation.mutate,
    logout,
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
  };
}
