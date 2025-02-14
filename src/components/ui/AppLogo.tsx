import React from 'react';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';


export const AppLogo = () => {
    return (
        <Link href="/">
            <Text color="gray.800" fontWeight="bold">
                TEKKEN{' '}
                <Text as="span" color="red.500">8</Text>
            </Text>
        </Link>
    )
};