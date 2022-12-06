import Search from '../../components/Search';
import styles from '../../styles/QuestionBank.module.css'
import style from '../../styles/co.module.css'
import CourseOutline from '../../components/CourseOutline';

export const getStaticProps = async (context) => {
    const res = await fetch('http://localhost:3000/api/outline')
    const outlines = await res.json()
    return {
        props: {
            outlines,
        }
    }
}
const Viewoutline = ({ outlines }) => {
    // console.log(outlines.courseoutline);
    return (<>
        {
            outlines.courseoutline.map((outline, index) => (
                <div key={index}>
                    <h3 className={styles.topCard}>Outlines</h3>
                    <CourseOutline props={outline} />
                </div>
            ))

        }
    </>
    )
}
export default Viewoutline