# Jellyfin Virtual Machine

- IP address: 10.0.0.16

The Jellyfin media server is accessible at http://10.0.0.16:8096/

Jellyfin is run as a docker container.

Update with:

- `docker pull jellyfin/jellyfin:latest`
- `reboot`
- `cd /home/jarrod/jellyfin`
- `docker compose down`
- `docker compose up -d`
- `docker ps`

## Monitoring

Node Exporter is running via docker compose and is exposed via http://10.0.0.16:9100 and consumed via Prometheus running on the monitoring server virtual machine
