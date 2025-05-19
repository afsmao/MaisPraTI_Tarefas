# MaisPraTI_Tarefas
Repositório de Listas de Tarefas para formação Desenvolvimento FullStack Junior

# Pré-requisitos
Node.js instalado em sua máquina.
Biblioteca prompt-sync instalada. Caso não esteja instalada, execute o comando abaixo:
npm install prompt-sync

# Como Executar
Clone este repositório:
git clone https://github.com/afsmao/MaisPraTI_Tarefas;
Execute o arquivo desejado com o Node.js:
node <nome_do_arquivo>.js
Siga as instruções exibidas no terminal.
Acessar Rarefas_01.js
node Tarefas_01.js

# Exercícios de JavaScript com Estruturas de Controle e Loops

Este repositório contém uma coleção de exercícios de programação em JavaScript focados no uso de estruturas de controle (if-else, switch-case) e loops (for, while, do-while). Os exercícios abordam desde verificações simples de números pares/ímpares até cálculos de IMC e geração da sequência de Fibonacci.

## Pré-requisitos

Antes de começar a executar e contribuir com estes exercícios, você precisará ter os seguintes aplicativos instalados em sua máquina:

1.  **Visual Studio Code (VS Code)**: Um editor de código fonte leve, porém poderoso.
    * Você pode baixar e instalar o VS Code a partir do site oficial: [https://code.visualstudio.com/](https://code.visualstudio.com/)

2.  **Node.js e NPM (Node Package Manager)**: O Node.js é um ambiente de tempo de execução JavaScript que permite executar JavaScript fora do navegador. O NPM é o gerenciador de pacotes padrão para Node.js e será usado para instalar dependências como o `prompt-sync`.
    * Você pode baixar e instalar o Node.js (a versão LTS é recomendada) a partir do site oficial: [https://nodejs.org/](https://nodejs.org/)
    * O NPM será instalado automaticamente com o Node.js. Você pode verificar a instalação abrindo o terminal e executando `node -v` e `npm -v`.

3.  **Git**: Um sistema de controle de versões distribuído para rastrear alterações no seu código.
    * Você pode baixar e instalar o Git a partir do site oficial: [https://git-scm.com/downloads](https://git-scm.com/downloads)
    * Você pode verificar a instalação abrindo o terminal e executando `git --version`.

## Configuração do Ambiente de Desenvolvimento

Siga estes passos para configurar seu ambiente e começar a trabalhar com os exercícios:

1.  **Instale o VS Code**, **Node.js** e **Git** conforme as instruções em "Pré-requisitos".

2.  **Abra a pasta do projeto no VS Code**:
    * Crie uma pasta no seu computador onde você deseja guardar os arquivos dos exercícios.
    * Abra o VS Code.
    * Vá em "Arquivo" (File) > "Abrir Pasta" (Open Folder) e selecione a pasta que você criou.

3.  **Instale a dependência `prompt-sync`**:
    * Abra o terminal integrado no VS Code (Terminal > Novo Terminal). Certifique-se de que o terminal esteja aberto na raiz da pasta do seu projeto.
    * Execute o seguinte comando para instalar o pacote `prompt-sync`, que permite interagir com o usuário através do terminal:
        ```bash
        npm install prompt-sync
        ```
    * Isso criará uma pasta `node_modules` e um arquivo `package-lock.json` no seu projeto.

## Executando os Exercícios

Para executar os arquivos de exercício em JavaScript, siga estes passos no terminal integrado do VS Code:

1.  **Navegue até a pasta do seu projeto** (se necessário, use o comando `cd`).

2.  **Execute um arquivo JavaScript** usando o comando `node` seguido do nome do arquivo. Por exemplo, para executar um arquivo chamado `exercicio1.js`, você usaria:
    ```bash
    node exercicio1.js
    ```
    O resultado da execução (prompts e outputs) será exibido diretamente no terminal.

## Disponibilizando os Exercícios no GitHub

Siga estes passos para adicionar seus exercícios a um repositório no GitHub:

1.  **Crie um Repositório Remoto no GitHub**:
    * Acesse o site do GitHub ([https://github.com/](https://github.com/)) e faça login na sua conta.
    * Clique no botão "+" no canto superior direito e selecione "New repository".
    * Dê um nome ao seu repositório (por exemplo, `exercicios-javascript`).
    * Você pode adicionar uma descrição (opcional).
    * Escolha se o repositório será público ou privado.
    * Você pode optar por não adicionar um README, `.gitignore` ou licença neste momento, pois faremos isso localmente.
    * Clique em "Create repository".
    * Na página do repositório criado, copie a URL do repositório (geralmente algo como `https://github.com/seu_usuario/exercicios-javascript.git` ou `git@github.com:seu_usuario/exercicios-javascript.git`).

2.  **Inicialize o Git Localmente**:
    * Abra o terminal integrado no VS Code (Terminal > Novo Terminal), dentro da pasta do seu projeto.
    * Execute o comando:
        ```bash
        git init
        ```
        Isso inicializará um novo repositório Git na sua pasta.

3.  **Adicione os Arquivos ao Staging Area**:
    * Para adicionar todos os arquivos do seu projeto (incluindo seus arquivos `.js` e o arquivo `README.md`), execute:
        ```bash
        git add .
        ```

4.  **Crie um Arquivo `.gitignore` (Recomendado)**:
    * Crie um novo arquivo chamado `.gitignore` na raiz do seu projeto.
    * Adicione a seguinte linha para ignorar a pasta `node_modules` (que não precisa ser versionada):
        ```
        node_modules/
        ```
    * Salve o arquivo `.gitignore`.
    * Se você já adicionou todos os arquivos antes de criar o `.gitignore`, pode ser útil remover o cache e adicionar novamente:
        ```bash
        git rm -r --cached .
        git add .
        ```

5.  **Comite suas Alterações**:
    * Execute o seguinte comando para criar o seu primeiro commit:
        ```bash
        git commit -m "Adiciona os exercícios iniciais de JavaScript e README"
        ```
        Use mensagens de commit claras e descritivas para futuras referências.

6.  **Adicione o Repositório Remoto ao seu Git Local**:
    * Use o comando `git remote add origin` seguido da URL que você copiou do GitHub:
        ```bash
        git remote add origin <URL_DO_SEU_REPOSITORIO_REMOTO>
        ```
        Substitua `<URL_DO_SEU_REPOSITORIO_REMOTO>` pela URL do seu repositório no GitHub.

7.  **Envie (Push) seus Commits para o Repositório Remoto**:
    * Execute o comando para enviar seu código para o GitHub:
        ```bash
        git push -u origin main
        ```
        Se o seu branch principal no GitHub for chamado `master`, use `git push -u origin master` em vez de `git push -u origin main`. O `-u` associa o seu branch local ao branch remoto para que você possa usar apenas `git push` nas próximas vezes.

Após seguir esses passos, seus exercícios de JavaScript estarão disponíveis no seu repositório do GitHub! Este arquivo `README.md` ajudará a explicar o propósito do repositório e como executar os códigos. Você pode expandir este README com mais informações sobre cada exercício, se desejar.
