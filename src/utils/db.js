// const mysql = require('mysql2/promise');
// async function insertData([id,data]) {
//   try {
//     const connection = await mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       password: 'pass_1234@',
//       database: 'code_inbound'
//     });

//     const parsedData = JSON.stringify(data);
//     const query = 'INSERT INTO feedback (data) VALUES (?)(?)';
//     await connection.query(query, id,parsedData);

//     console.log('Data inserted successfully');
//     connection.end();
//   } catch (error) {
//     console.error('Error inserting data:', error);
//   }
// }
