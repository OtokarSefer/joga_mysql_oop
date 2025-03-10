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

    async getArticleBySlug(req, res){
        const article = await articleModel.findOne(req.params.slug)
        res.status(201).json({article: article})
    }
}

module.export = articleController