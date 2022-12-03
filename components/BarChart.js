// import React from 'react'
import { Bar } from 'react-chartjs-2'
import styles from '../styles/co.module.css'
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
// export const getStaticProps = async (context) => {
//     const res = await fetch('http://localhost:3000/api/student/1531176')
//     const studentData = await res.json()
//     console.log(studentData.students)
//     return {
//         props: {
//             studentData,
//         }
//     }
// }
export const BarChart = ({ studentData }) => {
    // console.log(studentData.students)
    return (
        <div className={styles.bgWhite}>
            <Bar data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }}
                height={400}
                width={400}
                options={{
                    maintainAspectRatio: false,
                }} />
        </div>
    )
}
export default BarChart