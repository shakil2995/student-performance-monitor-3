import { useFormik } from 'formik'
import styles from '../../styles/QuestionBank.module.css'
const Addquestion = ({ children }) => {
    const formik = useFormik({

        initialValues: {
            course_id: '',
            semester: '',
            section: '',
            question: [],
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },

    })
    return (
        <div className={styles.formContainer}>
            {/* create a form from formik data */}
            <div className={styles.courseField}>
                Course ID :<input className={styles.formItem} type="text" name="course_id" onChange={formik.handleChange} value={formik.values.course_id} />
                Semester :<input className={styles.formItem} type="text" name="semester" onChange={formik.handleChange} value={formik.values.semester} />
                Section :<input className={styles.formItem} type="text" name="section" onChange={formik.handleChange} value={formik.values.section} />
                Question :<input className={styles.formItem} type="text" name="question" onChange={formik.handleChange} value={formik.values.question} />
            </div>
            <button className={styles.formButton} type="submit">Submit</button>
        </div>
    );

}
export default Addquestion