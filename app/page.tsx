import CarsList from "./products/page";

import Footer from "@/components/footer";
import Header from "@/components/header";



export default function Home() {
  return (
    <div className="w-full h-screen min-h-screen flex flex-col items-center justify-items-center p-3 sm:p-6 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 flex-grow justify-center">
        <CarsList />
      </main>
      <Footer />
    </div>
  );
}
