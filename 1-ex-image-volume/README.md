## VOLUMES

```bash
docker build -t app-logs .
docker run -p 8080:5000 -v [DIRETORIO_SALVAR_LOGS]:/app/logs app-logs
```

> persistir um dado que não pode ser perdido
