import { BoxProps, FlexProps } from "@chakra-ui/react";

export const navbarStyle: BoxProps = {
    position: "fixed",
    w: "100%",
    bgColor: "white",
    mb: "1rem",
    zIndex: 10
};

export const desktopStyle: FlexProps = {
    justifyContent: "space-between",
    alignItems: "center",
    px: "2rem",
    py: "1rem",
    borderBottom: "1px",
    borderColor: "gray.200"
};