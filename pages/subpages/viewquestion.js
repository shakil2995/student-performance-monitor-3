
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
const Viewquestion = ({ questionpapers }) => {
    console.log(questionpapers.questionpapers)
    return (
        <div>
            <h3>Question Papers</h3>
            {
                questionpapers.questionpapers.map((questionpaper, index) => (

                    <div className={styles.card} key={index}>
                        {/* {console.log(questionpaper.index.id)} */}
                        <h3>{questionpaper.course_id}</h3>
                        <p>Semester :{questionpaper.semester} </p>
                        <p> Section :{questionpaper.section}</p>
                        <p></p>
                        <p>{
                            // map through question array
                            questionpaper.question.map((question, index) => (
                                <div key={index}>
                                    <h3>{question.question}</h3>
                                    <p>{question.marks}</p>
                                    <p>{question.co}</p>
                                </div>
                            ))
                        }</p>
                    </div>
                ))

            }
        </div>

    )
}
export default Viewquestion