import Navbar from '@/app/components/navbar';

export default function Counter() {
    return (
<main className="bg-black min-w-screen min-h-screen">
    <Navbar />
    <div className="flex min-h-[92vh] flex-col items-center bg-black justify-center p-24">
      
      <h1 className="text-blue-500 text-[12px] md:text-sm lg:text-lg">HELLO WORLD!</h1>
      
    </div>
  </main>
    );
}