'use client'
import React from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useAuth } from '@/contexts/AuthContext'
import { Fingerprint } from 'lucide-react'

export const AuthModal = () => {
  const { isLoggedIn, login } = useAuth()

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        login()
        console.log('Space pressed')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Dialog open={!isLoggedIn}>
      <DialogContent className={'flex flex-col gap-7 justify-center items-center my-8'}>
        <Fingerprint size={80} />
        Click the space bar to confirm your identity.
      </DialogContent>
    </Dialog>
  )
}
