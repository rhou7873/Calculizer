import { useState } from 'react';
import { COLORS } from '../Assets/Colors.js';

// React Bootstrap
 import ButtonGroup from 'react-bootstrap/ButtonGroup';
 import Button from 'react-bootstrap/Button';

 // Chart.js
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

function Graph({ settings, zoomIn, zoomOut }) 
{
    // Functions
    const generateGraphData = (fn, start, end, step) => {
        try {
            let data = [];
            for(let x = start; x <= end; x += step) {
                data.push([x, eval(fn)]);
            }
            return data;
        }
        catch(SyntaxError) {
            return "";
        }
    }
    const generateRiemannSumData = (fn, start, end, sumType, n) => {
        try {
            let data = [];
    
            if(sumType === "left") {
                const barGraphShift = (end - start) / (2 * n);
                let x = start;
                for(let barNum = 0; barNum < n; barNum++) {
                    data.push({ x: x + barGraphShift, y: eval(fn)});
                    x += (end - start) / n;
                }
            }
            else if(sumType === "midpoint") {
                const barGraphShift = (end - start) / (2 * n);
                let x = start + barGraphShift;
                for(let barNum = 0; barNum < n; barNum++) {
                    data.push({ x: x, y: eval(fn)});
                    x += (end - start) / n;
                }
            }
            else if(sumType === "right") {
                const barGraphShift = (end - start) / (2 * n);
                let x = start + 2 * barGraphShift;
                for(let barNum = 0; barNum < n; barNum++) {
                    data.push({ x: x - barGraphShift, y: eval(fn)});
                    x += (end - start) / n;
                }
            }
            else {
                console.log("invalid sum type");
            }
            return data;
        }
        catch(SyntaxError) {
            return "";
        }
    }
    const riemannSum = () => {
        let sum = 0;
        barGraphData.forEach(coordinate => {
            sum += baseWidth * coordinate.y;
        })
        return sum;
    }

    // Constants
    const pointInterval = 0.01;
    const baseWidth = (settings.integralEnd - settings.integralStart) / settings.n; 
    const coordinates = generateGraphData(settings.fn, settings.graphStart, settings.graphEnd, pointInterval);
    const barGraphData = generateRiemannSumData(settings.fn, settings.integralStart, settings.integralEnd, settings.sumType, settings.n);
    const xAxisData = [{x: settings.windowMinX, y: 0}, {x: settings.windowMaxX, y: 0}];
    const yAxisData = [{x: 0, y: settings.windowMinY}, {x: 0, y: settings.windowMaxY}];
    
    // Graph data and options
    const data = {  
        datasets: [
            { // Graph of f(x)
                type: "scatter",
                label: "Function",
                data: coordinates,
                borderColor: COLORS.orange,
                borderWidth: 2,
                showLine: true,
                pointRadius: 0,
                pointHitRadius: 0,
                backgroundColor: COLORS.orangeHalf,
                fill: false
            },
            { // Bars to calculate Riemann Sum
                type: "bar",
                label: "Riemann Sums",
                data: barGraphData,
                backgroundColor: COLORS.orangeHalf,
                borderWidth: 0,
                barThickness: "flex",
                barPercentage: 1.0,
                categoryPercentage: 1.0,
            },
            { // Used to bold X-Axis
                type: "line",
                label: "x-axis",
                data: xAxisData,
                pointRadius: 0,
                borderColor: "black",
                borderWidth: 1
            },
            { // Used to bold Y-Axis
                type: "line",
                label: "y-axis",
                data: yAxisData,
                pointRadius: 0,
                borderColor: "black",
                borderWidth: 1
            }
        ]
    }
    const graphOptions = {
        animation: false,
        spanGaps: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        },
        scales: {
            x: {
                offset: false,
                grid: {
                    offset: false,
                    display: true
                },
                min: settings.windowMinX,
                max: settings.windowMaxX
            }, 
            y: {
                grid: {
                    display: true
                },
                min: settings.windowMinY,
                max: settings.windowMaxY
            }
        }
    }
    return (
        <>
            <ButtonGroup>
                <Button onClick={() => zoomOut()}>-</Button>
                <Button onClick={() => zoomIn()}>+</Button>
            </ButtonGroup>
            <Chart data={data} options={graphOptions} />
        </>
    );
}

export default Graph
