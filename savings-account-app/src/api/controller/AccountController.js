class AccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }

    async getAccount(req, res) {
        const id = req.params.id;
        const account = await this.accountService.getAccountDetails(id);
        if (account) {
            res.json(account);
        } else {
            res.status(404).send('Account not found');
        }
    }

    async getAllAccounts(req, res) {
        const accounts = await this.accountService.getAllAccounts();
        res.json(accounts);
    }

    async createAccount(req, res) {
        const { ownerName, balance } = req.body;
        const account = await this.accountService.createAccount(ownerName, balance);
        res.status(201).json(account);
    }

    async updateAccount(req, res) {
        const id = req.params.id;
        const { ownerName, balance } = req.body;
        await this.accountService.updateAccount(id, ownerName, balance);
        res.status(204).send();
    }

    async deleteAccount(req, res) {
        const id = req.params.id;
        await this.accountService.deleteAccount(id);
        res.status(204).send();
    }
}

module.exports = AccountController;
