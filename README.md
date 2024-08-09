# Heatmap App

### Objetivo

A aplicação é um sistema que permite criar um mapa de calor em cima de uma imagem préviamente selecionada.

### Tecnologias e Ferramentas

- [Node.Js](https://nodejs.org/en)
- [React.Js](https://react.dev/)
- [Next.Js](https://nextjs.org/)
- [Heatmap.Js](https://www.patrick-wied.at/static/heatmapjs/)
- [html2canvas](https://html2canvas.hertzen.com/)

### Pré requisitos para rodar o projeto

- Node.Js (versão >= 18.19)

### Rodando o projeto localmente

Clone este repositório

        git clone git@github.com:larissaperinoto/heatmap-app.git

Instale as dependências

        npm install

Inicie a aplicação do cliente em modo de desenvolvimento

        npm run dev

Ou faça a inicialização padrão com o comando abaixo

        npm run build && npm start

Abra em seu navegador o endereço local da aplicação do cliente

        http://localhost:3000

### Inserindo novos dados

Os dados utilizados na aplicação simulam um JSON de saída do Elasticsearch. Para alterar os valores dos pontos de calor busque pelo arquivo **data.json** na raíz do projeto.

Os dados precisam seguir o seguinte padrão

        {
            hits: {
                hits: [
                    fields: {
                         "deepstream-msg":[
                            "291|317.41|219.78|467.849|480|person|AREA1",
                            "8|268.393|106.3454|316.347|200.22|chair|AREA1"
                        ]
                    }
                ]
            }
        }

Em **"deepstream-msg"** encontram-se as informações de objetos detectados e sua posição, que podem ser interpretados da seguinte forma:

        ID | minX | minY | maxX | maxY | objeto | região

