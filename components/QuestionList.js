import questionStyle from '../styles/Question.module.css'
import QuestionItem from './QuestionItem'
const QuestionList = ({ questions }) => {
    return (<>
        <div className={questionStyle.grid}>
            {
                questions.map((question, index) => (
                    <QuestionItem article={question} key={index} />
                ))
            }
        </div>
    </>
    )
}
export default QuestionList