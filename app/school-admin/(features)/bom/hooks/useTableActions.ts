export const useTableActions = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    console.log("Download functionality");
  };

  const handlePrevious = () => {
    console.log("Previous page");
  };

  const handleNext = () => {
    console.log("Next page");
  };

  return {
    handlePrint,
    handleDownload,
    handlePrevious,
    handleNext
  };
};