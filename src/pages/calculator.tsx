import Navbar from "@/app/components/navbar";
import Calculate from "@/app/components/calculate";

export default function Calculator() {
    return (
        <div className="bg-black min-w-screen min-h-screen">
            <Navbar />
            <Calculate />
        </div>
    );
}