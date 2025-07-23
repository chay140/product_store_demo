import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NavBar from "./components/NavBar";
import { useColorModeValue } from "./components/ui/color-mode";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
      <Toaster />
    </>
  );
}

export default App;
