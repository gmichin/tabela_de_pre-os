// Definir os grupos de produtos
const gruposProdutos = {
    salgados_5kg: ["Costela 5kg", "Pe 5kg", "Orelha 5kg", "Lombo 5kg", "Lingua 5kg", "Rabo 5kg", "Ponta 5kg", "Paleta 5kg"],
    salgados_10kg: ["Costela 10kg", "Pe 10kg", "Orelha 10kg", "Lombo 10kg", "Lingua 10kg", "Rabo 10kg", "Ponta 10kg", "Paleta 10kg"],
    salgados_20kg: ["Costela 20kg", "Pe 20kg", "Orelha 20kg", "Lombo 20kg", "Lingua 20kg", "Rabo 20kg", "Ponta 20kg", "Paleta 20kg"],
    salames: ["Salame Puro", "Salame Limão", "Salame Azeitona", "Salame Biquinho", "Salame Provolone", "Salame Bacon"],
    defumados: ["Big Bacon"],
    suspiro: ["Suspiro (1kg)", "Suspiro (70g)"],
    torresmos: ["Pururuca 1kg", "Pururcas 60g", "Pururcas 120g", "Torres. Vog Pote 120g", "Torres. Vog Pacote 120g"],
    empanados: ["Chicken Emp. Baita", "File Frango Emp.-pct 1kg", "File Tilapia Emp.-pct 1kg", "Filezinho Frango Baita 700g", "File Emp. PCT 1,5kg Baita", "Tiras Frango Emp.-pct 1kg", "Chicken Queijo Perdigão"],
    congelados: ["Polenta", "Torta de Frango", "Torta de Palmito"],
    embutidos: ["Calabresa Fat Pamplona"]
};

// Adicionar os novos produtos à lista de produtos
const produtos = [
    // Salgados 5kg
    { nome: "Costela 5kg", custo: 14.59, quebra: 6.06 },
    { nome: "Pe 5kg", custo: 3.82, quebra: 3.88 },
    { nome: "Orelha 5kg", custo: 4.32, quebra: 3.89 },
    { nome: "Lombo 5kg", custo: 18.25, quebra: 8.85 },
    { nome: "Lingua 5kg", custo: 7.01, quebra: 7.62 },
    { nome: "Rabo 5kg", custo: 14.82, quebra: 9.06 },
    { nome: "Ponta 5kg", custo: 8.55, quebra: 3.52 },
    { nome: "Paleta 5kg", custo: 15.76, quebra: 5.68 },

    // Salgados 10kg
    { nome: "Costela 10kg", custo: 14.59, quebra: 6 },
    { nome: "Pe 10kg", custo: 3.82, quebra: 2 },
    { nome: "Orelha 10kg", custo: 4.32, quebra: 4 },
    { nome: "Lombo 10kg", custo: 18.25, quebra: 15 },
    { nome: "Lingua 10kg", custo: 7.01, quebra: 15 },
    { nome: "Rabo 10kg", custo: 14.82, quebra: 10 },
    { nome: "Ponta 10kg", custo: 8.55, quebra: 4 },
    { nome: "Paleta 10kg", custo: 15.76, quebra: 10 },

    // Salgados 20kg
    { nome: "Costela 20kg", custo: 14.59, quebra: 6 },
    { nome: "Pe 20kg", custo: 3.82, quebra: 2 },
    { nome: "Orelha 20kg", custo: 4.32, quebra: 4 },
    { nome: "Lombo 20kg", custo: 18.25, quebra: 15 },
    { nome: "Lingua 20kg", custo: 7.01, quebra: 15 },
    { nome: "Rabo 20kg", custo: 14.82, quebra: 10 },
    { nome: "Ponta 20kg", custo: 8.55, quebra: 4 },
    { nome: "Paleta 20kg", custo: 15.76, quebra: 10 },
    
    // Salames
    { nome: "Salame Puro", custo: 34.95, quebra: 0 },
    { nome: "Salame Limão", custo: 34.95, quebra: 0 },
    { nome: "Salame Azeitona", custo: 34.95, quebra: 0 },
    { nome: "Salame Biquinho", custo: 34.95, quebra: 0 },
    { nome: "Salame Provolone", custo: 34.95, quebra: 0 },
    { nome: "Salame Bacon", custo: 34.95, quebra: 0 },
    
    // Defumados
    { nome: "Big Bacon", custo: 27.00, quebra: 0 },
    
    // Suspiro
    { nome: "Suspiro (1kg)", custo: 15.14, quebra: 0 },
    { nome: "Suspiro (70g)", custo: 1.76, quebra: 0 },
    
    // Torresmos
    { nome: "Pururuca 1kg", custo: 24.30, quebra: 0 },
    { nome: "Pururcas 60g", custo: 2.53, quebra: 0 },
    { nome: "Pururcas 120g", custo: 4.06, quebra: 0 },
    { nome: "Torres. Vog Pote 120g", custo: 4.06, quebra: 0 },
    { nome: "Torres. Vog Pacote 120g", custo: 19.50, quebra: 0 },
    
    // Empanados
    { nome: "Chicken Emp. Baita", custo: 12.49, quebra: 0 },
    { nome: "File Frango Emp.-pct 1kg", custo: 20.57, quebra: 0 },
    { nome: "File Tilapia Emp.-pct 1kg", custo: 42.43, quebra: 0 },
    { nome: "Filezinho Frango Baita 700g", custo: 19.99, quebra: 0 },
    { nome: "File Emp. PCT 1,5kg Baita", custo: 20.22, quebra: 0 },
    { nome: "Tiras Frango Emp.-pct 1kg", custo: 13.69, quebra: 0 },
    { nome: "Chicken Queijo Perdigão", custo: 8.83, quebra: 0 },
    
    // Congelados
    { nome: "Polenta", custo: 7.94, quebra: 0 },
    { nome: "Torta de Frango", custo: 9.34, quebra: 0 },
    { nome: "Torta de Palmito", custo: 9.72, quebra: 0 },
    
    // Embutidos
    { nome: "Calabresa Fat Pamplona", custo: 26.82, quebra: 0 }
];

