import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { MoonIcon, PlusSquareIcon, SunIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useColorMode } from "./color-mode";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient="to-r"
          gradientFrom="cyan.400"
          gradientTo="blue.500"
          bgClip={"text"}
        >
          <Link to={"/"}>Potato Store 🛒</Link>
        </Text>

        <HStack alignItems={"center"} gap={2}>
          <Link to="/create">
            <Button>
              <PlusSquareIcon size={20} />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <MoonIcon size={20} />
            ) : (
              <SunIcon size={20} />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;
