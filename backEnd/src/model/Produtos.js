import mongoose from "mongoose";

const ProdutosSchema = new mongoose.Schema(
  {
    id: { type: Number, },
    nome: {
      type: String,
      required: [true, "O Nome do produto é obrigatório"]
    },
    descricao: {
      type: String,
      required: [true, "A descricao é obrigatória"],
    },
    quantidade: {
      type: Number,
      min: [0, "A quantidade:{VALUE} é a baixo do permitido, revise e redigite a quantidade correta!"],
      max: [1000, "A quantidade:{VALUE} é acima do permitido, revise e redigite a quantidade de paginas!"],
      required: [true, "A Quantidade a ser adicionada é Obrigatoria"]
    },
    preco: {
      type: Number,
      required: [true, "Valor do produto é obrigatório"]
    }
  }
);

const Produtos = mongoose.model("Produtos", ProdutosSchema);

export default Produtos;