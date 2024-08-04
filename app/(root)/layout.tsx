import SideBar from "@/components/SideBar";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif} from "next/font/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const loggedIn = {
        firstName:'Soham',
        lastName:'JSM'
    };
  return (
    <main className="flex h-screen w-full font-inter"> 
        <SideBar user={loggedIn}/>
        {children}
    </main>
  );
}
