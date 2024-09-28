## Vantagens do Multi-Stage Build em Aplicações Compiladas

Em aplicações de linguagem compilada, o uso de **multi-stage builds** permite separar o processo de compilação do ambiente de execução, tornando a imagem bem mais leve.

## Build e Execução da Aplicação com Multi-Stage Build

```bash
docker build -t multi-stage-app .
docker run -d -p 8081:5001 multi-stage-app
```