import knex from 'knex';

const pg = knex({
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      DB_SSL: process.env.DB_SSL ? { rejectUnauthorized: false } : false,
    }
  })

  pg.raw('SELECT 1 as result')
  .then((result) => {
    console.log('DB Connection successful:', result.rows[0].result);
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  })
  .finally(() => {
    // Close the Knex connection
    pg.destroy();
  });

  export default pg;