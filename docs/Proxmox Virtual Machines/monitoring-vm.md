# Monitoring Server Virtual Machine

This server will be running Prometheus and Grafana

- IP address: 10.0.0.19

## Prometheus

Run using Docker Compose with an included configuration file.

http://10.0.0.19:9090/

## Alert Manager

Runs using the same Docker Compose file as Prometheus

http://10.0.0.19:9093/

## Uptime Kuma

Run using a Docker Compose file.

http://10.0.0.19:3001/

## Monitoring

Node Exporter is running via docker compose and is exposed via http://10.0.0.19:9100 and consumed via Prometheus running on the same virtual machine
