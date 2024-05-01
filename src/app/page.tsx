import { AuthContextProvider } from '@/contexts/AuthContext'
import dynamic from 'next/dynamic'
import { SelectionPanel } from '@/components/SelectionPanel/SelectionPanel'
import { ExpirationPanel } from '@/components/ExpirationPanel/ExpirationPanel'
import { Navbar } from '@/components/Navbar/Navbar'

const AuthModal = dynamic(() => import('../components/AuthModal/AuthModal').then((mod) => mod.AuthModal), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return (
    <main className="w-full h-screen bg-slate-200">
      <AuthContextProvider>
        <AuthModal />
        <div className={'w-full h-full'}>
          <Navbar />
          <div className={'w-full h-[calc(100% - 68px)] flex gap-8 p-8'}>
            <SelectionPanel />
            <ExpirationPanel />
          </div>
        </div>
      </AuthContextProvider>
    </main>
  )
}
