import { useState } from "react";
import toast from "react-hot-toast";

const useCreateUrl = (url, slug) => {
  const [link, setLink] = useState("");

  const createUrl = async () => {
    try {
      const response = await fetch("http://localhost:3000/createUrl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, slug }),
      });

      const data = await response.json();
      setLink(data.url);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return { link, createUrl };
};

export default useCreateUrl;
