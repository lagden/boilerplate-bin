# Boilerplate Bin

Boilerplate com `Bourne Shell script`, `Bourne-Again Shell script` e `Node.js script`.

Utilizados nos projetos:

- [Boilerplate Rest](https://github.com/lagden/boilerplate-rest)
- [Boilerplate GraphQL](https://github.com/lagden/boilerplate-gql)
- [Boilerplate Svelte](https://github.com/lagden/boilerplate-svelte)


## Como usar

⚠️ **Atenção!**

Esses scripts dependem de uma estrutura específica para que funcionem adequadamente.

**Exemplo:**

```shell
npx degit lagden/boilerplate-gql#main meu_app
cd meu_app
npx degit lagden/boilerplate-bin/files#main bin
npx degit lagden/boilerplate-envs/files#main ./ --force
npx degit lagden/boilerplate-docker-nodejs/files#main ./ --force
```


## Scripts

```
- helper - são scripts utilizados internamente por outros scripts
- local  - são scripts utilizados apenas local
- docker - são scripts utilizados no docker
```

---


### \_fn (helper)

Métodos utilizados pelos scripts.


### image (local)

Cria a imagem do projeto e faz um `push` para o **resgistry** configurado.


```
Usage: image [options]

Options:
  -e <production|staging>  Environment
  -h                       Show usage
```


### deploy (local)

O fluxo do **deploy**:

1. Carrega as variáveis de ambiente
2. Executa o script `image`
3. Cria o arquivo `docker-compose-{staging|production}.yml`
4. Sincroniza os arquivos com o servidor
5. Executa o `docker stack deploy` no servidor


```
Usage: deploy [options]

Options:
  -i                       Ignore build image
  -e <staging|production>  Environment
  -h                       Show usage
```


### gen_env (helper)

Esse script é utilizado em aplicações frontend.  
A função dele é gerar um arquivo **javascript** com as variáveis de ambiente.


### public (helper)

Esse script é utilizado em aplicações frontend.  
A função dele é criar a pasta `public` e copiar o conteúdo da pasta `static` para `public`.


### zera (local)

Remove `node_modules` e `package-lock.json` e instala pacotes novamente.


### pkg (local)

Atualiza para última versão todas as `dependencies` e `devDependencies` do arquivo **package.json**.  
Mas é preciso executar o `npm i` ou `zera` para instalar.


### start_local (local)

Carrega as variáveis de ambiente de **desenvolvimento** e inicia a aplicação.


### start (local)

Inicia o stack de **desenvolvimento** via **docker**.

```
Usage: start [options]

Options:
  -b            Build image
  -d            Run containers in the background
  -s <service>  Docker compose service name
  -h            Show usage
```


### stop (local)

Encerra o stack que foi inicializado via **docker** pelo script `start`.


### test_local (local)

Carrega as variáveis de ambiente de **teste** e executa o teste da aplicação.


### test (local)

Executa o teste do stack via **docker**

```
Usage: test [options]

Options:
  -b            Build image
  -s <service>  Docker compose service name
  -h            Show usage
```


### wait (docker)

Esse script é para garantir que os outros serviços estejam rodando antes de iniciar a aplicação.  
Veja o exemplo abaixo:

```yml
command: >
  /bin/ash -c "
    bin/wait db:3435;
    node server
  "
```

A aplicação só irá iniciar quando o `db` estiver respondendo na porta `3435`.


### watch (docker)

Esse script reinicia a aplicação caso ocorra alguma alteração.


### watch_local (local)

Igual `watch`, mas para rodar é necessário fazer algumas instalações e configurações.


#### entr

Se estiver rodando em **BSD**, **Mac OS**, e **Linux**, basta instalar o [entr](https://github.com/eradman/entr).


#### nodemon

Como o [entr](https://github.com/eradman/entr) não roda no **Windows**, existe uma solução alternativa.

Instale o [nodemon](https://github.com/remy/nodemon) global:

```shell
npm i -g nodemon
```

Crie o arquivo `.env-local` na raiz do projeto e insira:

```
WATCH_CMD="nodemon -e js,json --watch server --exec npm start"
```


## License

MIT © [Thiago Lagden](https://github.com/lagden)
