// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import { get } from "http";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });



export default function Home() {
  const nome = 'gabriel'
  
  function getNome() {
    return nome;
  }
  
  return (
    <main>
      <h1>Olá {getNome()}!</h1>
    </main>
  );
}
