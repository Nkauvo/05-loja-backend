let categorias = [
    { id:1, nome: "Temakis"},
    { id:2, nome: "Sushi"},
    { id:3, nome: "Bebidas"},
    { id:4, nome: "Sobremesa"}
];

let produtos = [
    {
        categoriaId: 1,
        nome: "Temaki completo",
        descrição: "Temaki com salmão",
        preco: 22.90,
        imagem: "https://static.itdg.com.br/images/640-400/4dc0be09b735235b391d83a90b59343a/324513-original.jpg"
    },
    {
        categoriaId: 2,
        nome: "Combinado 20 peças",
        descrição: "Combinado com 20 peças variadas de sushi e sashimi",
        preco: 85.00,
        imagem: "https://imagens.jotaja.com/produtos/c71b79fd-2f41-485e-91b2-6c7b0bfe170f.jpg"
    },
    {
        categoriaId: 3,
        nome: "Coca-Cola",
        descrição: "Refrigerante coca-cola 350ml",
        preco: 7.50,
        imagem: "https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/1986-refrigerante-coca-cola-sem-acucar-lata-350ml.20250402124753.jpg?s=58284393c8b32554a8c43a978fbdb823"
    }
];

module.exports = { categorias, produtos };