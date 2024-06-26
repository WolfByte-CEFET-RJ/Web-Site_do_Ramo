const knex = require('../database');
const { v4 } = require('uuid');
const crewService = require('./crewService');

module.exports = {
	async index() {
		const awards = await knex('awards')
			.select('id', 'name', 'placing', 'year', 'crew_id')
			.orderBy([{ column: 'created_at', order: 'desc' }]);

		return awards;
	},

	async getAward(id) {
		const award = await knex('awards')
			.select('id', 'name', 'placing', 'year', 'crew_id')
			.where({ id })
			.first();

		return award;
	},

	async getByCrewId(crewId) {
		const awards = await knex('awards')
			.select('id', 'name', 'placing', 'year', 'crew_id')
			.where({ crew_id: crewId })
			.orderBy([{ column: 'created_at', order: 'desc' }]);

		return awards;
	},

	async create(name, placing, year, crew_id) {

		const crew = await crewService.getCrew(crew_id);

		if (!crew) {
			throw new Error('Equipe não existe!');
		}

		await knex('awards').insert({
			id: v4(),
			name,
			placing,
			year,
			crew_id
		});

		return { message: 'Prêmio Cadastrado!' };
	},

	async update(id, award) {
		let Award = await knex('awards').where({ id }).first();
		if (!Award) {
			throw new Error('Prêmio não existe!');
		}

		await knex('awards').where({ id }).update(award); //trocar o timestamp do updated_at
		return { message: 'Prêmio atualizado!' };
	},

	async delete(id) {
		let Award = await knex('awards').where({ id }).first();
		if (!Award) {
			throw new Error('Prêmio não existe!');
		}

		let confirmation = await knex('awards').where({ id }).delete();
		if (confirmation > 1) {
			return { message: 'Prêmios foram deletados' };
		}

		return { message: 'Prêmio foi deletado' };
	},

};