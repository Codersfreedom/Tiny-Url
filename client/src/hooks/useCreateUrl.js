import { useState } from "react";
import toast from "react-hot-toast";

const useCreateUrl = (url, slug) => {
  const [alias, setAlias] = useState("");

  const createUrl = async () => {
    try {
      const response = await fetch( import.meta.env.VITE_BASE_URL+'/createUrl', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, slug }),
      });
      if(response.status === 400) {
        toast.error("Slug in use");
        return;
      }
      const data = await response.json();
      setAlias(data.slug);
      toast.success("Link is created")
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return { alias, createUrl };
};

export default useCreateUrl;
