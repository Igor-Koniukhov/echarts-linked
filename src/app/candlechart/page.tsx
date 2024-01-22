
import Candle from "@/components/Candle";
import BaseLayout from "@/components/ui/baseLayout/BaseLayout";

export default function CandleCart() {

    return (
        <BaseLayout>
            <h1>Candle Chart</h1>
            <div className="z-10 max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex">
                <Candle/>
            </div>
        </BaseLayout>
    )
}
