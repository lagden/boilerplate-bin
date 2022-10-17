# Boilerplate Bin

Boilerplate com `Bourne Shell script`, `Bourne-Again Shell script` e `Node.js script`.

Utilizados nos projetos:

- [Boilerplate Rest](https://github.com/lagden/boilerplate-rest)
- [Boilerplate GraphQL](https://github.com/lagden/boilerplate-gql)
- [Boilerplate Websocket](https://github.com/lagden/boilerplate-ws)
- [Boilerplate Svelte](https://github.com/lagden/boilerplate-svelte)


## Como usar

⚠️ **Atenção**

Esses scripts dependem de uma estrutura específica para que funcionem adequadamente.

**Exemplo:**

```shell
cd meu_projeto
npx tiged lagden/boilerplate-bin/files#main bin --force
```


## Scripts

Índice:

- [Docker](#docker)
    - [deploy](#deploy)
    - [image](#image)
    - [start](#start)
    - [stop](#stop)
    - [test](#test)
    - [watch](#watch)
- [Helper](#helper)
    - [fn](#fn)
    - [wait](#wait)
- [Local](#local)
    - [start](#start-1)
    - [test](#test)
- [Node](#Node)
    - [envs.js](#envs)
    - [pkg.js](#pkg.js)
    - [prod.js](#prod.js)
    - [zera](#zera)

---

### Docker

#### deploy

O fluxo do **deploy**:

1. Carrega as variáveis de ambiente
2. Executa o script `image`
3. Cria o arquivo `docker-compose-{VERSION}.yml`
4. Sincroniza os arquivos com o servidor
5. Executa o `docker stack deploy` no servidor


```
Usage: deploy [options...]

Options:
  -e <qa|staging|production> Environment
  -i                         Ignore build image
  -h                         Show usage
```


#### image

Cria a imagem do projeto e faz um `push` para o **resgistry**.


```
Usage: image [options...]

Options:
  -e <qa|staging|production> Environment
  -h                         Show usage
```


#### start

Inicia o stack de **desenvolvimento** via **docker**.

```
Usage: start [options...]

Options:
  -b            Build image
  -d            Run containers in the background
  -s <service>  Docker compose service name
  -h            Show usage
```


#### stop

Encerra o stack que foi inicializado via **docker** pelo script `start`.


#### test

Executa o teste do stack via **docker**

```
Usage: test [options...]

Options:
  -b            Build image
  -s <service>  Docker compose service name
  -h            Show usage
```


#### watch

Esse script faz o **reload** da aplicação.


### Helper

#### fn

Métodos utilizados pelos scripts.


#### wait

Esse script é para garantir que os outros serviços estejam rodando antes de iniciar a aplicação.  
Veja o exemplo abaixo:

```yml
command: >
  /bin/ash -c "
    bin/wait db:3435;
    node server
  "
```

A aplicação só irá iniciar quando o serviço `db` estiver respondendo na porta `3435`.


### Local

#### start

Carrega as variáveis de ambiente de **desenvolvimento** e inicia a aplicação.

```
Usage: start [-wb]

Options:
  -w     Watch and reload application
  -b     Just build the application
  -h     Show usage
```

⚠️ **Atenção**

Para que a opção `-w` funcione, é necessário fazer algumas instalações e configurações.

##### entr (deprecated)

Se estiver rodando em **BSD**, **Mac OS**, e **Linux**, basta instalar o [entr](https://github.com/eradman/entr).


##### nodemon (deprecated)

Como o [entr](https://github.com/eradman/entr) não roda no **Windows**, existe uma solução alternativa.

Crie o arquivo `.env-local` na raiz do projeto e insira:

```
WATCH_LOCAL_CMD="yarn dlx nodemon -e js,json --watch server --exec npm start"
```

ou

```
WATCH_LOCAL_CMD="npx nodemon -e js,json --watch server --exec npm start"
```


#### test

Carrega as variáveis de ambiente de **teste** e executa o teste da aplicação.


### Node

#### envs.js

Esse script é utilizado geralmente em aplicações frontend.  
A função dele é gerar um arquivo **javascript** com as variáveis de ambiente.


#### pkg.js

Atualiza para última versão todas as `dependencies` e `devDependencies` do arquivo **package.json**.  
Mas é preciso que seja instalado novamente via **npm** ou **yarn**.


#### prod.js

Remove as `devDependencies` do arquivo **package.json**.  
Isso ocorre apenas no momento do build da imagem de `production` ou `stating`.


#### zera

Limpa todos os pacotes e reinstala novamente via **npm**, **yarn** ou **pnpm**.


```
Usage: zera [options...]

Options:
  -m, --manager <manager>  Package manager: npm (default), yarn or pnpm
  -h, --help               Show usage
```


---


## License

MIT © [Thiago Lagden](https://github.com/lagden)
