const Article = require('../models/articles')

const getAllArticles = (req, res) => {
    res.json(Article.getAllArticles())
}

const getArticleById = (req, res) => {
    const article = Article.getArticle(parseInt(req.params.id))
    if (!article) return res.status(404).json({ error: 'Article not found' })
    res.json(article)
}

const createArticle = (req, res) => {
    const { title, content } = req.body
    if (!title || !content) return res.status(400).json({ error: 'Title and content required' })
    
    const newArticle = Article.createArticle(title, content)
    res.status(201).location(`/api/articles/${newArticle.id}`).end()
}

const updateArticle = (req, res) => {
    const id = parseInt(req.params.id)
    const updatedArticle = Article.updateArticle(id, req.body)
    
    if (!updatedArticle) return res.status(404).json({ error: 'Article not found' })
    res.json(updatedArticle)
}

const deleteArticle = (req, res) => {
    const id = parseInt(req.params.id)
    const success = Article.deleteArticle(id)
    
    if (!success) return res.status(404).json({ error: 'Article not found' })
    res.status(204).end() 
}

module.exports = { 
    getAllArticles, 
    getArticleById, 
    createArticle, 
    updateArticle, 
    deleteArticle 
}

