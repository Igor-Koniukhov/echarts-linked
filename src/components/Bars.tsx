'use client';
import React, {FC, useEffect, useRef} from "react";
import * as echarts from "echarts";
import {source} from "@/utils/charts/constants";
import {BarsProps} from "@/utils/charts/types";
import {setWrapper} from "@/utils/charts";

const Bars: FC<BarsProps> = ({setParams, clicked, setIsClicked, isLastComponent}) => {
    const chartDom = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const myChart = echarts.init(chartDom.current, null, {
            renderer: 'svg'
        });
        const option = {
            dataset: {
                source
            },
            grid: {containLabel: true},
            xAxis: {name: 'amount'},
            yAxis: {type: 'category'},
            visualMap: {
                orient: 'horizontal',
                left: 'center',
                min: 10,
                max: 100,
                text: ['High Score', 'Low Score'],
                dimension: 0,
                inRange: {
                    color: ['#65B581', '#FFCE34', '#FD665F']
                }
            },
            series: [
                {
                    type: 'bar',
                    encode: {
                        x: 'amount',
                        y: 'product'
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    itemStyle: {
                        color: '#65B581',
                    },
                    seriesLayoutBy: 'column',

                }
            ]
        };
        myChart.on('click', (params: any) => {
            console.log('Bar clicked:', params.value);
            setParams(params.value)
        });

        myChart.setOption(option);
        const arr = ['1', '2', '3', '4', '5', '6']
        const svg = chartDom.current.querySelector('svg');
        if (clicked) {
            myChart.on('finished', (params: any) => {
                setWrapper(svg, arr, `http://some-domain/${myChart.getId()}`, "fill", isLastComponent)
                setIsClicked(false)
            });
        }
    }, [clicked])


    return <div ref={chartDom} style={{width: '100%', height: '400px'}}/>;
}

export default Bars;