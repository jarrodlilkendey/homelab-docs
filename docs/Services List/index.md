# Services List

## Host Machine

| Machine               | Service                          | URI                   |
| --------------------- | -------------------------------- | --------------------- |
| Host Operating System | [Proxmox](http://10.0.0.12:8006) | http://10.0.0.12:8006 |

## Jellyfin VM

| Machine     | Service                                | URI                   |
| ----------- | -------------------------------------- | --------------------- |
| Jellyfin VM | [Jellyfin](http://10.0.0.13:8096)      | http://10.0.0.13:8096 |
| Jellyfin VM | [Node Exporter](http://10.0.0.13:9100) | http://10.0.0.13:9100 |

## Portainer VM

| Machine      | Service                                                         | URI                   |
| ------------ | --------------------------------------------------------------- | --------------------- |
| Portainer VM | [Portainer Admin UI](http://10.0.0.14:9443)                     | http://10.0.0.14:9443 |
| Portainer VM | [Uptime Kuma](http://10.0.0.14:3001/)                           | http://10.0.0.14:3001 |
| Portainer VM | [LearnToDroid.com Local Wordpress](http://10.0.0.14:3006)       | http://10.0.0.14:3006 |
| Portainer VM | [Programmablewealth.com Local Wordpress](http://10.0.0.14:3008) | http://10.0.0.14:3008 |
| Portainer VM | [Node Exporter](http://10.0.0.14:9100)                          | http://10.0.0.14:9100 |

## Monitoring VM

| Machine       | Service                                | URI                   |
| ------------- | -------------------------------------- | --------------------- |
| Monitoring VM | [Prometheus](http://10.0.0.19:9090)    | http://10.0.0.19:9090 |
| Monitoring VM | [Node Exporter](http://10.0.0.19:9100) | http://10.0.0.19:9100 |

## Ansible VM

| Machine    | Service                                    | URI                   |
| ---------- | ------------------------------------------ | --------------------- |
| Ansible VM | [Ansible Semaphore](http://10.0.0.18:3000) | http://10.0.0.18:3000 |
| Ansible VM | [Node Exporter](http://10.0.0.18:9100)     | http://10.0.0.18:9100 |