import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add response interceptor for better error logging
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("Response error:", {
        status: error.response.status,
        headers: error.response.headers,
        data: error.response.data,
      });
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Request setup error:", error.message);
    }
    return Promise.reject(error);
  }
);

export const useCreateItem = (key: string) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    mutate: createItem,
    isPending,
    isError,
  } = useMutation({
    mutationFn: async (item: object) => {
      try {
        const response = await api.post(`/${key}`, item);
        console.log("Success response:", response);
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Request failed:", {
            config: error.config,
            status: error.response?.status,
            statusText: error.response?.statusText,
            headers: error.response?.headers,
            data: error.response?.data,
          });
        }
        throw error;
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [key] });
      toast({
        title: "Success!",
        description: "Thank you for your review!",
        duration: 3000,
      });
      console.log("Review submitted successfully:", data);
    },
    onError: (error: ErrorEvent) => {
      console.error("Error details:", error);
      let errorMessage = "Something went wrong";
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || errorMessage;
      }
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
        duration: 3000,
      });
    },
  });

  return { createItem, isPending, isError };
};
