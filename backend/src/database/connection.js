import knex from 'knex';
import configuration from '../../knexfile.mjs';

const connection = knex(configuration.development);

export default connection;
