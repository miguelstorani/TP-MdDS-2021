import { Sequelize } from 'sequelize';

/**
 * Database connection configuration
 *  Environment variables:
 *      - POSTGRES_HOST : url to the postgres host (default -> localhost)
 *      - POSTGRES_USER : database user (default -> postgres)
 *      - POSTGRES_PASSWORD: user password (default -> supersecurepassword)
 *      - POSTGRES_DATABASE: database to connect with (default -> cmit)
 */

const host = process.env.POSTGRES_HOST ? process.env.POSTGRES_HOST : 'localhost';
const database_name = process.env.POSTGRES_DATABASE ? process.env.POSTGRES_DATABASE : 'cmit';
const user = process.env.POSTGRES_USER ? process.env.POSTGRES_USER : 'postgres';
const password = process.env.POSTGRES_PASSWORD ? process.env.POSTGRES_PASSWORD : 'supersecurepassword';

const database = new Sequelize(
    database_name,
    user,
    password,
    {
        host: host,
        port: 5432,
        dialect: 'postgres'
    }
  );

  database.authenticate().then(
      (e) => {console.log(`Database authentication success! now connected to ${database_name} on ${host}:5432 with user: ${user}`);}
  ).catch(
      (e) => {console.log(`Error trying to connect to database: ${database_name} on ${host}:5432 with user: ${user}.\n\nError Details:\n${e}`)}
  )
  
  export default database;