'use client';
import React, {FC, useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {ChartBarProps} from "@/utils/charts/types";
import {setWrapper} from "@/utils/charts";

const BarChart: FC<ChartBarProps> = ({clicked, setIsClicked, isLastComponent}) => {
    const chartDom = useRef<HTMLDivElement>(null);
    const isWrapped = useRef<boolean>(false);
    ;

    useEffect(() => {
        const myChart = echarts.init(chartDom.current, null, {
            renderer: 'svg'
        })

        const option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }
            ]
        };
        const echartsInstance = echarts.getInstanceByDom(chartDom.current);
        console.log('ECharts instance:', echartsInstance);

        option && myChart.setOption(option);
        const xAxisData = myChart.getOption().xAxis[0].data;
        const svg = chartDom.current.querySelector('svg');
        myChart.on('finished', (params: any) => {
            if (clicked) {
                setWrapper(svg, xAxisData, `http://some-domain/${myChart.getId()}`, "fill", isLastComponent)
                setIsClicked(false)

            }
        })


    }, [clicked]);


    return <div ref={chartDom} style={{width: '100%', height: '400px'}}/>;
};



export default BarChart;
