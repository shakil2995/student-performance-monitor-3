import Search from '../../components/Search';
import styles from '../../styles/QuestionBank.module.css'
import style from '../../styles/co.module.css'
import CourseOutline from '../../components/CourseOutline';
const Viewoutline = ({ children }) => {
    return (<>
        <div>
            <h1>Outline</h1>
            <CourseOutline />
        </div>
    </>
    )
}
export default Viewoutline