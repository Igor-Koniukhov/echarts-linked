'use client';
import React, {FC, useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {usaJson} from "@/utils/charts/constants";
import {MapBars} from "@/utils/charts/types";
import {setWrapper} from "@/utils/charts";

const MapComponent: FC<MapBars> = ({setMapParams, isLastComponent, setIsClicked, clicked}) => {
    const chartDom = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // @ts-ignore
                echarts.registerMap('USA', usaJson, {
                    Alaska: {
                        left: -131,
                        top: 25,
                        width: 15,
                    },
                    Hawaii: {
                        left: -110,
                        top: 28,
                        width: 5,
                    },
                    'Puerto Rico': {
                        left: -76,
                        top: 26,
                        width: 2,
                    },
                });

                const myChart = echarts.init(chartDom.current!, null,{
                    renderer: "svg"
                });
                myChart.showLoading();

                const randomPieSeries = (center: string | number[], radius: number) => {
                    const data = ['A', 'B', 'C', 'D'].map((t) => ({
                        value: Math.round(Math.random() * 100),
                        name: 'Category ' + t,
                    }));

                    return {
                        type: 'pie',
                        coordinateSystem: 'geo',
                        tooltip: {
                            formatter: '{b}: {c} ({d}%)',
                        },
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                        animationDuration: 0,
                        radius,
                        center,
                        data,
                    };
                };

                let option = {
                    geo: {
                        map: 'USA',
                        roam: true,
                        itemStyle: {
                            areaColor: '#e7e8ea',
                        },
                    },
                    tooltip: {},
                    legend: {},
                    series: [
                        randomPieSeries([-86.753504, 33.01077], 15),
                        randomPieSeries([-116.853504, 39.8], 25),
                        randomPieSeries([-99, 31.5], 30),
                        randomPieSeries(
                            +echarts.version.split('.').slice(0, 3).join('') > 540
                                ? 'Maine'
                                : [-69, 45.5],
                            12
                        ),
                    ],
                };

                myChart.hideLoading();
                myChart.on('click', (params: any) => {
                    console.log('Map clicked:', params);
                    setMapParams(params.name)

                });
                myChart.setOption(option);

                const stateNames = usaJson.features.map(feature => feature.properties.name);





                const svg = chartDom.current.querySelector('svg');
                if (clicked) {
                myChart.on('finished', (params: any) => {
                        setWrapper(svg, stateNames, `http://some-domain/${myChart.getId()}`, "fill", isLastComponent)

                });
            }
            } catch (error) {
                console.error('Error fetching USA.json:', error);
            }
        };

        fetchData();
    }, [clicked]);

    return <div ref={chartDom} style={{ width: '100%', height: '400px' }} />;
};

export default MapComponent;
