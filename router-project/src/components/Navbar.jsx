import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  
  
} from "@chakra-ui/react";
import {Link as ReactRouterLink} from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import { BsBag , BsSearch } from "react-icons/bs";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Links = [
  "Tanner/Goods",
  "Mazama/Wares",
  "Featured/Collections",
  "Father's/Day/ShopFinal/Sale",
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="rgb(255, 255, 255)" borderTop="1px solid #ccc" px={4}>
        <Flex h={120} alignItems={"center"} justifyContent={"space-between"}>
        
            <Link as={ReactRouterLink} to="/">
              <img
                src="https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052"
                alt=""
              />
            </Link>

            <HStack
              as={"nav"}
              spacing={4}
              size={"md"}
              // marginLeft="-10"
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link as={ReactRouterLink} to={`${link}`} key={link} fontSize="13px" fontWeight="600" >
                  {link.split("/").join(" ")}
                </Link>
              ))}
            </HStack>
     
          <Flex alignItems={"center"} style={{marginRight:'3rem'}}>
            <Menu>
              <Link as={ReactRouterLink} to={"/login"} style={{marginRight:'2rem'}}>
                <Icon as={FaRegUser} />
              </Link>
              <Link as={ReactRouterLink} to={''} style={{marginRight:'2rem'}}>
                <Icon as={BsSearch} />
              </Link>
              <Link as={ReactRouterLink} to={'/cart'} style={{marginRight:'2rem'}}>
                <Icon as={BsBag} />
              </Link>
            </Menu>
          </Flex>
        </Flex>
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
