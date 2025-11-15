import { useCallback } from "react";
import { FormData } from "@school-admin/(features)/bom/types/addMemberTypes";

export const useManagement = () => {
  const handleAddMember = useCallback((memberData: FormData) => {
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

