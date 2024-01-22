'use client';
import React, {FC, useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {array} from "@/utils/charts/constants";
import {ChartProps} from "@/utils/charts/types";
import {multiplyArray, setWrapper} from "@/utils/charts";

const Chart: FC<ChartProps> = ({data, clicked, setIsClicked, isLastComponent}) => {
    const chartDemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chartDemRef.current !== null && chartDemRef.current !== undefined) {

            const myChart = echarts.init(chartDemRef.current, null, {
                renderer: "svg"
            });

            const option = {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: multiplyArray(array, data),
                        type: 'line',
                        areaStyle: {}
                    }
                ]
            };

            option && myChart.setOption(option);
            const xAxisData = myChart.getOption().xAxis[0].data;
            const svg = chartDemRef.current.querySelector('svg');
            if (clicked) {
                myChart.on('finished', (params: any) => {

                    setWrapper(svg, xAxisData, `http://some-domain/${myChart.getId()}`, "fill", isLastComponent)
                    setIsClicked(false)

                })
            }
        }

    }, [data, clicked]);

    return <div ref={chartDemRef} style={{width: '100%', height: '400px'}}/>;
};

export default Chart;
