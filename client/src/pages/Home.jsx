import { Button, Flex, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import useCreateUrl from "../hooks/useCreateUrl";
import useCopyLink from "../hooks/useCopyLink";

const Home = () => {
  const [url,setUrl] = useState('');
  const [slug,setSlug] = useState('');

  const {isloading, alias,createUrl} = useCreateUrl(url,slug);
  const {isLoading,copyLink } = useCopyLink()
 
  let createdLink=null;
  if(alias !== null){
  createdLink = `${import.meta.env.VITE_BASE_URL}/${alias}`
  }
 console.log(createUrl)
  const handleCopy =  ()=>{

    if(createdLink == null) return;

    copyLink(createdLink);

  }

  return (
    <Flex alignItems={"center"} justifyContent={"center"} height={"100vh"} width={"100vw"}>
      <VStack width={"60%"} height={"80%"} spacing={10} >
        <Input variant='filled' placeholder="Type url" onChange={(e)=> setUrl(e.target.value)} />
        <Flex
          width={"100%"} gap={2}
          justifyContent={"start"}
          alignItems={"center"} >

          <Input variant='outline' htmlSize={7} width={"auto"} placeholder="Type alias" onChange={(e)=>setSlug(e.target.value)} />
          <Button colorScheme="teal" variant={"solid"} size={"md"} isLoading={isloading} onClick={createUrl} >Create</Button>

        </Flex>
        <Flex
          width={"100%"}
          justifyContent={"center"}
          position={"relative"} >
          <Input variant={"flushed"} readOnly value={createdLink||''} />
          <Button
            position={"absolute"}
            right={0}
            colorScheme="teal"
            variant={"solid"}
            size={"xs"}
            leftIcon={<FaRegCopy />}
            isLoading={isLoading}
            onClick={handleCopy}
          >Copy</Button>
        </Flex>



      </VStack>
    </Flex>
  )
}

export default Home
