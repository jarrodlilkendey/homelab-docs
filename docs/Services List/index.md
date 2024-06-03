# Services List

## Host Machine

| Machine               | Service                          | URI                   |
| --------------------- | -------------------------------- | --------------------- |
| Host Operating System | [Proxmox](http://10.0.0.12:8006) | http://10.0.0.12:8006 |

## Jellyfin VM

| Machine     | Service                                | URI                   |
| ----------- | -------------------------------------- | --------------------- |
| Jellyfin VM | [Jellyfin](http://10.0.0.10:8096)      | http://10.0.0.10:8096 |
| Jellyfin VM | [Node Exporter](http://10.0.0.10:9100) | http://10.0.0.10:9100 |

## Portainer VM

| Machine      | Service                                                                  | URI                    |
| ------------ | ------------------------------------------------------------------------ | ---------------------- |
| Portainer VM | [Portainer Admin UI](https://10.0.0.14:9443)                             | https://10.0.0.14:9443 |
| Portainer VM | [LearnToDroid.com Local Wordpress](http://10.0.0.14:3006/wp-admin)       | http://10.0.0.14:3006  |
| Portainer VM | [Programmablewealth.com Local Wordpress](http://10.0.0.14:3008/wp-admin) | http://10.0.0.14:3008  |
| Portainer VM | [Node Exporter](http://10.0.0.14:9100)                                   | http://10.0.0.14:9100  |

## Monitoring VM

| Machine       | Service                                | URI                   |
| ------------- | -------------------------------------- | --------------------- |
| Monitoring VM | [Prometheus](http://10.0.0.19:9090)    | http://10.0.0.19:9090 |
| Monitoring VM | [Alert Manager](http://10.0.0.19:9093) | http://10.0.0.19:9093 |
| Monitoring VM | [Uptime Kuma](http://10.0.0.19:3001)   | http://10.0.0.19:3001 |
| Monitoring VM | [Node Exporter](http://10.0.0.19:9100) | http://10.0.0.19:9100 |

## Ansible VM

| Machine    | Service                                    | URI                   |
| ---------- | ------------------------------------------ | --------------------- |
| Ansible VM | [Ansible Semaphore](http://10.0.0.18:3000) | http://10.0.0.18:3000 |
| Ansible VM | [Node Exporter](http://10.0.0.18:9100)     | http://10.0.0.18:9100 |

## Elastic VM

| Machine    | Service                               | URI                  |
| ---------- | ------------------------------------- | -------------------- |
| Elastic VM | [Kibana](http://10.0.0.9:5601)        | http://10.0.0.9:5601 |
| Elastic VM | [Node Exporter](http://10.0.0.9:9100) | http://10.0.0.9:9100 |

## Whishper VM

| Machine     | Service                          | URI                  |
| ----------- | -------------------------------- | -------------------- |
| Whishper VM | [Whishper](http://10.0.0.8:8082) | http://10.0.0.8:8082 |
