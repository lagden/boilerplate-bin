# Boilerplate Bin

Pode ser utilizado nos projetos:

- [Boilerplate Rest](https://github.com/lagden/boilerplate-rest)
- [Boilerplate GraphQL](https://github.com/lagden/boilerplate-gql)
- [Boilerplate Websocket](https://github.com/lagden/boilerplate-ws)
- [Boilerplate Svelte](https://github.com/lagden/boilerplate-svelte)


## Como usar

Utilize `@tadashi/boilerplate-create` para iniciar o projeto.

```
npm i -g @tadashi/boilerplate-create
boilerplate-create
```

ou

```
npx --yes @tadashi/boilerplate-create
```

E siga as instruções do prompt.


## Scripts

Índice:

- [Docker](#docker)
    - [deploy](#deploy)
    - [image](#image)
    - [image_ci](#image_ci)
    - [start](#start)
    - [stop](#stop)
    - [test](#test)
- [Helper](#helper)
    - [fn](#fn)
    - [wait](#wait)
- [Local](#local)
    - [start](#start-1)
    - [test](#test)
- [Node](#Node)
    - [build](#build)
    - [pkg.js](#pkg.js)
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
  -e <staging|production> Environment
  -i                      Ignore build image
  -h                      Show usage
```


#### image

Cria a imagem do projeto e faz um `push` para o **resgistry**.


```
Usage: image [options...]

Options:
  -e <staging|production> Environment
  -h                      Show usage
```


#### image_ci

Cria a imagem do projeto via CI/CD


```
Usage: image_ci [options...]

Options:
  -e <staging|production> Environment
  -h                      Show usage
```


#### start

Inicia o stack de **desenvolvimento** via **docker**.

```
Usage: start [options...]

Options:
  -b            Build image
  -d            Run containers in the background
  -h            Show usage
```


#### stop

Encerra o stack que foi inicializado via **docker** pelo script `start`.


#### test

Executa o teste do stack via **docker**

```
Usage: test [options...]

Options:
  -s <service>  Get exit code from service
  -b            Build image
  -h            Show usage
```


### Helper

#### fn

Métodos utilizados pelos scripts.


#### wait

Esse script é para garantir que os outros serviços estejam rodando antes de iniciar a aplicação.  
Veja o exemplo abaixo:

```yml
command: >
  /bin/ash -c "
    bin/helper/wait db:3456;
    node server
  "
```

A aplicação só irá iniciar quando o serviço `db` estiver respondendo na porta `3456`.


### Local

#### start

Carrega as variáveis de ambiente de **desenvolvimento** e inicia a aplicação.

```
Usage: $0 [options...]

Options:
  -e <development|staging|production>  Environment
  -b                                   Build and run the application
  -i                                   Ignore run
  -h                                   Show usage
```


#### test

Carrega as variáveis de ambiente de **teste** e executa o teste da aplicação.


### Node

#### build

Esse script é utilizado geralmente em aplicações frontend.  
Ele executa o `build` da aplicação dentro do **Dockerfile**


#### pkg.js

Atualiza para última versão todas as `dependencies` e `devDependencies` do arquivo **package.json**.  
Mas é preciso que seja instalado novamente via **npm**, **yarn** ou **pnpm**.


#### zera

Limpa todos os pacotes e reinstala novamente via **npm**, **yarn** ou **pnpm**.


```
  Usage: $0 [options...]

  Options:
    -m, --manager <manager>  Package manager: npm (default), yarn or pnpm
    -s, --shame              Shamefully hoist (only pnpm)
    -h, --help               Show usage
```


---


## License

MIT © [Thiago Lagden](https://github.com/lagden)
