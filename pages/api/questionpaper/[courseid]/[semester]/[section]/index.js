import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
const { PrismaClient } = require('@prisma/client')

// export default withApiAuthRequired(async function SecretRoute(req, res) {
export default async function SecretRoute(req, res) {
    const { QuestionPaper, Question } = new PrismaClient()

    if (req.method === 'GET') {
        // get url path
        const { query: { courseid, semester, section } } = req
        console.log(courseid.toString(), semester.toString(), section)
        const questionpapers = await QuestionPaper.findMany({
            select: {
                id: true,
                course_id: true,
                semester: true,
                section: true,
                question: true,
            },
            where: {
                course_id: courseid.toString(),
                semester: semester.toString(),
                section: parseInt(section),
            }
        })
        res.json({ questionpapers });
    }
    if (req.method === 'POST') {
        const questionpapers = QuestionPaper.create({
            data: {
                course_id: 'CSE200',
                semester: 'summer22',
                section: 2,
                uniqueId: 'CSE200summer222',
                // question: {
                //     create: [
                //         {
                //             uniqueId: 'CS22',
                //             question: 'What is the capital of India?',
                //             marks: 10,
                //             co: 1,
                //         },
                //     ],
                // },

            }
        })
        res.json({ questionpapers });
        // res.status(200).json({ message: 'Success' });
    }
    else {
        res.status(405).end();
    }
};
// });