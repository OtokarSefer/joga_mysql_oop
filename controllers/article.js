const articleDbModel = require('../models/article')
const articleModel = new articleDbModel;

class articleController {
    constructor() {
        const article = []
    }

    async getAllArticle(req, res){
        const articles = await articleModel.findAll()
        res.status(201).json({articles: articles})
    }
}

module.export = articleController