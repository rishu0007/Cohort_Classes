"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
/* ************** Creating a table ***************** */
// const client = new Client({
//   connectionString: "postgresql://postgres:ZPv5lBEV1cRr@localhost/postgres"
// })
// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }
// createUsersTable();
/* ******************* Inserting data without sql injection ******************* */
// async function insertData() {
//     const client = new Client({
//         connectionString: "postgresql://kumarrishu571:ZPv5lBEV1cRr@ep-bold-lab-a1cv05cx.ap-southeast-1.aws.neon.tech/neondb?sslmode=re"
//     });
//     try {
//         await client.connect();
//         const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user2@gmail.com','user_password');";
//         const res = await client.query(insertQuery);
//         console.log('Insertion success: ', res); // output insertion result
//     } catch(err) {
//         console.error('Error during insertion: ', err);
//     } finally {
//         await client.end(); // close the client connection
//     }
// }
// insertData();
/* ************* SQL Injection ********************** */
// async function insertData(username: string, email: string, password: string) {
//     const client = new Client({
//         connectionString: "postgresql://kumarrishu571:ZPv5lBEV1cRr@ep-bold-lab-a1cv05cx.ap-southeast-1.aws.neon.tech/neondb?sslmode=re"
//     });
//     try {
//         await client.connect(); // ensure client connection is established
//         // use parameterized query to prevent SQL injection
//         const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
//         const values = [username, email, password];
//         const res = await client.query(insertQuery, values);
//         console.log('Insertion success: ', res); // output insertion result
//     } catch(err) {
//         console.error('Error during the insertion: ', err);
//     } finally {
//         await client.end(); // close the client connection
//     }
// }
// // Example usage
// insertData('username4', 'username4@example.com', 'passUser4').catch(console.error);
/* ************************* Get user data ************ */
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://kumarrishu571:ZPv5lBEV1cRr@ep-bold-lab-a1cv05cx.ap-southeast-1.aws.neon.tech/neondb?sslmode=re"
        });
        yield client.connect();
        const query = 'SELECT * FROM users WHERE email = $1';
        const result = yield client.query(query, [email]);
        if (result.rows.length > 0) {
            console.log('user found: ', result.rows[0]); // output user data
            return result.rows[0]; // return the user data
        }
        else {
            console.log("No user found with the given email.");
            return null; // return null if no user found
        }
    });
}
getUser('username4@example.com').catch(console.error);
