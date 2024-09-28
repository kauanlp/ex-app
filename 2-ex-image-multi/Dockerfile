# imagem base
FROM golang:1.20-alpine AS builder
WORKDIR /build
COPY . .
RUN go build -o app

# imagem final
FROM alpine
WORKDIR /app
COPY --from=builder /build/app .

EXPOSE 8080
CMD ["./app"]