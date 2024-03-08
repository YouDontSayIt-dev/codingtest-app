import Navbar from "@/app/components/navbar";
import Check from "@/app/components/check";


export default function Checklist() {
    return (
        <div className="bg-primary min-w-screen min-h-screen">
            <Navbar />
            <Check />
        </div>
    );
}