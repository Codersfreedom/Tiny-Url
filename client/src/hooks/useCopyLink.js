import { useState } from "react";
import toast from "react-hot-toast";

const useCopyLink = () => {
  const [isLoading, setIsloading] = useState(false);

  const copyLink = (link) => {
    setIsloading(true);
    if (isLoading) return;
    try {
      navigator.clipboard.writeText(link);
      toast.success("Copied to clipboard");
    } catch (error) {
      console.log("Error in useCopyLink hook", error.message);
      toast.error(error.message);
    } finally {
      setIsloading(false);
    }
  };

  return { isLoading, copyLink };
};

export default useCopyLink;
