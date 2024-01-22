import * as echarts from "echarts";

export const multiplyArray = (arr: number[], multiplier: number) => {
    const shuffledArray = arr.slice();
    const compareRandom = () => Math.random() - 0.5;
    shuffledArray.sort(compareRandom);
    return multiplier === 0 ? shuffledArray : shuffledArray.map((value) => value * multiplier);
};

export const setWrapper = (
    svg:  SVGSVGElement,
    xAxisData: any[],
    rootPath: string,
    attribute: string,
    isLastComponent: boolean) => {
    try {

        const paths = svg.querySelectorAll(`path[${attribute}]:not([${attribute}="none"])`);
        paths.forEach((path, index) => {
            if (!path.parentNode || path.parentNode.nodeName !== 'a') {
                const a = document.createElementNS('http://www.w3.org/2000/svg', 'a');
                a.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${rootPath}/${xAxisData[index]}`);
                path.parentNode.replaceChild(a, path);
                a.appendChild(path);
            }
        });
    } catch (error) {
        console.log(error, " Error")
    }
    if (isLastComponent) {
        window.print();
    }

}