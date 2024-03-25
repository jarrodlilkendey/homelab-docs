# Jellyfin Virtual Machine

10.0.0.13

The Jellyfin media server is accessible at http://10.0.0.13:8096/

## Monitoring

Node Exporter is running via docker compose and is exposed via http://10.0.0.13:9100 and consumed via Prometheus running on the monitoring server virtual machine
