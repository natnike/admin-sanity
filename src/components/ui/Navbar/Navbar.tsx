import React from 'react'
import { Box } from '@chakra-ui/react';
import { navbarStyle } from './style';
import { DesktopNav } from './DesktopNav';

export const Navbar = () => { 
    return (       
        <Box {...navbarStyle}>
            <DesktopNav />
        </Box>
    )   
};
