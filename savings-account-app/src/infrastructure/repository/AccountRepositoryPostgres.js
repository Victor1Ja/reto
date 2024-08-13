const AccountRepository = require('../../domain/repository/AccountRepository');
const Account = require('../../domain/model/Account');
const db = require('../database/postgresql');

class AccountRepositoryPostgres extends AccountRepository {
    async findById(id) {
        const result = await db.query('SELECT * FROM accounts WHERE id = $1 AND is_deleted = FALSE', [id]);
        const row = result.rows[0];
        if (row) {
            return new Account(row.id, row.owner_name, row.balance);
        }
        return null;
    }

    async findAll() {
        const result = await db.query('SELECT * FROM accounts WHERE is_deleted = FALSE');
        return result.rows.map(row => new Account(row.id, row.owner_name, row.balance));
    }

    async insert(account) {
        const result = await db.query(
            'INSERT INTO accounts (owner_name, balance) VALUES ($1, $2) RETURNING *',
            [account.ownerName, account.balance]
        );
        const row = result.rows[0];
        return new Account(row.id, row.owner_name, row.balance);
    }

    async update(account) {
        await db.query(
            'UPDATE accounts SET owner_name = $1, balance = $2 WHERE id = $3 AND is_deleted = FALSE',
            [account.ownerName, account.balance, account.id]
        );
    }

    async delete(id) {
        await db.query('UPDATE accounts SET is_deleted = TRUE WHERE id = $1', [id]);
    }
}

module.exports = AccountRepositoryPostgres;
