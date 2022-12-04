const { PrismaClient, prisma } = require('@prisma/client')
export default async function SecretRoute(req, res) {
    const { User, Post } = new PrismaClient()
    // if (req.method === 'GET') {
    //     const user = await User.findMany({
    //         select: {
    //             name: true,
    //             // student_id: true,
    //             id: true,
    //             // title: true,
    //             // author: true
    //             posts: true,
    //         },
    //         // where: {
    //         //     authorId: 6,
    //         // }
    //     })
    //     // const user = await User.findMany()
    //     console.log(user)
    //     // PrismaClient.disconnect()
    //     res.json({ user });
    // }
    if (req.method === 'GET') {
        const user = await Post.findMany({
            select: {
                // name: true,
                // id: true,
                title: true,
                // author: true
                // posts: true,
            },
            where: {
                author: {
                    id: 6
                }
            }
        })
        // const user = await User.findMany()
        console.log(user)
        // PrismaClient.disconnect()
        res.json({ user });
    }
    if (req.method === 'POST') {
        const user = await User.create({
            data: {
                name: "test1",
                posts: {
                    create: {
                        title: "test1",
                    }
                }
            }
        })
        // const user = await User.findMany()
        console.log(user)
        res.json({ user });
    }
};