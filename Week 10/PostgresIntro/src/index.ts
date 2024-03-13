import { Client } from 'pg'
 
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



/* ************* SQL Injection(inserting data) ********************** */


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

// async function getUser(email: string) {
//     const client = new Client({
//         connectionString: "postgresql://kumarrishu571:ZPv5lBEV1cRr@ep-bold-lab-a1cv05cx.ap-southeast-1.aws.neon.tech/neondb?sslmode=re"
//     });

//     await client.connect();
//     const query = 'SELECT * FROM users WHERE email = $1';
//     const result = await client.query(query, [email]);

//     if(result.rows.length > 0) {
//         console.log('user found: ', result.rows[0]); // output user data
//         return result.rows[0]; // return the user data
//     } else {
//         console.log("No user found with the given email.");
//         return null; // return null if no user found
//     }
// }

// getUser('username4@example.com').catch(console.error);




/* *********** Relationships and Transactions ************ */

async function insertUserAndAddress(
    username: string,
    email: string,
    password: string,
    city: string,
    country: string,
    street: string,
    pincode: string
) {
    const client = new Client({
        connectionString: "postgresql://kumarrishu571:ZPv5lBEV1cRr@ep-bold-lab-a1cv05cx.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
    });

    try {
        await client.connect();

        // start transaction
        await client.query('BEGIN');

        // INSERT USER
        const insertUserText = `
            INSERT INTO users (username, email, password)
            VALUES($1, $2, $3)
            RETURNING id;
        `;

        const userRes = await client.query(insertUserText, [username, email, password]);
        const userId = userRes.rows[0].id;

        // Insert address using the returned user ID
        const insertAddressText = `
            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
            `;

        await client.query(insertAddressText, [userId, city, country, street, pincode]);

        // commit transaction
        await client.query('COMMIT');
        console.log('user and address inserted successfully');
    } catch(err) {
        await client.query('ROLLBACK');
        console.log('Error during transaction, rolled back.', err);
        throw err;
    } finally {
        await client.end(); // close the client connection
    }
}

// Example usage
insertUserAndAddress(
    'rishu',
    'risu@gmail.com',
    'password',
    'Bihar Sharif',
    'India',
    'Kachahari Road',
    '803100'
);

