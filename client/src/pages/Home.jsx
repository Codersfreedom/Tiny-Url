import { Button, Flex, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import useCreateUrl from "../hooks/useCreateUrl";

const Home = () => {
  const [url,setUrl] = useState('');
  const [slug,setSlug] = useState('');

  const {alias,createUrl} = useCreateUrl(url,slug);
  let createdUrl;
  if(alias){
  createdUrl = `${import.meta.env.VITE_BASE_URL}/${alias}`
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
          <Button colorScheme="teal" variant={"solid"} size={"md"} onClick={createUrl} >Create</Button>

        </Flex>
        <Flex
          width={"100%"}
          justifyContent={"center"}
          position={"relative"} >
          <Input variant={"flushed"} readOnly value={createdUrl||''} />
          <Button
            position={"absolute"}
            right={0}
            colorScheme="teal"
            variant={"solid"}
            size={"xs"}
            leftIcon={<FaRegCopy />}
          >Copy</Button>
        </Flex>



      </VStack>
    </Flex>
  )
}

export default Home
