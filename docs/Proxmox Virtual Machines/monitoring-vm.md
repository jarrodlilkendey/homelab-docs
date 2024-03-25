# Monitoring Server Virtual Machine

This server will be running Prometheus and Grafana

10.0.0.19

## Prometheus

Run using Docker Compose with an included configuration file.

http://10.0.0.19:9090/

## Monitoring

Node Exporter is running via docker compose and is exposed via http://10.0.0.19:9100 and consumed via Prometheus running on the same virtual machine
