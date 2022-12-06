import Search from '../../components/Search';
import styles from '../../styles/QuestionBank.module.css'
import style from '../../styles/co.module.css'
import CourseOutline from '../../components/CourseOutline';

export const getStaticProps = async (context) => {
    const res = await fetch('http://localhost:3000/api/outline')
    const questionpapers = await res.json()
    return {
        props: {
            questionpapers,
        }
    }
}


const Viewoutline = ({ questionpapers }) => {
    return (<>
        <div>
            <h1>Outline</h1>
            <CourseOutline props={questionpapers} />
        </div>
    </>
    )
}
export default Viewoutline