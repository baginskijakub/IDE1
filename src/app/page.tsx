import {AuthContextProvider} from "@/contexts/AuthContext";
import dynamic from "next/dynamic";
import {SelectionPanel} from "@/components/SelectionPanel/SelectionPanel";
import {ExpirationPanel} from "@/components/ExpirationPanel/ExpirationPanel";

const AuthModal = dynamic(
    () => import("../components/AuthModal/AuthModal").then((mod) => mod.AuthModal),
    {
        ssr: false,
        loading: () => <p>Loading...</p>,
    }
);

export default function Home() {
    return (
        <main className="w-full h-screen bg-slate-100">
            <AuthContextProvider>
                <AuthModal/>
                <div className={'w-full h-full flex gap-8 p-8 bg-slate-200'}>
                    <SelectionPanel/>
                    <ExpirationPanel/>
                </div>
            </AuthContextProvider>
        </main>
    );
}
