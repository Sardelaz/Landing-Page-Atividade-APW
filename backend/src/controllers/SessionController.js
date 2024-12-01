import connection from "../database/connection.js"

export default {
    // Criar uma sessão
    async create(request, response) {
        const { id } = request.body;

        const user = await connection('users')
        .where('id', id)
        .select('name')
        .first();

        // Se der erro retornar a seguinte mensagem
        if(!user){
            return response.status(400).json({error: 'Nenhum Usúario encontrado com esse Id'});
        }
        
        return response.json(user)
    }
}