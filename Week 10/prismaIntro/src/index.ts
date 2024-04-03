import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


/* ********* inserting into users ***************   */ 

// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//     const res = await prisma.user.create({
//      data: {
//         email: username,
//         password,
//         firstName,
//         lastName
//      }, 
//      select: {
//         id: true,
//         password: true 
//      },
//     })
//     console.log(res);
// }

// insertUser("rishu@gmail.com", "12345", "Rishu", "Kumar");



/* ************************ Updating users *********** */

// interface UpdateParams {
//     firstName: string;
//     lastName: string
// }

// async function updateUser(username: string, {
//     firstName,
//     lastName
// }: UpdateParams) {
//     const res = await prisma.user.update({
//         where: {
//             email: username
//         },
//         data: {
//             firstName,
//             lastName
//         }
//     })
//     console.log(res);
// }

// updateUser("rishu@gmail.com", {
//     firstName: "Rishuu",
//     lastName: "Kumar"
// });


/* *******************  Getting User *********** */

async function getuser(username: string) {
    const res = await prisma.user.findFirst({
        where: {
            email: username,
        }
    })
    console.log(res);
}

getuser("rishu@gmail.com");