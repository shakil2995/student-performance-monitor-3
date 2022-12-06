import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
const { PrismaClient } = require('@prisma/client')
// export default withApiAuthRequired(async function SecretRoute(req, res) {
export default async function StudentInfo(req, res) {
    const { ObeStudent } = new PrismaClient()
    if (req.method === 'GET') {
        const students = await ObeStudent.findMany({
            select: {
                student_id: true,
                student_name: true,
                courseID: true,
                section: true,
                semester: true,
                total: true,
                CO1: true,
                CO2: true,
                CO3: true,
                CO4: true,
                grade: true,
                // _count: true
            },
            // where: {
            //     course_id: 1,
            // }
        })
        res.json({ students });
    }
    else {
        res.status(405).end();
    }
};
// });