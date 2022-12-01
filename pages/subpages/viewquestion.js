
import styles from '../../styles/QuestionBank.module.css'
export const getStaticProps = async (context) => {
    const res = await fetch('http://localhost:3000/api/questionpaper')
    const questionpapers = await res.json()
    return {
        props: {
            questionpapers,
        }
    }
}
// add default props
const Viewquestion = ({ questionpapers }) => {
    console.log(questionpapers.questionpapers)
    return (
        <div>
            <h3 className={styles.alignCenter}>Question Papers</h3>
            <div >
                {
                    questionpapers.questionpapers.map((questionpaper, index) => (

                        <div className={styles.qContainer} key={index}>
                            {/* {console.log(questionpaper.index.id)} */}
                            <h3 className={styles.center}>{questionpaper.course_id}</h3>
                            <p className={styles.center}>Semester :{questionpaper.semester} </p>
                            <p className={styles.center}> Section :{questionpaper.section}</p>

                            {
                                // map through question array
                                questionpaper.question.map((question, index) => (
                                    <div className={styles.largeFont} key={index}>
                                        <p className={styles.flex}>{question.question} <span className={styles.alignRight}>marks:{question.marks} CO:{question.co}</span></p>
                                        {/* <p>{question.marks}</p>
                                        <p>{question.co}</p> */}
                                    </div>
                                ))
                            }
                            {/* <br></br> */}
                        </div>
                    ))

                }
            </div>
        </div>

    )
}
export default Viewquestion