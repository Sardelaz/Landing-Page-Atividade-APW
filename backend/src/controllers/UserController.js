import connection from '../database/connection.js';
import crypto from "crypto"

export default {
    async index (request, response) {
        const users = await connection('users').select('*');
      
        return response.json(users)
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body

        const id = crypto.randomBytes(4).toString('HEX')
      
        await connection('users').insert({
          id,
          name,
          email,
          whatsapp,
          city,
          uf,
        })
      
        return response.json({ id });
    }
}