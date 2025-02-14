import React from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { desktopStyle } from "./style";
import { AppLogo } from "../AppLogo";
import { navItems } from "./helpers";
import Link from "next/link";


export const DesktopNav = () => {
    return <Flex {...desktopStyle}>
        <Stack direction="row" gap="1rem" flex="1" alignItems="center">
            <Box><AppLogo/></Box>

            {navItems.map((item) => (
                <Box key={item.href}>
                    <Link href={item.href} key={item.href}>{item.label}</Link>
                </Box>
            ))}

            <Box>Search</Box>
        </Stack>

        <Stack direction="row" gap="1rem">
            <Box>Wishlist</Box>
            <Box>Cart</Box>
        </Stack>
    </Flex>
};
