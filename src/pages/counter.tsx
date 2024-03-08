import Navbar from '@/app/components/navbar';
import Count from '@/app/components/count';

export default function Counter() {
    return (
    <div className="bg-primary min-w-screen min-h-screen">
        <Navbar />
        <Count />
    </div>
    );
}