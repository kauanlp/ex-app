## Criação de uma Network Docker

```bash
docker network create --driver bridge minha-rede
```

### Subindo o Banco de Dados (DB)

```bash
docker run -p 3306:3306 \
  --name db \
  -e "MYSQL_ROOT_PASSWORD=root-password" \
  -e "MYSQL_DATABASE=database" \
  -e "MYSQL_USER=user" \
  -e "MYSQL_PASSWORD=password" \
  --network minha-rede \
  -d mysql:5.7
```

### Subindo o Backend

```bash
docker build -t meu_backend .
docker run -d -p 3000:3000 --name meu_backend --network minha-rede meu_backend
```

### Subindo o Frontend

```bash
docker build -t meu_frontend .
docker run -d -p 80:80 --name meu_frontend --network minha-rede meu_frontend
```