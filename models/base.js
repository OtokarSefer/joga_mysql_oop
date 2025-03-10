const conn = require('../utils/db')

class BaseSQLModel {
    constructor(tableName) {
        this.tableName = tableName;
    }

    executeQuery(query, params) {
        return new Promise((resolve, reject) => {
            conn.query(query, params, (err, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results)
                }
            })
        })
    }

    async findAll() {
        const query = `SELECT * FROM ${this.tableName}`;
        const results = await this.executeQuery(query);
        return results;
    }

    async findById(id) {
        const query = `SELECT * FROM ${this.tableName} WHERE id = ?`;
        const results = await this.executeQuery(query, [id]);
        return results[0];
    }

    async findOne(where, value) {
        const query = `SELECT * FROM ${this.tableName} WHERE ${where} = ?`;
        const result = await this.executeQuery(query, [where, value])
        return result[0];
    }

    async create(data) {
        const query = `INSERT INTO ${this.tableName} SET ?`;
        const result = await this.executeQuery(query, data);
        return result.insertId;
    }

    async update(id, data) {
        const query = `UPDATE ${this.tableName} SET ? WHERE id = ?`;
        const result = await this.executeQuery(query, [data, id]);
        return result.affectedRows;
    }

    async delete(id) {
        const query = `DELETE FROM ${this.tableName} WHERE id = ?`;
        const result = await this.executeQuery(query, [id]);
        return result.affectedRows
    }

    async findMany(were, value) {
        const query = `SELECT * FROM ${this.tableName} WHERE ${where} = "${value}"`;
        const results = await this.executeQuery(query, [where, value])
    }
}
