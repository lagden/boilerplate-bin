# Boilerplate Bin

Boilerplate com `Bourne Shell script`, `Bourne-Again Shell script` e `Node script` para auxiliar.

- [Boilerplate Rest](https://github.com/lagden/boilerplate-rest)
- [Boilerplate GraphQL](https://github.com/lagden/boilerplate-gql)
- [Boilerplate Svelte](https://github.com/lagden/boilerplate-svelte)


## Como usar

O `bin` é depedente de uma estrutura específica para que funcione adequadamente.  
Os boilerplates mencionados acima já contém.

```shell
cd minha_api
npx degit lagden/boilerplate-bin bin
```

## Scripts


#### deploy (local)

Cria a imagem do projeto e envia para o `Registry` (opcional), gera o `docker-compose.yml` de produção ou staging, sincroniza os arquivos com servidor e executa o stack deploy.


#### image (local)

Cria a imagem do projeto e envia para o `Registry`.


#### gen_env (helper local)

Esse script é utilizado em aplicações frontend.
A função dele é gerar um arquivo javascript com as variáveis de ambiente.


#### pkg (local)

Atualiza para última versão todas as dependêcias e devDependências no arquivo `package.json`.  
A instalação tem que ser feito manualmente.


#### zera (local)

Remove os arquivos `node_modules` e `package-lock.json`.  
E instala módulos novamente.


#### start (local)

Inicia o stack no modo `desenvolvimento` via Docker Compose.


#### stop (local)

Encerra o stack que foi inicializado via Docker Compose.


#### test (local)

Executa o teste do stack via Docker Compose.


#### wait (local e server)

O `wait` serve para garantir que os serviços estejam rodando antes de iniciar a aplicação.  
Veja um exemplo abaixo:

```yml
command: >
  /bin/ash -c "
    bin/wait servico_de_db:3435;
    node server
  "
```

A aplicação só irá iniciar quando o `servico_de_db` estiver respondendo na porta `3435`.


#### watch (docker)

Fica observando os arquivos que estão nas pastas definidas na variável de ambiente (`WATCH_FOLDERS`).  
Quando algum arquivo é alterado, o `live reload` ocorre.


#### watch_local (local)

Igual o `watch`, mas funciona local.


**Atenção!**

O `watch_local` depende do [entr](https://github.com/eradman/entr) para funcionar.  
É possível ajustar o para utilizar o [nodemon](https://github.com/remy/nodemon).


## License

MIT © [Thiago Lagden](https://github.com/lagden)
