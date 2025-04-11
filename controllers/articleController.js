const { Article, User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const articles = await Article.findAll({
    include: [
      {
        model: User,
        attributes: ["firstname", "lastname", "email"],
      },
    ],
  });
  res.json(articles);
}

// Display the specified resource.
async function show(req, res) {
  const article = await Article.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ["firstname", "lastname", "email"],
      },
    ],
  });
  if (!article) {
    return res.status(404).json({ error: "Artículo no encontrado" });
  }
  res.json(article);
}

// Store a newly created resource in storage.
async function store(req, res) {
  const article = await Article.create({
    title: req.body.title,
    content: req.body.content,
    userId: req.body.userId,
  });
  res.status(201).json(article);
}

// Update the specified resource in storage.
async function update(req, res) {
  const article = await Article.findByPk(req.params.id);
  if (!article) {
    return res.status(404).json({ error: "Artículo no encontrado" });
  }
  await article.update({
    title: req.body.title,
    content: req.body.content,
    userId: req.body.userId,
  });
  res.json(article);
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const article = await Article.findByPk(req.params.id);
  if (!article) {
    return res.status(404).json({ error: "Artículo no encontrado" });
  }
  await article.destroy();
  res.status(204).send();
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
