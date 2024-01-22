import {ReactNode} from "react";

export type ChildrenComponent = {
    children: ReactNode
}
export type ChartBarProps = {
    clicked: boolean
    setIsClicked: (isClicked: boolean) => void
    isLastComponent: boolean
}

export type ChartProps = {
    data: number
} & ChartBarProps

export type MapBars = {
    setMapParams: (name: string) => void
}& ChartBarProps

export type BarsProps = {
    setParams: (params: any) => void;
}&ChartBarProps