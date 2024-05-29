# Jellyfin Virtual Machine

- IP address: 10.0.0.10

The Jellyfin media server is accessible at http://10.0.0.10:8096/

## Monitoring

Node Exporter is running via docker compose and is exposed via http://10.0.0.10:9100 and consumed via Prometheus running on the monitoring server virtual machine
