import CarsList from "@/components/cars-list";

import Footer from "@/components/footer";
import Header from "@/components/header";



export default function Home() {
  return (
    <div className="w-full h-screen min-h-screen flex flex-col items-center justify-items-center  p-8 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 flex-grow">
        <CarsList />
      </main>
      <Footer />
    </div>
  );
}
