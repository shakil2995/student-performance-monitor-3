import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
const { PrismaClient } = require('@prisma/client')
// export default withApiAuthRequired(async function SecretRoute(req, res) {
export default async function SecretRoute(req, res) {
    const { CourseOutline } = new PrismaClient()
    if (req.method === 'GET') {
        const courseoutline = await CourseOutline.findMany({
            select: {
                id: true,
                course: true,
                faculty: true,
                objectives: true,
                policy: true,
                outcome: true,
                schedule: true,
                resource: true,
                // _count: true
            },
            // where: {
            //     course_id: 1,
            // }
        })
        res.json({ courseoutline });
    }
    // if (req.method === 'POST') {
    //     const  courseoutline = await  CourseOutline.create({
    //         data: {
    //             uniqueId: 'CSE200summer222',
    //             course_id: 'CSE200',
    //             semester: 'summer22',
    //             section: 2,
    //             question: {
    //                 createMany: {
    //                     data: [
    //                         {
    //                             question: "q1",
    //                             marks: 5,
    //                             co: 1
    //                         },
    //                         {
    //                             question: "q2",
    //                             marks: 6,
    //                             co: 2
    //                         },
    //                     ]
    //                 }
    //             }

    //         }
    //     })
    //     res.json({  courseoutline });
    // }
};
// });

// if (req.method === 'POST') {
//     let bodyValues = req.body
//     // console.log(bodyValues.course_id)
//     let course_id = bodyValues.course_id
//     let semester = bodyValues.semester
//     let section = parseInt(bodyValues.section)
//     let uniqueId = course_id + semester + section
//     let question = bodyValues.question
//     // console.log(question)
//     const newQuestions = bodyValues.questions.data.map((question) => {
//         return {
//             question: question.question,
//             marks: parseInt(question.marks),
//             co: parseInt(question.co)
//         }
//     })
//     const questionpapers = await QuestionPaper.create({
//         data: {
//             uniqueId: uniqueId,
//             course_id: course_id,
//             semester: semester,
//             section: section,
//             question: {
//                 createMany: {
//                     data: newQuestions
//                 }
//             }
//         }
//     })
//     res.json({ bodyValues });
// }