// Configurações de frete, quebra, produção e ICMS para cada produto
const configProdutos = {
    //Salgados 5kg
    "Costela 5kg": { producao: 2.40, icms: 7 },
    "Pe 5kg": { producao: 2.40, icms: 7 },
    "Orelha 5kg": { producao: 2.40, icms: 7 },
    "Lombo 5kg": { producao: 2.40, icms: 7 },
    "Lingua 5kg": { producao: 2.40, icms: 7 },
    "Rabo 5kg": { producao: 2.40, icms: 7 },
    "Ponta 5kg": { producao: 2.40, icms: 7 },
    "Paleta 5kg": { producao: 2.40, icms: 7 },

    //Salgados 10kg
    "Costela 10kg": { producao: 3.10, icms: 7 },
    "Pe 10kg": { producao: 3.10, icms: 7 },
    "Orelha 10kg": { producao: 3.10, icms: 7 },
    "Lombo 10kg": { producao: 3.10, icms: 7 },
    "Lingua 10kg": { producao: 3.10, icms: 7 },
    "Rabo 10kg": { producao: 3.10, icms: 7 },
    "Ponta 10kg": { producao: 3.10, icms: 7 },
    "Paleta 10kg": { producao: 3.10, icms: 7 },

    //Salgados 20kg
    "Costela 20kg": { producao: 3.85, icms: 7 },
    "Pe 20kg": { producao: 3.85, icms: 7 },
    "Orelha 20kg": { producao: 3.85, icms: 7 },
    "Lombo 20kg": { producao: 3.85, icms: 7 },
    "Lingua 20kg": { producao: 3.85, icms: 7 },
    "Rabo 20kg": { producao: 3.85, icms: 7 },
    "Ponta 20kg": { producao: 3.85, icms: 7 },
    "Paleta 20kg": { producao: 3.85, icms: 7 },

    // Torresmos
    "Pururcas 60g": { frete: 0.04, quebra: 0, producao: 0, icms: 0 },
    "Pururcas 120g": { frete: 0.08, quebra: 0, producao: 0, icms: 0 },
    "Torres. Vog Pote 120g": { frete: 0.65, quebra: 0, producao: 0, icms: 0 },
    "Torres. Vog Pacote 120g": { frete: 0.65, quebra: 0, producao: 0, icms: 0 },
    
    // Suspiro
    "Suspiro (70g)": { frete: 0.05, quebra: 0, producao: 0, icms: 0 },
    
    // Big Bacon
    "Big Bacon": { frete: 0.65, quebra: 0, producao: 3.35, icms: 18 },
    
    // Empanados
    "Filezinho Frango Baita 700g": { frete: 0.46, quebra: 0, producao: 0, icms: 0 },
    "Chicken Queijo Perdigão": { frete: 0.08, quebra: 0, producao: 0, icms: 0 },
    
    // Configuração padrão para os demais produtos
    "default": { frete: 0.65, producao: 0, icms: 0 }
};

// Objeto para armazenar quais grupos estão ativos
const gruposAtivos = {
    salgados_5kg: false,
    salgados_10kg: false,
    salgados_20kg: true,
    salames: true,
    defumados: true,
    suspiro: true,
    torresmos: true,
    empanados: false,
    congelados: false,
    embutidos: false
};

// Função para obter a configuração de um produto
function getConfigProduto(nomeProduto) {
    return {
        ...configProdutos["default"],
        ...(configProdutos[nomeProduto] || {})
    };
}

// Função para filtrar os produtos ativos baseados nos grupos ativos
function getProdutosAtivos() {
    return produtos.filter(produto => {
        for (const [grupo, ativo] of Object.entries(gruposAtivos)) {
            if (ativo && gruposProdutos[grupo].includes(produto.nome)) {
                return true;
            }
        }
        return false;
    });
}

// Percentuais de quebra baseados na produção selecionada
const quebrasPorProducao = {
    "2.40": {
        "Costela_5kg": 6,
        "Pe_5kg": 4,
        "Orelha_5kg": 4,
        "Lombo_5kg": 9,
        "Lingua_5kg": 8,
        "Rabo_5kg": 9,
        "Ponta_5kg": 4,
        "Palet_5kg": 6
    },
    "3.10": {
        "Costela_10kg": 6,
        "Pe_10kg": 2,
        "Orelha_10kg": 4,
        "Lombo_10kg": 15,
        "Lingua_10kg": 15,
        "Rabo_10kg": 10,
        "Ponta_10kg": 4,
        "Paleta_10kg": 10
    },
    "3.85": {
        "Costela_20kg": 6,
        "Pe_20kg": 2,
        "Orelha_20kg": 4,
        "Lombo_20kg": 15,
        "Lingua_20kg": 15,
        "Rabo_20kg": 10,
        "Ponta_20kg": 4,
        "Paleta_20kg": 10
    }
};

const precosAtuais = {
    "Costela": 0,
    "Pe": 0,
    "Orelha": 0,
    "Lombo": 0,
    "Lingua": 0,
    "Rabo": 0,
    "Ponta": 0,
    "Paleta": 0,
    "Salame Puro": 0,
    "Salame Limão": 0,
    "Salame Azeitona": 0,
    "Salame Biquinho": 0,
    "Salame Provolone": 0,
    "Salame Bacon": 0,
    "Pururuca 1kg": 0,
    "Pururcas 60g": 0,
    "Pururcas 120g": 0,
    "Big Bacon": 0,
    "Suspiro (1kg)": 0,
    "Suspiro (70g)": 0
};

// Objeto para armazenar as tabelas salvas por vendedor
const tabelasPorVendedor = {};

