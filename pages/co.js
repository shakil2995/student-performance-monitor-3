import styles from '../styles/co.module.css'
import { useFormik } from 'formik'
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
const Co = ({ studentData }) => {
    const searchStudent = useFormik({
        initialValues: {
            student_id: '',
            submit: 'Search',
        },
        onSubmit: values => {
            console.log(searchStudent.values);
        },
    })


    return (<>
        <form onSubmit={searchStudent.handleSubmit} className={styles.formContainer}>
            <div className={styles.courseField}>
                Student ID :<input className={styles.formItem} placeholder="Student ID" type="text" required name="student_id" onChange={searchStudent.handleChange} value={searchStudent.values.student_id} />
            </div>

            <button className={styles.formButton} type="submit">{searchStudent.values.submit}</button>
        </form>
        <div className={styles.container}>
            <RadarChart props={studentData} />
        </div>
    </>


    )
}
export default Co