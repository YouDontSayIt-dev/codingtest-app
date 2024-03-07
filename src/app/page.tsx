import Navbar from "./components/navbar";


export default function Home() {
  return (
  <main className="bg-black">
    <Navbar />
    <div className="flex min-h-[92vh] flex-col items-center bg-black justify-center p-24">
      
      <h1 className="text-white text-[12px] md:text-sm lg:text-lg">HELLO WORLD!</h1>
      
    </div>
  </main>
  );
}
