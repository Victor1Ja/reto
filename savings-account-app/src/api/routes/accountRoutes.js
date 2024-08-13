const express = require('express');
const AccountService = require('../../application/service/AccountService');
const AccountRepositoryPostgres = require('../../infrastructure/repository/AccountRepositoryPostgres');
const AccountController = require('../controller/AccountController');

const router = express.Router();
const accountRepository = new AccountRepositoryPostgres();
const accountService = new AccountService(accountRepository);
const accountController = new AccountController(accountService);

router.get('/accounts/:id', (req, res) => accountController.getAccount(req, res));
router.get('/accounts', (req, res) => accountController.getAllAccounts(req, res));
router.post('/accounts', (req, res) => accountController.createAccount(req, res));
router.put('/accounts/:id', (req, res) => accountController.updateAccount(req, res));
router.delete('/accounts/:id', (req, res) => accountController.deleteAccount(req, res));

module.exports = router;
