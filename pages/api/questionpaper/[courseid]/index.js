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
        const { course_id, semester, section, question } = params.req.body;
        const questionExist = await QuestionPaper.findUnique({
            where: {
                // course_id: course_id,
                // semester: semester,
                id: section,
            },
            select: {
                course_id: true,
                semester: true,
                section: true,
                question: true,
            }
        });
        res.json({ questionExist });
    }
    else {
        res.status(405).end();
    }
};
// });