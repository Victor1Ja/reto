const Search = require('../models/search');

class SearchRepository {
  async addSearchTerm(term) {
    return await Search.create({ term });
  }

  async getSearchHistory() {
    return await Search.findAll();
  }
}

module.exports = new SearchRepository();
