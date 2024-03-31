import { Button, Flex, Input, VStack } from "@chakra-ui/react";
import { FaRegCopy } from "react-icons/fa";
const Home = () => {

  return (
    <Flex alignItems={"center"} justifyContent={"center"} height={"100vh"} width={"100vw"}>
      <VStack width={"60%"} height={"80%"} spacing={10} >
        <Input variant='filled' placeholder="Type url" />
        <Flex
          width={"100%"} gap={2}
          justifyContent={"start"}
          alignItems={"center"} >

          <Input variant='outline' htmlSize={7} width={"auto"} placeholder="Type alias" />
          <Button colorScheme="teal" variant={"solid"} size={"md"}>Create</Button>

        </Flex>
        <Flex
          width={"100%"}
          justifyContent={"center"}
          position={"relative"} >
          <Input variant={"flushed"} />
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
