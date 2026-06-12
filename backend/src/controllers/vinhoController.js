const Vinho = require('../models/Vinho');

async function listarVinhos(req, res) {
  try {
    // No Sequelize, usamos findAll e especificamos a ordenação em um array
    const vinhos = await Vinho.findAll({ order: [['createdAt', 'DESC']] });
    return res.json(vinhos);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao listar vinhos.', erro: error.message });
  }
}

async function buscarVinhoPorId(req, res) {
  try {
    // No Sequelize, usamos findByPk (Find by Primary Key)
    const vinho = await Vinho.findByPk(req.params.id);

    if (!vinho) {
      return res.status(404).json({ mensagem: 'Vinho não encontrado.' });
    }

    return res.json(vinho);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao buscar vinho.' });
  }
}

async function criarVinho(req, res) {
  try {
    const { nome, descricao, nota, foto } = req.body;
    const vinho = await Vinho.create({ nome, descricao, nota, foto });
    return res.status(201).json(vinho);
  } catch (error) {
    return res.status(400).json({ mensagem: 'Erro ao criar vinho.', erro: error.message });
  }
}

async function atualizarVinho(req, res) {
  try {
    const { nome, descricao, nota, foto } = req.body;
    const { id } = req.params;

    // Busca o vinho primeiro
    const vinho = await Vinho.findByPk(id);

    if (!vinho) {
      return res.status(404).json({ mensagem: 'Vinho não encontrado.' });
    }

    // Atualiza os dados no banco
    await vinho.update({ nome, descricao, nota, foto });

    return res.json(vinho);
  } catch (error) {
    return res.status(400).json({ mensagem: 'Erro ao atualizar vinho.', erro: error.message });
  }
}

async function deletarVinho(req, res) {
  try {
    const { id } = req.params;
    const vinho = await Vinho.findByPk(id);

    if (!vinho) {
      return res.status(404).json({ mensagem: 'Vinho não encontrado.' });
    }

    // Deleta o registro
    await vinho.destroy();

    return res.json({ mensagem: 'Vinho removido com sucesso.' });
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao deletar vinho.' });
  }
}

module.exports = {
  listarVinhos,
  buscarVinhoPorId,
  criarVinho,
  atualizarVinho,
  deletarVinho,
};