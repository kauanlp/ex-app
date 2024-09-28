## Utilizando Docker Compose

### Subindo os Serviços com Docker Compose

```bash
docker compose up -d --build
```

### Ambiente de Desenvolvimento com Arquivo `compose-dev.yml`

Separe o build em um arquivo `compose-dev.yml`:

```bash
docker compose -f compose.yml -f compose-dev.yml up -d --build
```

*Este comando executa as alterações do código do diretório 3-ex-network.*

### Retornando para a Versão do Repositório

```bash
docker compose -f compose.yml up -d --pull always
```

- `-f compose.yml`: Especifica apenas o arquivo `compose.yml`.
- `--pull always`: Garante que a imagem seja puxada do repositório remoto.