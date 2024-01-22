import React from "react";
import BaseLayout from "@/components/ui/baseLayout/BaseLayout";
import dynamic from 'next/dynamic';
const ThreeD = dynamic(() => import("@/components/ThreeD/ThreeD"), { ssr: false });

export default function ThreeDExample() {

    return (
        <BaseLayout>
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <ThreeD/>
            </div>
        </BaseLayout>
    )
}
