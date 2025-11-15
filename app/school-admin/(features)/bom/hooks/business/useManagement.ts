import { useCallback } from "react";

export const useManagement = () => {
  const handleAddMember = useCallback((memberData: any) => {
    return Promise.resolve();
  }, []);

  const handleEditMember = useCallback((id: number) => {
    
  }, []);

  const handleDeleteMember = useCallback((id: number) => {
    
  }, []);

  const handleViewMember = useCallback((id: number) => {
    
  }, []);

  return {
    handleAddMember,
    handleEditMember,
    handleDeleteMember,
    handleViewMember
  };
};

