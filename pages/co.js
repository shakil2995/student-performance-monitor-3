// import styles from '../styles/co.module.css'
import BarChart from '../components/BarChart';
import RadarChart from '../components/RadarChart';
export const getStaticProps = async (context) => {
    const res = await fetch('http://localhost:3000/api/student/1531176')
    const studentData = await res.json()
    // console.log(studentData.students.student_id)
    return {
        props: {
            studentData,
        }
    }
}
// add default props
const Co = ({ studentData }) => {

    // console.log(studentData.students.student_id)
    return (
        <div>
            {/* <BarChart props={studentData} /> */}
            {/* <BarChart /> */}

            <RadarChart props={studentData} />
        </div>

    )
}
export default Co