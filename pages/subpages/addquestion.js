import { useFormik } from 'formik'
// import QuestionField from '../components/QuestionField'
import styles from '../../styles/QuestionBank.module.css'
const Addquestion = ({ children }) => {
    function addQuestion(params) {
        // console.log(params);
        let arr = []
        for (let i = 1; i <= params; i++) {
            arr.push(<QuestionField
                props={questionDetails}
                numbers={i}

            />)
        }
        return (
            arr
        )

    }
    const courseDetails = useFormik({
        initialValues: {
            course_id: '',
            semester: '',
            section: '',
            uniqueId: '',
            totalQuestions: '',
            submit: 'Submit',
        },
        onSubmit: values => {
            courseDetails.values.submit = 'Submitted'
            let uniqueId = values.course_id + values.semester + values.section
            // console.log(courseDetails.values);
            console.log(questionDetails.values);
        },
    })
    const questionDetails = useFormik({

        initialValues: {
            // uniqueId: courseDetails.values.course_id + courseDetails.values.semester + courseDetails.values.section,
            question: [],
            marks: [],
            co: [],
            submit: 'Submit',
        },
        onSubmit: values => {

            // questionDetails.values.submit = 'Submitted'
            // console.log(questionDetails.values);
        },
    })


    return (
        <form onSubmit={courseDetails.handleSubmit} className={styles.formContainer}>
            <div className={styles.courseField}>
                Course ID :<input className={styles.formItem} placeholder="Course ID" type="text" required name="course_id" onChange={courseDetails.handleChange} value={courseDetails.values.course_id} />
                Semester :<input className={styles.formItem} placeholder="Semester" type="text" required name="semester" onChange={courseDetails.handleChange} value={courseDetails.values.semester} />
                Section :<input className={styles.formItem} placeholder="Section" type="text" required name="section" onChange={courseDetails.handleChange} value={courseDetails.values.section} />
                Unique ID (auto generated):<input className={styles.formItem} placeholder="Unique ID" type="text" required name="uniqueId" onChange={courseDetails.handleChange} value={courseDetails.values.course_id + courseDetails.values.semester + courseDetails.values.section} />
                Total Questions :<input className={styles.formItem} placeholder="Number of Questions" type="number" required name="totalQuestions" min="0" onChange={courseDetails.handleChange} value={courseDetails.values.totalQuestions} />
                {addQuestion(courseDetails.values.totalQuestions)}
            </div>

            <button className={styles.formButton} type="submit">{courseDetails.values.submit}</button>
        </form>
    );

}
export default Addquestion

const QuestionField = (props, i) => {
    let prop = props.props.values
    prop.uniqueId = prop.course_id + prop.semester + prop.section
    // console.log(prop.totalQuestions);
    return (
        <div className={styles.QuestionField} key={i}>
            Question: <textarea className={styles.question} placeholder="Question" type="text-field" required name="question" onChange={props.props.handleChange} value={props.props.values.question[i]} />
            Marks: <input className={styles.questionItem} placeholder="Marks" type="number" required name="marks" onChange={props.props.handleChange} value={props.props.values.marks[i]} />
            Co: <input className={styles.questionItem} placeholder="CO" type="number" required name="co" min="1" max="4" onChange={props.props.handleChange} value={props.props.values.co[i]} />
        </div>

    )
}