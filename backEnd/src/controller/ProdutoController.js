import produtos from "../model/Produtos.js"
class ProdutosController {

  static listarTodosProdutos = async (req, res) => {
    try {
      const listaDePordutos = await produtos.find();
      if (!listaDePordutos) {
        res.status(404).json({ message: "Não há produtos cadastrados" });
      }
      res.status(200).json(listaDePordutos);

    } catch (error) {
      res.status(500).json({ message: "Erro Interno do Servidor" })
    }
  }
  static adicionarNovoProduto = async (req, res) => {
    try {
      let novoProduto = new produtos(req.body)
      const produtoCadastrado = await novoProduto.save();
      res.status(200).json(produtoCadastrado);
    } catch (error) {
      res.status(500).json({
        message: "Erro Interno do Servidor Porduto nao pôde ser cadastrado"
      })
    }
  }
}

export default ProdutosController;