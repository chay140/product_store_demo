import type { ProductType } from "@/types/ProductType";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import { useColorModeValue } from "./ui/color-mode";

type ProductCardProps = {
  product: ProductType;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const backgroundColor = useColorModeValue("white", "gray.800");

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={backgroundColor}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack gap={2}>
          <IconButton colorScheme="blue">
            <PencilSimpleIcon />
          </IconButton>
          <IconButton colorScheme="red">
            <TrashIcon />
          </IconButton>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
