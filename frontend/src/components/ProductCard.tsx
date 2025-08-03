import type { ProductType } from "@/types/ProductType";
import {
  Box,
  Button,
  Dialog,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import { useColorModeValue } from "./ui/color-mode";
import { useProductStore } from "@/store/ProductStore";
import { toaster } from "./ui/toaster";
import { useState } from "react";

type ProductCardProps = {
  product: ProductType;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const backgroundColor = useColorModeValue("white", "gray.800");
  const { deleteProduct, updateProduct } = useProductStore();
  const [open, setOpen] = useState<boolean>(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleDeleteProduct = async (pid: string) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
        duration: 5000,
        closable: true,
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
        duration: 5000,
        closable: true,
      });
    }
  };

  const handleUpdateProduct = async (
    pid: string,
    updatedProduct: ProductType
  ) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
        duration: 5000,
        closable: true,
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
        duration: 5000,
        closable: true,
      });
    }
  };

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
          <IconButton colorScheme="blue" onClick={() => setOpen(true)}>
            <PencilSimpleIcon />
          </IconButton>
          <IconButton
            colorScheme="red"
            onClick={() => handleDeleteProduct(product._id)}
          >
            <TrashIcon />
          </IconButton>
        </HStack>
      </Box>

      <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Dialog Title</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <VStack gap={4}>
                  <Input
                    placeholder="Product Name"
                    name="name"
                    value={updatedProduct.name}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        name: e.target.value,
                      })
                    }
                  />
                  <Input
                    placeholder="Price"
                    name="price"
                    value={updatedProduct.price}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        price: e.target.value,
                      })
                    }
                  />
                  <Input
                    placeholder="Image URL"
                    name="image"
                    value={updatedProduct.image}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        image: e.target.value,
                      })
                    }
                  />
                </VStack>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={() =>
                      handleUpdateProduct(product._id, updatedProduct)
                    }
                  >
                    Update
                  </Button>
                </Dialog.ActionTrigger>
                <Dialog.ActionTrigger asChild>
                  <Button variant="ghost">Cancel</Button>
                </Dialog.ActionTrigger>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Box>
  );
};

export default ProductCard;
