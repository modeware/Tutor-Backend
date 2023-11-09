/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//Using Raw SQL just to get better understanding of what is happening
//We can use ORMS in the future.
export function up(knex) {
  return knex.raw(`CREATE TABLE IF NOT EXISTS USERS (
        id UUID,
        email VARCHAR(255), 
        password VARCHAR(255), 
        name VARCHAR(255),
        PRIMARY KEY (email))
        `
    )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.raw(`DROP TABLE IF EXISTS USERS CASCADE`)
};
