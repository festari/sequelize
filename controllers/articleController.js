const { Article } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const articles = await Article.findAll();
  res.json(articles);
}

// Display the specified resource.
async function show(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const article = await Article.create({
    title: req.body.title,
    content: req.body.content,
  });
  res.json(article);
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
