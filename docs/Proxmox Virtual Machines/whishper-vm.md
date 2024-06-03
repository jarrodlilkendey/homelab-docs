# Whishper Virtual Machine

This server will be running Whishper used for audio transcription

- IP address: 10.0.0.8

## Whishper Installation

https://whishper.net/guides/install/

http://10.0.0.8:8082/

```
curl -o docker-compose.yml https://raw.githubusercontent.com/pluja/whishper/main/docker-compose.yml && \
curl -o .env https://raw.githubusercontent.com/pluja/whishper/main/example.env && \
curl -o nginx.conf https://raw.githubusercontent.com/pluja/whishper/main/nginx.conf
mkdir -p ./whishper_data/libretranslate/{data,cache} && \
chown -R 1032:1032 whishper_data/libretranslate
curl -fsSL -o docker-compose.override.yml https://raw.githubusercontent.com/pluja/whishper/main/docker-compose.ferret.yml
docker-compose up -d --pull=always
```
