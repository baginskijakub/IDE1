'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthContext'

export const Navbar = () => {
  const { logout } = useAuth()

  return (
    <div className={'w-full flex justify-end p-4'}>
      <Button onClick={logout}>Log out</Button>
    </div>
  )
}
