import Navbar from "./components/navbar";


export default function Home() {
  return (
  <main className="bg-primary">
    <Navbar />
    <div className="flex min-h-[92vh] flex-col items-center bg-primary justify-center p-24 mb-4">
      
      <h1 className="text-white text-[12px] md:text-lg lg:text-4xl animate-fadeHello">HELLO WORLD!</h1>
      
    </div>
  </main>
  );
}
