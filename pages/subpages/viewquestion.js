
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
    function findVerb(q) {
        let Remembering = 'Choose Define Find How Label List Match Name omit Recall Relate Select Show Spell Tell What When Where Which Who Why';
        let Understanding = 'Compare Contrast Demonstrate Explain Extend Illustrate Infer Interpret Outline Relate Rephrase Show Summarize Translate';
        let Applying = 'Apply Build Choose letruct Develop Experiment Identify Interview Make use of Model Organize Plan Select Solve Utilize';
        let Analyzing = 'Analyze Assume Categorize Classify Conclusion Contrast Discover Dissect Distinguish Divide Examine Function Inference Inspect List Motive Relationships Simplify Survey Take part in Test for Theme';
        let Evaluating = 'Agree Appraise Assess Award Choose Conclude Criteria Criticize Decide Deduct Defend Determine Disprove Estimate Evaluate Explain Importance Influence nterpret J udge Justify Mark Measure Opinion Perceive Prioritize prove Rate Recommend Rule Select Support Value';
        let Creating = 'Adapt Build Cha nge Choose Combine Compile Compose Construct Create Delete Design Develop Discuss Elaborate Estimate Formulate Happen Imagine mprove Invent Make up Maximize Minimize Modify Original Originate Plan predict Propose Solution Solve Suppose Test Theory'
        Remembering = Remembering.toLowerCase().split(' ');
        Understanding = Understanding.toLowerCase().split(' ');
        Applying = Applying.toLowerCase().split(' ');
        Analyzing = Analyzing.toLowerCase().split(' ');
        Evaluating = Evaluating.toLowerCase().split(' ');
        Creating = Creating.toLowerCase().split(' ');
        q = q.toLowerCase();
        if (Remembering.find(w => q.includes(w))) {
            return 'Remembering';
        } else if (Understanding.find(w => q.includes(w))) {
            return 'Understanding';
        }
        else if (Applying.find(w => q.includes(w))) {
            return 'Applying';
        }
        else if (Analyzing.find(w => q.includes(w))) {
            return 'Analyzing';
        }
        else if (Evaluating.find(w => q.includes(w))) {

            return 'Evaluating';
        }
        else if (Creating.find(w => q.includes(w))) {
            return 'Creating';
        }
        else {
            return 'None';
        }
    }

    // console.log(questionpapers.questionpapers)
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
                                        <p className={styles.flex}>{question.question}
                                            <span
                                                className={styles.alignRight}>marks:{question.marks} CO:{question.co} {findVerb(question.question)}</span>
                                        </p>
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