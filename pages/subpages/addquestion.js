import { useFormik } from 'formik'
import styles from '../../styles/QuestionBank.module.css'
const Addquestion = ({ children }) => {
    const formik = useFormik({

        initialValues: {
            course_id: '',
            semester: '',
            section: '',
            question: [],
            submit: 'Submit',
        },
        onSubmit: values => {
            formik.values.submit = 'Submitted'
            console.log(values);
        },

    })
    return (
        <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
            {/* create a form from formik data */}
            <div className={styles.courseField}>
                Course ID :<input className={styles.formItem} placeholder="Course ID" type="text" required name="course_id" onChange={formik.handleChange} value={formik.values.course_id} />
                Semester :<input className={styles.formItem} placeholder="Semester" type="text" required name="semester" onChange={formik.handleChange} value={formik.values.semester} />
                Section :<input className={styles.formItem} placeholder="Section" type="text" required name="section" onChange={formik.handleChange} value={formik.values.section} />
                Question :<input className={styles.formItem} placeholder="Question" type="text" required name="question" onChange={formik.handleChange} value={formik.values.question} />


            </div>
            <button className={styles.formButton} type="submit">{formik.values.submit}</button>
        </form>
    );

}
export default Addquestion