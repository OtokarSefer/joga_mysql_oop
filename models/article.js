const BaseSQLModel = require('./base')
class ArticleModel extends BaseSQLModel {
    constructor() {
        super('article')
    }

    async findAll(){
        const article = await super.findAll()
        return articles
    }
}
module.exports = ArticleModel