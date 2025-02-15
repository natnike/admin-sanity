"use client"

import {ChakraProvider} from "@chakra-ui/react"
import {ReactNode} from 'react'
import {system} from '@/app/theme'
import { Navbar } from './Navbar/Navbar'

interface ProviderProps {
  children: ReactNode
}

export function Provider({children}: ProviderProps) {
  return (
    <ChakraProvider value={system}>
      <Navbar />
      {children}
    </ChakraProvider>
  )
}