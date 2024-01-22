'use client';
import Chart from "@/components/Chart";
import BaseLayout from "@/components/ui/baseLayout/BaseLayout";
import MapComponent from "@/components/Map";
import Bars from "@/components/Bars";
import {buttonValues, source} from "@/utils/charts/constants";
import {useState} from "react";

import BarChart from "@/components/BarChart";

export default function Home() {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [activeButton, setActive] = useState(0)
    const [barsParams, setParams] = useState<any[]>(source[1])
    const [mapParams, setMapParams] = useState<string>("")
    const handleClick = (index: number) => {
        setActive(index)

    }
    const setClass = (index: number, activeButton: number) => (
        index === activeButton ? "bg-cyan-900" : ""
    )

    const printHandler = () => {
        setIsClicked(true)
    }

    return (
        <BaseLayout>
            <div className=" max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
                <h1>{mapParams}</h1>
                <h2>{barsParams[2]}</h2>
                <button type="button" onClick={printHandler}>Print</button>
                <div className="w-full flex-col bg-blue-900 mb-2">

                    <h3>{barsParams}</h3>
                    <div className=" z-10 w-full flex  justify-around">
                        {
                            buttonValues.map((data, index) =>

                                <button
                                    key={`${data.title}-${index}`}
                                    onClick={() => handleClick(index)}
                                    type="button"
                                    className={`
                                        w-full
                                         border-r 
                                         border-white 
                                         flex 
                                         flex-col  
                                         items-center 
                                         p-1                                        
                                         ${setClass(index, activeButton)}`}>
                                    <div>{data.title}</div>
                                    <div className="w-full flex justify-around">
                                        <span className="inline-block">{barsParams[0] * (index + 1)}k</span>
                                        <span className="inline-block">{barsParams[1] * (index + 1)}%</span>
                                    </div>
                                </button>
                            )
                        }

                    </div>
                    <Chart
                        data={(barsParams[1] / barsParams[0]) * activeButton}
                        setIsClicked={setIsClicked}
                        clicked={isClicked}
                        isLastComponent={false}/>
                </div>
                <div className="flex w-full mb-1 bg-blue-900">
                    <MapComponent
                        setMapParams={setMapParams}
                        clicked={isClicked}
                        setIsClicked={setIsClicked}
                        isLastComponent={false}/>
                    <Bars
                        setParams={setParams}
                        clicked={isClicked}
                        setIsClicked={setIsClicked}
                        isLastComponent={false}/>
                </div>
                <div className="flex w-full mb-1 bg-blue-900">
                    <BarChart
                        clicked={isClicked}
                        setIsClicked={setIsClicked}
                        isLastComponent={true}/>
                </div>
            </div>
        </BaseLayout>
    )
}
