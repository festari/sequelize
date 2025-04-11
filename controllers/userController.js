const { User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const users = await User.findAll();
  res.json(users);
}

// Display the specified resource.
async function show(req, res) {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }
  res.json(user);
}

// Store a newly created resource in storage.
async function store(req, res) {
  const user = await User.create({
    firstname: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  });
  res.status(201).json(user);
}

// Update the specified resource in storage.
async function update(req, res) {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }
  await user.update({
    firstname: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  });
  res.json(user);
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }
  await user.destroy();
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
