import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
const { PrismaClient } = require('@prisma/client')

// export default withApiAuthRequired(async function SecretRoute(req, res) {
export default async function SecretRoute(req, res) {
    const { QuestionPaper, Question } = new PrismaClient()

    if (req.method === 'GET') {
        // get url path
        const { query: { courseid } } = req
        console.log(courseid.toString())
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
                question: {
                    create: {
                        "uniqueId": "uid",
                        "question": "q1",
                        "marks": 5,
                        "co": 1
                    }
                }

            }
        })
        res.json({ questionpapers });
    }
    else {
        res.status(405).end();
    }
};
// });