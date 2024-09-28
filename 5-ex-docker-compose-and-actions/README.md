## Automatizando Build e Push de Imagens Docker

Utiliza a action `docker/build-push-action@v4` para:

- **Construir** a imagem a partir dos contextos `./backend` e `./frontend`.
- **Enviar** a imagem para um registro Docker com as tags:
  - `kauanlp/ex-simple-backend:latest`
  - `kauanlp/ex-simple-frontend:latest`

Isso automatiza a construção e o envio das imagens Docker do backend e frontend, facilitando o processo de deploy contínuo.