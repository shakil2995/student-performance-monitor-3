// import React from 'react'
import { Radar } from 'react-chartjs-2'
// import {
//     Chart as ChartJs,
//     LineElement,
//     BarElement,
//     PointElement,
//     LinearScale,
//     CategoryScale,
// } from 'chart.js'
// ChartJs.register(
//     LineElement,
//     BarElement,
//     PointElement,
//     LinearScale,
//     CategoryScale
// )
import styles from '../styles/co.module.css'

export const RadarChart = (props) => {
    let sData = props.props.students;
    // console.log(sData)
    let co1 = (sData.CO1 / 110) * 100;
    let co2 = (sData.CO2 / 40) * 100;
    let co3 = (sData.CO3 / 50) * 100;
    let co4 = (sData.CO4 / 50) * 100;
    let coTotal = ((co1 + co2 + co3 + co4) / 4);

    let bCo1 = (107 / 110) * 100;
    let bCo2 = (30 / 40) * 100;
    let bCo3 = (48 / 50) * 100;
    let bCo4 = (43 / 50) * 100;
    let bCoTotal = ((bCo1 + bCo2 + bCo3 + bCo4) / 4);
    // console.log(props.props.students)
    return (
        <div>
            <h1 className={styles.title}>CO of {sData.student_name}</h1>
            <div className={styles.bgWhite}>
                <Radar data={{
                    labels: [
                        'CO1',
                        'CO2',
                        'CO3',
                        'CO4',
                        'Semester total',
                        // 'Grade',
                        // 'Average'
                    ],
                    datasets: [{
                        label: `${sData.student_name}`,
                        data: [co1, co2, co3, co4, coTotal],
                        fill: true,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgb(255, 99, 132)',
                        pointBackgroundColor: 'rgb(255, 99, 132)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(255, 99, 132)'
                    },
                    {
                        label: `Top Scorer`,
                        data: [bCo1, bCo2, bCo3, bCo4, bCoTotal],
                        fill: true,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgb(54, 162, 235)',
                        pointBackgroundColor: 'rgb(54, 162, 235)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(54, 162, 235)'
                    }
                    ]
                }}
                    height={600}
                    width={800}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            beginAtZero: true,
                            r: {
                                angleLines: {
                                    display: false
                                },

                                suggestedMin: 0,
                                suggestedMax: 100
                            }
                        }
                    }
                    }
                />
            </div>

        </div>
    )
}
export default RadarChart