// Variável global para a instância do Grid
let grid;

function calcularCustoF(custoMenos7, quebra) {
    return custoMenos7 + (custoMenos7 * quebra / 100);
}

function calcularCTF(custoF, frete, producao) {
    return custoF + frete + producao;
}

function calcularMarkup(icms, comissao, escritorio, contrato, margem) {
    return (1 - (icms + comissao + escritorio + contrato + margem) / 100) * 100;
}

function calcularPrecoPretendido(ctf, markupPercent, margem, icms, comissao, escritorio, contrato) {
    let precoPretendido = Math.ceil(ctf / (markupPercent / 100) * 10) / 10;
    
    // Calcular a margem pretendida inicial
    let margemPretendida = calcularMargemPretendida(precoPretendido, ctf, icms, comissao, escritorio, contrato);
    
    // Ajustar iterativamente o preço se a margem pretendida for maior que a desejada
    while (Math.floor(margemPretendida) > Math.floor(margem)&& Math.floor(margemPretendida) < (Math.floor(margem) - 1)) {
        precoPretendido -= 0.05; // Diminuir 5 centavos
        
        // Recalcular a margem pretendida
        margemPretendida = calcularMargemPretendida(precoPretendido, ctf, icms, comissao, escritorio, contrato);
    }
    
    return precoPretendido;
}

function calcularMargemPretendida(precoPretendido, ctf, icms, comissao, escritorio, contrato) {
    return ((precoPretendido - ctf) / precoPretendido) * 100 - (icms + comissao + escritorio + contrato);
}

function calcularMargemAtual(precoAtual, ctf, icms, comissao, escritorio, contrato) {
    return ((precoAtual - ctf) / precoAtual) * 100 - (icms + comissao + escritorio + contrato);
}

