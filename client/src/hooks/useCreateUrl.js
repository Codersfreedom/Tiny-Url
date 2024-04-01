import { useState } from "react";
import toast from "react-hot-toast";

const useCreateUrl = (url, slug) => {
  const [alias, setAlias] = useState(null);
  const [isloading,setisLoading] = useState(false);

  const createUrl = async () => {
    setisLoading(true);
    if(isloading) return;
    try {
      const response = await fetch( '/createUrl', {
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
    }finally{
        setisLoading(false);
    }
  };
  return { isloading, alias, createUrl };
};

export default useCreateUrl;
