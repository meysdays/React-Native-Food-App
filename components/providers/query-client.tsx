import { queryClient } from "@/lib/query-client"
import { QueryClientProvider, QueryClientProviderProps } from "@tanstack/react-query";
import React from "react";

const ReactQueryClientProvider = ({ children }: 
{ children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
        
export default ReactQueryClientProvider;