function formatarMoeda(valor) {
    if (valor === undefined || valor === null) {
        return 'R$ 0,00';
    }
    return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

function formatarPorcentagem(valor) {
    return valor.toFixed(2) + '%';
} 

function atualizarPrecoAtual(nomeProduto, valor) {
    const valorNumerico = parseFloat(valor) || 0;
    if (precosAtuais[nomeProduto] !== valorNumerico) {
        precosAtuais[nomeProduto] = valorNumerico;
    }
}

function atualizarTabela() {
    // Obter valores dos inputs
    const comissao = parseFloat(document.getElementById('comissao').value) || 0;
    const contrato = parseFloat(document.getElementById('contrato').value) || 0;
    const margem = parseFloat(document.getElementById('margem').value) || 0;
    
    // Constantes
    const escritorio = 7;
    
    // Obter produtos ativos
    const produtosAtivos = getProdutosAtivos();
    
    // Preparar dados para o Grid
    const gridData = produtosAtivos.map(produto => {
        const config = getConfigProduto(produto.nome);
        const isSalgado = gruposProdutos.salgados_5kg.includes(produto.nome) || 
                 gruposProdutos.salgados_10kg.includes(produto.nome) || 
                 gruposProdutos.salgados_20kg.includes(produto.nome);
        
        // Calcular custo - ICMS (agora usando o ICMS específico do produto)
        const custoMenosICMS = produto.custo - (produto.custo * (config.icms/100));
        // Quebra (baseada na produção selecionada, apenas para salgados)
        const quebra = produto.quebra;
        
        // Custo F
        const custoF = calcularCustoF(custoMenosICMS, quebra);
        
        // CTF
        const ctf = calcularCTF(custoF, config.frete || 0, config.producao || 0);
        
        // Markup (como porcentagem)
        const markupPercent = calcularMarkup(config.icms, comissao, escritorio, contrato, margem);
        
        // Preço pretendido
        const precoPretendido = calcularPrecoPretendido(ctf, markupPercent, margem, config.icms, comissao, escritorio, contrato);
        
        // Margem pretendida
        const margemPretendida = calcularMargemPretendida(precoPretendido, ctf, config.icms, comissao, escritorio, contrato);
        
        // Preço atual (do objeto ou padrão)
        const precoAtual = precosAtuais[produto.nome] || 0;
        
        // Margem atual
        const margemAtual = calcularMargemAtual(precoAtual, ctf, config.icms, comissao, escritorio, contrato);
        
        return [
            produto.nome,
            formatarMoeda(produto.custo),
            formatarMoeda(custoMenosICMS),
            formatarPorcentagem(quebra),
            formatarMoeda(custoF),
            formatarMoeda(config.frete),
            formatarMoeda(config.producao),
            formatarMoeda(ctf),
            formatarPorcentagem(config.icms),
            formatarPorcentagem(comissao),
            formatarPorcentagem(escritorio),
            formatarPorcentagem(contrato),
            formatarPorcentagem(margem),
            formatarPorcentagem(markupPercent),
            formatarMoeda(precoPretendido),
            precoAtual.toFixed(2),
            formatarPorcentagem(margemPretendida),
            formatarPorcentagem(margemAtual),
            produto.nome
        ];
    });
    
    // Configuração responsiva do GridJS
    const responsiveConfig = {
        breakpoints: [
            { 
                breakpoint: '768px', 
                options: { 
                    columns: [
                        'Produto', 
                        'Custo', 
                        'Preço Pretendido', 
                        'Preço Atual', 
                        'Margem Atual',
                        'Margem Pretendida'
                    ].map(col => ({
                        name: col,
                        hidden: !['Produto', 'Custo', 'Preço Pretendido', 'Preço Atual', 'Margem Atual', 'Margem Pretendida'].includes(col)
                    }))
                } 
            },
            { 
                breakpoint: '480px', 
                options: { 
                    columns: [
                        'Produto', 
                        'Preço Atual', 
                        'Preço Pretendido'
                    ].map(col => ({
                        name: col,
                        hidden: !['Produto', 'Preço Atual', 'Preço Pretendido'].includes(col)
                    }))
                } 
            }
        ]
    };
    
    // Se já existe uma instância do Grid, atualizamos os dados
   if (grid) {
        grid.updateConfig({
            data: gridData,
            ...responsiveConfig
        }).forceRender();
    } else {
        // Criar nova instância do Grid
        grid = new gridjs.Grid({
            columns: [
                { name: "Produto", width: "120px" },
                { name: "Custo", width: "60px"},
                { name: "Custo-7%", width: "60px" },
                { name: "% Quebra", width: "60px" },
                { name: "Custo F", width: "70px", hidden:true },
                { name: "Frete", width: "50px", hidden:true },
                { name: "Produção", width: "70px" },
                { name: "CTF", width: "50px" },
                { name: "ICMS", width: "60px" },
                { name: "Comissão", width: "70px" },
                { name: "Escritório", width: "80px" },
                { name: "Contrato", width: "70px" },
                { name: "Margem", width: "70px" },
                { name: "Markup", width: "70px" },
                { name: "Preço Pretendido", width: "80px" },
                { 
                    name: "Preço Atual", 
                    width: "60px",
                    formatter: (cell, row) => {
                        const productName = row.cells[18].data;
                        const inputId = `preco-atual-${productName.replace(/\s+/g, '-')}`;
                        return gridjs.html(`
                            <input type="number" 
                                   step="0.01" 
                                   value="${cell}" 
                                   onchange="atualizarPrecoAtual('${productName}', this.value)" 
                                   class="currency-input"
                                   id="${inputId}"
                                   data-product="${productName}"
                                   data-row="${row.cells[0].data}">
                        `);
                    }
                },
                { name: "Margem Pretendida", width: "80px" },
                { name: "Margem Atual", width: "65px" },
                { name: "NomeProduto", hidden: true }
            ],
            data: gridData,
            sort: true,
            search: true,
            fixedHeader: true,
            height: '650px', 
            width: '100%',
            className: {
                table: 'custom-grid-table', // Adiciona uma classe personalizada
            },
            style: {
                table: {
                    'white-space': 'nowrap'
                },
                td: {
                    'padding': '5px 8px'
                }
            },
            ...responsiveConfig
        }).render(document.getElementById('tabela-container'));
        
        setTimeout(() => {
            document.querySelectorAll('#tabela-container input[type="number"]').forEach(input => {
                let valueChanged = false;

                input.addEventListener('input', function() {
                    valueChanged = true;
                    const productName = this.getAttribute('data-product');
                    atualizarPrecoAtual(productName, this.value);
                });

                input.addEventListener('keydown', function(e) {
                    if (e.key === 'Tab' || e.key === 'Enter') {
                        e.preventDefault();

                        // Força a atualização se o valor foi alterado
                        if (valueChanged) {
                            const productName = this.getAttribute('data-product');
                            precosAtuais[productName] = parseFloat(this.value) || 0;
                            valueChanged = false;
                        }

                        const currentRow = parseInt(this.getAttribute('data-row'));
                        const nextRow = e.shiftKey ? currentRow - 1 : currentRow + 1;

                        // Encontrar o próximo input na mesma coluna
                        const nextInput = document.querySelector(
                            `#tabela-container input[data-row="${nextRow}"]`
                        );

                        if (nextInput) {
                            nextInput.focus();
                            nextInput.select();
                        }
                    }
                });

                // Atualiza a tabela quando o input perde o foco
                input.addEventListener('blur', function() {
                    if (valueChanged) {
                        atualizarTabela();
                        valueChanged = false;
                    }
                });
            });
        }, 100);
    }
}

    // Obter valores dos inputs
    const comissao = parseFloat(document.getElementById('comissao').value) || 0;
    const contrato = parseFloat(document.getElementById('contrato').value) || 0;
    const margem = parseFloat(document.getElementById('margem').value) || 0;
    
    // Constantes
    const escritorio = 7;
    
    // Obter produtos ativos
    const produtosAtivos = getProdutosAtivos();
    
    // Preparar dados para o Grid
    const gridData = produtosAtivos.map(produto => {
        const config = getConfigProduto(produto.nome);
        const isSalgado = gruposProdutos.salgados_5kg.includes(produto.nome) || 
                 gruposProdutos.salgados_10kg.includes(produto.nome) || 
                 gruposProdutos.salgados_20kg.includes(produto.nome);
        
        // Calcular custo - ICMS (agora usando o ICMS específico do produto)
        const custoMenosICMS = produto.custo - (produto.custo * (config.icms/100));
        
        // Quebra (baseada na produção selecionada, apenas para salgados)
        const quebra = produto.quebra;
        
        // Custo F
        const custoF = calcularCustoF(custoMenosICMS, quebra);
        
        // CTF
        const ctf = calcularCTF(custoF, config.frete, config.producao);
        
        // Markup (como porcentagem)
        const markupPercent = calcularMarkup(config.icms, comissao, escritorio, contrato, margem);
        
        // Preço pretendido
        const precoPretendido = calcularPrecoPretendido(ctf, markupPercent, margem, config.icms, comissao, escritorio, contrato);
        
        // Margem pretendida
        const margemPretendida = calcularMargemPretendida(precoPretendido, ctf, config.icms, comissao, escritorio, contrato);
        
        // Preço atual (do objeto ou padrão)
        const precoAtual = precosAtuais[produto.nome] || 0;
        
        // Margem atual
        const margemAtual = calcularMargemAtual(precoAtual, ctf, config.icms, comissao, escritorio, contrato);
        
        return [
            produto.nome,
            formatarMoeda(produto.custo),
            formatarMoeda(custoMenosICMS),
            formatarPorcentagem(quebra),
            formatarMoeda(custoF),
            formatarMoeda(config.frete),
            formatarMoeda(config.producao),
            formatarMoeda(ctf),
            formatarPorcentagem(config.icms),
            formatarPorcentagem(comissao),
            formatarPorcentagem(escritorio),
            formatarPorcentagem(contrato),
            formatarPorcentagem(margem),
            formatarPorcentagem(markupPercent),
            formatarMoeda(precoPretendido),
            precoAtual.toFixed(2),
            formatarPorcentagem(margemPretendida),
            formatarPorcentagem(margemAtual),
            produto.nome
        ];
});
function salvarTabelaCliente() {
    const vendedor = document.getElementById('vendedor').value.trim();
    const cliente = document.getElementById('cliente').value.trim();
    const contrato = parseFloat(document.getElementById('contrato').value) || 0;
    const comissao = parseFloat(document.getElementById('comissao').value) || 0;

    if (!vendedor || !cliente) {
        alert("Por favor, preencha o nome do vendedor e do cliente.");
        return;
    }
    
    // Criar ou atualizar o objeto do vendedor
    if (!tabelasPorVendedor[vendedor]) {
        tabelasPorVendedor[vendedor] = [];
    }
    
    // Verificar se já existe uma tabela para este cliente
    const tabelaExistenteIndex = tabelasPorVendedor[vendedor].findIndex(t => t.cliente === cliente);
    
    // Preparar os dados para a tabela resumida
    const dadosTabelaResumida = produtos.map(produto => {
        const precoAtual = precosAtuais[produto.nome] || 0;
        
        // Encontrar os dados na tabela principal
        const rowData = grid.config.data.find(row => row[18] === produto.nome);
        if (!rowData) return null;
        
        // Extrair valores numéricos das margens (removendo o '%' e convertendo para número)
        const margemAtual = parseFloat(rowData[17].replace('%', '')) || 0;
        const margemPretendida = parseFloat(rowData[16].replace('%', '')) || 0;
        
        // Verificar se o preço atual é 0
        const precoAtualEhZero = precoAtual === 0 || rowData[15] === '0.00';
        
        // Se preço atual for 0, mostrar apenas pretendidos
        if (precoAtualEhZero) {
            return [
                produto.nome,
                rowData[1] || '-', // Custo
                '-', // Preço Atual (vazio)
                rowData[14], // Preço Pretendido
                '-', // Margem Atual (vazio)
                rowData[16]  // Margem Pretendida
            ];
        }
        
        // Caso contrário, aplicar a lógica anterior de comparação de margens
        const mostrarDadosPretendidos = Math.floor(margemAtual) < Math.floor(margemPretendida);
        
        return [
            produto.nome,
            rowData[1] || '-', // Custo
            rowData[15], // Preço Atual
            mostrarDadosPretendidos ? rowData[14] : '-', // Preço Pretendido
            rowData[17], // Margem Atual
            mostrarDadosPretendidos ? rowData[16] : '-'  // Margem Pretendida
        ];
    }).filter(Boolean);
    
    // Criar a tabela resumida
    const tabelaResumida = {
        cliente,
        contrato,
        comissao,
        dados: dadosTabelaResumida
    };
    
    if (tabelaExistenteIndex >= 0) {
        // Atualizar tabela existente
        tabelasPorVendedor[vendedor][tabelaExistenteIndex] = tabelaResumida;
    } else {
        // Adicionar nova tabela
        tabelasPorVendedor[vendedor].push(tabelaResumida);
    }
    
    // Atualizar a exibição das tabelas salvas
    exibirTabelasSalvas();
    
    alert(`Tabela salva para o cliente ${cliente} no vendedor ${vendedor}`);
}
function exibirTabelasSalvas() {
    const container = document.getElementById('tabelas-salvas');
    container.innerHTML = '';
    
    for (const [vendedor, tabelas] of Object.entries(tabelasPorVendedor)) {
        const vendedorSection = document.createElement('div');
        vendedorSection.className = 'vendedor-section';
        
        const vendedorTitle = document.createElement('div');
        vendedorTitle.className = 'vendedor-title';
        vendedorTitle.textContent = `Vendedor: ${vendedor}`;
        vendedorSection.appendChild(vendedorTitle);
        console.log(tabelas);
        
        tabelas.forEach(tabela => {
            const tituloTabela = document.createElement('h3');
            tituloTabela.textContent = `${tabela.cliente} contrato: ${tabela.contrato}% comissão: ${tabela.comissao}%`;
            vendedorSection.appendChild(tituloTabela);
            
            const tabelaContainer = document.createElement('div');
            tabelaContainer.id = `tabela-${vendedor}-${tabela.cliente}`.replace(/\s+/g, '-');
            vendedorSection.appendChild(tabelaContainer);
            
            new gridjs.Grid({
                columns: [
                    { name: "Produto", width: "100px" },
                    { name: "Custo", width: "70px" },
                    { 
                        name: "Preço Atual", 
                        width: "80px",
                        formatter: (cell) => cell === '-' ? gridjs.html('<span style="color: #999">-</span>') : cell
                    },
                    { 
                        name: "Preço Pretendido", 
                        width: "100px",
                        formatter: (cell) => cell === '-' ? gridjs.html('<span style="color: #999">-</span>') : cell
                    },
                    { 
                        name: "Margem Atual", 
                        width: "90px",
                        formatter: (cell) => cell === '-' ? gridjs.html('<span style="color: #999">-</span>') : cell
                    },
                    { 
                        name: "Margem Pretendida", 
                        width: "110px",
                        formatter: (cell) => cell === '-' ? gridjs.html('<span style="color: #999">-</span>') : cell
                    }
                ],
                data: tabela.dados,
                sort: true,
                fixedHeader: true,
                height: '650px',
                width: '100%',
                style: {
                    table: {
                        'white-space': 'nowrap'
                    },
                    td: {
                        'padding': '5px 8px'
                    }
                },
                breakpoints: [
                    { 
                        breakpoint: '768px', 
                        options: { 
                            columns: [
                                'Produto', 
                                'Preço Atual', 
                                'Preço Pretendido'
                            ].map(col => ({
                                name: col,
                                hidden: !['Produto', 'Preço Atual', 'Preço Pretendido'].includes(col)
                            }))
                        } 
                    }
                ]
            }).render(tabelaContainer);
        });
        
        container.appendChild(vendedorSection);
    }
}

// Inicializar tabela ao carregar a página
window.onload = atualizarTabela;
// Função para exportar todas as tabelas como JSON
function exportarParaJSON() {
    if (Object.keys(tabelasPorVendedor).length === 0) {
        alert("Nenhuma tabela salva para exportar.");
        return;
    }
    
    const dataStr = JSON.stringify(tabelasPorVendedor, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'dados.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}
function exportarParaImagens() {
    if (Object.keys(tabelasPorVendedor).length === 0) {
        alert("Nenhuma tabela salva para exportar.");
        return;
    }

    // Função auxiliar para capturar e salvar uma tabela como imagem
    async function salvarTabelaComoImagem(vendedor, cliente, tabelaContainer) {
        try {
            // Usar html2canvas para capturar o conteúdo da tabela
            const canvas = await html2canvas(tabelaContainer, {
                scale: 2, // Aumenta a qualidade da imagem
                logging: false,
                useCORS: true,
                allowTaint: true
            });

            // Converter canvas para imagem e criar link de download
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            
            // Criar nome do arquivo com vendedor e cliente (removendo caracteres inválidos)
            const nomeArquivo = `${vendedor.replace(/[^a-z0-9]/gi, '_')}-${cliente.replace(/[^a-z0-9]/gi, '_')}.png`;
            link.download = nomeArquivo;
            
            // Disparar o download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Pequeno delay entre cada download para evitar problemas
            return new Promise(resolve => setTimeout(resolve, 500));
        } catch (error) {
            console.error(`Erro ao exportar tabela de ${vendedor} - ${cliente}:`, error);
            return Promise.resolve();
        }
    }

    // Processar todas as tabelas salvas
    (async function() {
        for (const [vendedor, tabelas] of Object.entries(tabelasPorVendedor)) {
            for (const tabela of tabelas) {
                const containerId = `tabela-${vendedor}-${tabela.cliente}`.replace(/\s+/g, '-');
                const tabelaContainer = document.getElementById(containerId);
                
                if (tabelaContainer) {
                    await salvarTabelaComoImagem(vendedor, tabela.cliente, tabelaContainer);
                }
            }
        }
        
        alert("Exportação para imagens concluída!");
    })();
}
async function exportarParaExcel() {
    if (Object.keys(tabelasPorVendedor).length === 0) {
        alert("Nenhuma tabela salva para exportar.");
        return;
    }

    const workbook = new ExcelJS.Workbook();
    
    for (const [vendedor, tabelas] of Object.entries(tabelasPorVendedor)) {
        tabelas.forEach((tabela, idx) => {
            const worksheet = workbook.addWorksheet(
                `${vendedor.substring(0, 10)}-${tabela.cliente.substring(0, 10)}`.slice(0, 31)
            );

            // 🔵 Adicionar título (linha mesclada)
            worksheet.mergeCells('A1:F1');
            const titleRow = worksheet.getCell('A1');
            titleRow.value = `Vendedor: ${vendedor} | Cliente: ${tabela.cliente} | Produção: ${tabela.producao} | Contrato: ${tabela.contrato}% | Comissão: ${tabela.comissao}%`;
            titleRow.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FF3661A6' } // Azul
            };
            titleRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
            titleRow.alignment = { horizontal: 'center', vertical: 'middle' };

            // 🟢 Adicionar cabeçalho da tabela
            const headerRow = worksheet.addRow(['Produto', 'Custo', 'Preço Atual', 'Preço Pretendido', 'Margem Atual', 'Margem Pretendida']);
            headerRow.eachCell(cell => {
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FF5C8F3A' } // Verde
                };
                cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
                cell.alignment = { horizontal: 'center' };
            });

            // 📊 Adicionar dados
            tabela.dados.forEach(row => {
                worksheet.addRow(row);
            });

            // Ajustar largura das colunas
            worksheet.columns = [
                { width: 20 }, // Produto
                { width: 10 }, // Custo
                { width: 20 }, // Preço Atual
                { width: 20 }, // Preço Pretendido
                { width: 20 }, // Margem Atual
                { width: 20 }  // Margem Pretendida
            ];
        });
    }

    // Exportar
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), 'Custo-Clientes e Produtos.xlsx');
}
// Função para exportar todas as tabelas como PDF (ajustado para layout completo)
function exportarParaPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'landscape' // Modo paisagem para mais espaço
    });
    
    let isFirstPage = true;
    
    // Adicionar tabelas salvas por vendedor/cliente
    for (const [vendedor, tabelas] of Object.entries(tabelasPorVendedor)) {
        tabelas.forEach(tabela => {
            // Verificar se precisa de nova página (não na primeira página)
            if (!isFirstPage) {
                doc.addPage('landscape');
            } else {
                isFirstPage = false;
            }
            
            // Configurar margens e tamanhos
            const margin = 10;
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const tableWidth = pageWidth - 2 * margin;
            
            // Adicionar cabeçalho com informações
            doc.setFontSize(12);
            doc.setTextColor(40);
            doc.text(`Vendedor: ${vendedor}`, margin, margin + 5);
            doc.text(`Cliente: ${tabela.cliente}`, pageWidth / 2, margin + 5);
            doc.text(`Config: ${tabela.producao} | Contrato: ${tabela.contrato}% | Comissão: ${tabela.comissao}%`, margin, margin + 15);
            
            // Preparar dados da tabela
            const tableData = tabela.dados.map(row => [row[0], row[1], row[2], row[3], row[4], row[5]]);
            
            // Configurar a tabela para ocupar o máximo de espaço possível
            doc.autoTable({
                head: [['Produto', 'Custo', 'Preço Atual', 'Preço Pretendido', 'Margem Atual', 'Margem Pretendida']],
                body: tableData,
                startY: margin + 25,
                margin: { horizontal: margin },
                tableWidth: 'auto',
                styles: { 
                    fontSize: 8,
                    cellPadding: 2, // Reduzir o padding das células
                    overflow: 'linebreak',
                    lineHeight: 1.2 // Reduzir a altura da linha
                },
                columnStyles: {
                    0: { cellWidth: 'auto' },
                    1: { cellWidth: 'auto' },
                    2: { cellWidth: 'auto' },
                    3: { cellWidth: 'auto' },
                    4: { cellWidth: 'auto' },
                    5: { cellWidth: 'auto' }
                },
                didDrawPage: function(data) {
                    // Adicionar rodapé com número da página
                    doc.setFontSize(10);
                    doc.text(`Página ${doc.internal.getNumberOfPages()}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
                }
            });
        });
    }
    
    // Salvar o PDF
    doc.save('Custo-Clientes e Produtos.pdf');
}
// Função para carregar os dados do arquivo JSON
async function carregarDadosIniciais() {
    try {
        const response = await fetch('dados.json');
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo dados.json');
        }
        const dadosIniciais = await response.json();
        
        // Preencher o objeto tabelasPorVendedor com os dados do JSON
        Object.assign(tabelasPorVendedor, dadosIniciais);
        
        // Atualizar a exibição das tabelas salvas
        exibirTabelasSalvas();
        
        // Atualizar também a tabela principal com os primeiros valores encontrados
        if (Object.keys(dadosIniciais).length > 0) {
            const primeiroVendedor = Object.keys(dadosIniciais)[0];
            const primeiraTabela = dadosIniciais[primeiroVendedor][0];
            
            document.getElementById('contrato').value = primeiraTabela.contrato;
            document.getElementById('comissao').value = primeiraTabela.comissao;
            
            // Definir a produção baseada no texto
            const producaoTexto = primeiraTabela.producao;
            const producaoValue = producaoTexto === '20kg' ? '3.85' : 
                                 producaoTexto === '10kg' ? '3.10' : '2.40';
            
            // Atualizar a tabela principal
            atualizarTabela();
        }
    } catch (error) {
        console.error('Erro ao carregar dados iniciais:', error);
    }
}

// Modificar a função window.onload para carregar os dados iniciais
window.onload = function() {
    atualizarTabela();
    carregarDadosIniciais();
};

function atualizarCustosDosProdutos(novosCustos) {
    // 1. Atualiza os custos na lista principal de produtos
    produtos.forEach(produto => {
        if (novosCustos[produto.nome] !== undefined) {
            produto.custo = parseFloat(novosCustos[produto.nome]);
        }
    });
    
    // 2. Percorre todas as tabelas salvas para recalcular
    for (const [vendedor, tabelas] of Object.entries(tabelasPorVendedor)) {
        tabelas.forEach(tabela => {
            // Extrai as configurações da tabela salva
            const config = {
                comissao: tabela.comissao,
                contrato: tabela.contrato,
                producaoTexto: tabela.producao,
                producaoValue: tabela.producao === '20kg' ? '3.85' : 
                              tabela.producao === '10kg' ? '3.10' : '2.40',
                precosAtuais: {}
            };
            
            // Lista para armazenar os nomes dos produtos que já existiam na tabela
            const produtosExistentes = [];
            
            // Preenche os preços atuais e lista de produtos existentes
            tabela.dados.forEach(row => {
                const produtoNome = row[0];
                const precoAtual = row[2] === '-' ? 0 : parseFloat(row[2].replace('R$ ', '').replace(',', '.'));
                config.precosAtuais[produtoNome] = precoAtual;
                produtosExistentes.push(produtoNome);
            });
            
            // 3. Filtra a lista de produtos para incluir apenas os que já existiam na tabela
            const produtosParaRecalcular = produtos.filter(produto => 
                produtosExistentes.includes(produto.nome)
            );
            
            // 4. Recalcula os dados apenas para os produtos existentes
            const dadosRecalculados = produtosParaRecalcular.map(produto => {
                const isSalameOuSimilar = produto.nome.includes("Salame") || 
                                         produto.nome.includes("Pururuca") || 
                                         produto.nome.includes("Pururcas") || 
                                         produto.nome.includes("Big Bacon") || 
                                         produto.nome.includes("Suspiro");
                
                // Calcular custo -7%
                const custoMenos7 = isSalameOuSimilar ? produto.custo : produto.custo * 0.93;
                
                // Quebra (baseada na produção da tabela salva)
                const quebra = produto.quebra;
                
                // Custo F
                const custoF = calcularCustoF(custoMenos7, quebra);
                
                // Frete e produção
                const frete = isSalameOuSimilar ? 0 : 0.65;
                const producaoAtual = isSalameOuSimilar ? 0 : parseFloat(config.producaoValue);
                
                // CTF
                const ctf = calcularCTF(custoF, frete, producaoAtual);
                
                // Markup (como porcentagem)
                const markupPercent = calcularMarkup(7, config.comissao, 7, config.contrato, 6);
                
                // Preço pretendido
                const precoPretendido = calcularPrecoPretendido(
                    ctf, 
                    markupPercent, 
                    6, // Margem fixa 6%
                    7, // ICMS
                    config.comissao, 
                    7, // Escritório
                    config.contrato
                );
                
                // Margem pretendida
                const margemPretendida = calcularMargemPretendida(
                    precoPretendido, 
                    ctf, 
                    7, // ICMS
                    config.comissao, 
                    7, // Escritório
                    config.contrato
                );
                
                // Preço atual (da tabela salva)
                const precoAtual = config.precosAtuais[produto.nome] || 0;
                
                // Margem atual
                const margemAtual = calcularMargemAtual(
                    precoAtual, 
                    ctf, 
                    7, // ICMS
                    config.comissao, 
                    7, // Escritório
                    config.contrato
                );
                
                // Formata os dados para o mesmo padrão da tabela salva
                return [
                    produto.nome,
                    formatarMoeda(produto.custo),
                    precoAtual === 0 ? '-' : formatarMoeda(precoAtual),
                    margemAtual >= margemPretendida ? '-' : formatarMoeda(precoPretendido),
                    precoAtual === 0 ? '-' : formatarPorcentagem(margemAtual),
                    margemAtual >= margemPretendida ? '-' : formatarPorcentagem(margemPretendida)
                ];
            });
            
            // 5. Atualiza a tabela salva com os novos dados (mantendo apenas os produtos existentes)
            tabela.dados = dadosRecalculados;
        });
    }
    
    // 6. Atualiza a exibição das tabelas
    exibirTabelasSalvas();
    
    // 7. Mostra mensagem de sucesso
    alert('Custos atualizados e tabelas recalculadas mantendo apenas os produtos existentes!');
}

// Função para abrir o editor de custos (igual à anterior, mas agora chama a função corrigida)
function abrirEditorDeCustos() {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
    
    const content = document.createElement('div');
    content.style.backgroundColor = 'white';
    content.style.padding = '20px';
    content.style.borderRadius = '5px';
    content.style.maxHeight = '80vh';
    content.style.overflowY = 'auto';
    content.style.width = '80%';
    
    const title = document.createElement('h2');
    title.textContent = 'Editar Custos dos Produtos';
    content.appendChild(title);
    
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    
    produtos.forEach(produto => {
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = produto.nome;
        nameCell.style.padding = '8px';
        nameCell.style.borderBottom = '1px solid #ddd';
        row.appendChild(nameCell);
        
        const inputCell = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'number';
        input.step = '0.01';
        input.value = produto.custo.toFixed(2);
        input.style.width = '100px';
        input.style.padding = '5px';
        input.dataset.produto = produto.nome;
        inputCell.appendChild(input);
        inputCell.style.padding = '8px';
        inputCell.style.borderBottom = '1px solid #ddd';
        row.appendChild(inputCell);
        
        table.appendChild(row);
    });
    
    content.appendChild(table);
    
    const buttonContainer = document.createElement('div');
    buttonContainer.style.marginTop = '20px';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'flex-end';
    buttonContainer.style.gap = '10px';
    
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancelar';
    cancelButton.onclick = () => document.body.removeChild(modal);
    buttonContainer.appendChild(cancelButton);
    
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Atualizar Custos e Recalcular Tabelas';
    saveButton.onclick = () => {
        const novosCustos = {};
        const inputs = content.querySelectorAll('input');
        inputs.forEach(input => {
            novosCustos[input.dataset.produto] = parseFloat(input.value);
        });
        
        atualizarCustosDosProdutos(novosCustos);
        document.body.removeChild(modal);
    };
    saveButton.style.backgroundColor = '#4CAF50';
    saveButton.style.color = 'white';
    saveButton.style.border = 'none';
    saveButton.style.padding = '8px 16px';
    saveButton.style.borderRadius = '4px';
    saveButton.style.cursor = 'pointer';
    buttonContainer.appendChild(saveButton);
    
    content.appendChild(buttonContainer);
    modal.appendChild(content);
    document.body.appendChild(modal);
}
// Função para criar o modal de seleção de grupos
function abrirSeletorGrupos() {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
    
    const content = document.createElement('div');
    content.style.backgroundColor = 'white';
    content.style.padding = '20px';
    content.style.borderRadius = '5px';
    content.style.maxHeight = '80vh';
    content.style.overflowY = 'auto';
    content.style.width = '80%';
    
    const title = document.createElement('h1');
    title.textContent = 'Selecionar Grupos de Produtos';
    content.appendChild(title);
    
    const gruposContainer = document.createElement('div');
    
    // Adicionar checkbox para cada grupo
    for (const [grupo, ativo] of Object.entries(gruposAtivos)) {
        const grupoDiv = document.createElement('div');
        grupoDiv.style.marginBottom = '10px';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `grupo-${grupo}`;
        checkbox.checked = ativo;
        checkbox.style.marginRight = '10px';
        
        const label = document.createElement('label');
        label.htmlFor = `grupo-${grupo}`;
        label.textContent = grupo.charAt(0).toUpperCase() + grupo.slice(1) + ` (${gruposProdutos[grupo].length} produtos)`;
        
        grupoDiv.appendChild(checkbox);
        grupoDiv.appendChild(label);
        gruposContainer.appendChild(grupoDiv);
    }
    
    content.appendChild(gruposContainer);
    
    const buttonContainer = document.createElement('div');
    buttonContainer.style.marginTop = '20px';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'flex-end';
    buttonContainer.style.gap = '10px';
    
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancelar';
    cancelButton.onclick = () => document.body.removeChild(modal);
    buttonContainer.appendChild(cancelButton);
    
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Aplicar Seleção';
    saveButton.onclick = () => {
        // Atualizar grupos ativos com base nas seleções
        for (const grupo in gruposAtivos) {
            const checkbox = document.getElementById(`grupo-${grupo}`);
            gruposAtivos[grupo] = checkbox.checked;
        }
        
        document.body.removeChild(modal);
        document.getElementById('tabela-container').style.display = 'block';
        atualizarTabela(); // Atualizar a tabela com os novos grupos selecionados
    };
    saveButton.style.backgroundColor = '#4CAF50';
    saveButton.style.color = 'white';
    saveButton.style.border = 'none';
    saveButton.style.padding = '8px 16px';
    saveButton.style.borderRadius = '4px';
    saveButton.style.cursor = 'pointer';
    buttonContainer.appendChild(saveButton);
    
    content.appendChild(buttonContainer);
    modal.appendChild(content);
    document.body.appendChild(modal);
}