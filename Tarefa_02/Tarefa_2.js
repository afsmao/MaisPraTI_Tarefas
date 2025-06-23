// Seção 1: Estruturas de Controle Avançadas

// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano) {
    if (
        typeof dia !== 'number' || typeof mes !== 'number' || typeof ano !== 'number' ||
        !Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)
    ) return false;
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) return false;
    const diasNoMes = [31, (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return dia <= diasNoMes[mes - 1];
}

// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

function jogoAdivinhacao() {
    const numero = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let palpite;
    while (true) {
        palpite = Number(prompt("Adivinhe o número (1 a 100):"));
        tentativas++;
        if (palpite === numero) {
            alert(`Parabéns! Você acertou em ${tentativas} tentativas.`);
            break;
        } else if (palpite < numero) {
            alert("Mais alto!");
        } else if (palpite > numero) {
            alert("Mais baixo!");
        } else {
            alert("Entrada inválida.");
        }
    }
}

// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

function palavrasUnicas(str) {
    const palavras = str.split(/\s+/);
    const unicas = [];
    for (let i = 0; i < palavras.length; i++) {
        let unica = true;
        for (let j = 0; j < unicas.length; j++) {
            if (palavras[i] === unicas[j]) {
                unica = false;
                break;
            }
        }
        if (unica) unicas.push(palavras[i]);
    }
    return unicas;
}

// Seção 2: Funções e Recursão


// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

function fatorial(n) {
    if (n < 0) throw new Error("n deve ser >= 0");
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}

// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    };
}

// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.hasOwnProperty(key)) {
            return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Seção 3: Arrays e Objetos Complexos
// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .slice() // para não modificar o array original
        .sort((a, b) => a.preco - b.preco)
        .map(produto => produto.nome);
}

// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

function agruparVendasPorCliente(vendas) {
    return vendas.reduce((acc, venda) => {
        if (!acc[venda.cliente]) {
            acc[venda.cliente] = 0;
        }
        acc[venda.cliente] += venda.total;
        return acc;
    }, {});
}

// 9. Conversão Entre Formatos
// Escreva duas funções:
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

function paresParaObjeto(pares) {
    const obj = {};
    for (const [chave, valor] of pares) {
        obj[chave] = valor;
    }
    return obj;
}

function objetoParaPares(obj) {
    const pares = [];
    for (const chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            pares.push([chave, obj[chave]]);
        }
    }
    return pares;
}

