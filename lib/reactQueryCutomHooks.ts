"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./customFetch";

// $ Function to Fetch Data from the Server with a GET request
export const useFetchItem = (key: string) => {
  const { isPending, data, isError, error } = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await customFetch.get(`/${key}`);
      return data;
    },
  });
  return { isPending, isError, data, error };
};

// const test_url = "https://httpbin.org/post";

// $ Function to Edit Data from the Server with a PATCH request
export const useEditItem = (key: string) => {
  const queryClient = useQueryClient();

  const { mutate: editItem } = useMutation({
    mutationFn: (itemId) => {
      return customFetch.patch(`/${itemId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
  return { editItem };
};

// $ Function to Delete Data from the Server with a DELETE request
export const useDeleteItem = (key: string) => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isPending: deleteTaskLoading } = useMutation({
    mutationFn: (itemId) => {
      return customFetch.delete(`/${itemId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
  return { deleteTask, deleteTaskLoading };
};
