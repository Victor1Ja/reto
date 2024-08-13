class AccountService {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }

    async getAccountDetails(id) {
        return this.accountRepository.findById(id);
    }

    async getAllAccounts() {
        return this.accountRepository.findAll();
    }

    async createAccount(ownerName, balance) {
        const account = new Account(null, ownerName, balance);
        return this.accountRepository.insert(account);
    }

    async updateAccount(id, ownerName, balance) {
        const account = new Account(id, ownerName, balance);
        await this.accountRepository.update(account);
    }

    async deleteAccount(id) {
        await this.accountRepository.delete(id);
    }
}

module.exports = AccountService;
