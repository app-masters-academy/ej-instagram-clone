Sejam bem vindos ao treinamento "React para humanos" ministrado pela [App Masters](https://appmasters.io).

Antes de iniciarmos, é preciso realizar o setup do seu ambiente de desenvolvimento, instalando o node e criando um projeto react.

### Windows e linha de comando

Para criar, instalar pacotes e rodar os projetos react, é preciso utilizar o terminal de linha de comando. Se você estiver usando o Windows, terá que decidir entre usar o CMD, PowerShell, WSL ou GitBash, que são as opções de terminal para o Windows. Cada uma terá vantagens e desvatagens, então escolha um deles e vá em frente.

## Instalar o node

O primeiro passo para desenvolver com React é instalar Node no seu terminal, seja qual for seu sistema operacional. A versão atual boa para desenvolvimento é a 14, se já tiver o node instalado no seu computador, recomendamos atualizar para a 14.

Para saber se o node já está instalado no seu terminal, digite:

`node -v`

Se aparecer um número de versão, significa que você já tem o node instalado. Se der um erro, é porque ainda precisa instalar.

Para instalar (ou atualizar) seu node acesse a [página de download do node](https://nodejs.org/pt-br/download/) e clique no botão com a logomarca do seu sistema operacional para inciar o download. Em seguida siga as instruções da instalação.

Ao final da instalação, abra uma nova janela do terminal (é importante abrir o terminal após a instalação, e não usar o terminal aberto anteriormente), e digite novamente:

`node -v`

Se aparecer a versão do node, sucesso, deu tudo certo! 🎉🎉🎉

Se não conseguiu ver a versão, envie uma mensagem no canal do discord com as informações de erro para buscar ajuda.

## Criar um projeto React

Uma vez que o node está instalado você já pode criar um projeto react, para isso você usará o [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html), que irá baixar os arquivos necessários e criar o novo projeto.

Acesse a pasta onde a pasta do seu projeto ficará. Não é preciso criar uma pasta nova para o projeto, porque o comando a seguir já fará isso. Execute:

```
npx create-react-app projeto-react
cd projeto-react
npm start
```

O comando `npx` irá baixar os arquivos necessários e criar a pasta com o seu projeto. Os comandos seguintes serão para entrar na pasta e executar `npm start`, que é o comando para inicializar o React.

Uma janela no seu navegador deverá ser aberto automaticamente no endereço [http://localhost:3000/](http://localhost:3000/) exibindo a logo do React rodando, o que significa sucesso! 🎉🎉🎉

Se não conseguiu ver o projeto no navegador, envie uma mensagem no canal do discord com as informações de erro para buscar ajuda.

Sempre que for trabalhar em seu projeto react, você precisará abrir seu terminal, ir até a pasta do projeto e executar `npm start`.

Opcional:
- Criar um repositório para seu projeto

JavaScript
EcmaScript 6

Links:
- Node install
- Node global
- React create app