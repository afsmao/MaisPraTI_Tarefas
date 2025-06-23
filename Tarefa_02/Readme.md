# Tarefa 2 - MaisPraTI

Este projeto contém exemplos de JavaScript para praticar estruturas de controle, funções, recursão, arrays e objetos. Cada função está comentada e pronta para uso ou testes em ambiente de navegador ou Node.js.

## Como usar este código

### 1. Pré-requisitos

- **Editor de código:** Recomenda-se o [Visual Studio Code](https://code.visualstudio.com/).
- **Ambiente de execução:**  
  - Para funções que usam `prompt` e `alert` (ex: `jogoAdivinhacao`), execute em um navegador.
  - Para demais funções, pode usar Node.js ou o console do navegador.

### 2. Estrutura do Código

O arquivo `Tarefa_2.js` está dividido em três seções:

#### Seção 1: Estruturas de Controle Avançadas

- **ehDataValida(dia, mes, ano):** Verifica se uma data é válida, considerando anos bissextos.
- **jogoAdivinhacao():** Jogo de adivinhação de número aleatório entre 1 e 100.
- **palavrasUnicas(str):** Retorna um array com palavras únicas de uma string.

#### Seção 2: Funções e Recursão

- **fatorial(n):** Calcula o fatorial de `n` recursivamente.
- **debounce(fn, delay):** Retorna uma função que só executa após o tempo de espera sem novas chamadas.
- **memoize(fn):** Retorna uma versão com cache da função, acelerando chamadas repetidas.

#### Seção 3: Arrays e Objetos Complexos

- **nomesOrdenadosPorPreco(produtos):** Retorna nomes dos produtos ordenados por preço crescente.
- **agruparVendasPorCliente(vendas):** Agrupa vendas por cliente, somando os totais.
- **paresParaObjeto(pares):** Converte array de pares em objeto.
- **objetoParaPares(obj):** Converte objeto em array de pares.

### 3. Como testar cada função

#### No navegador

1. Abra o arquivo `Tarefa_2.js` no VS Code.
2. Copie o código desejado para o console do navegador (F12).
3. Execute exemplos, por exemplo:
    ```javascript
    ehDataValida(29, 2, 2024); // true
    palavrasUnicas("olá olá mundo mundo"); // ["olá", "mundo"]
    ```

#### No Node.js

1. Instale o Node.js se necessário.
2. Execute no terminal:
    ```
    node Tarefa_2.js
    ```
3. Adicione `console.log` para testar funções, por exemplo:
    ```javascript
    console.log(fatorial(5)); // 120
    ```

### 4. Observações

- Funções que usam `prompt` e `alert` (como `jogoAdivinhacao`) só funcionam no navegador.
- Para testar debounce e memoize, crie funções de exemplo e observe o comportamento.

---

**Autor:** Anderson  
**Projeto:** Exercícios MaisPraTI - Tarefa 2  