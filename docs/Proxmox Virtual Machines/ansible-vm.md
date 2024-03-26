# Ansible Virtual Machine

This server will be running Ansible and the Ansible Semaphore. It will be the control node for Ansible.

10.0.0.18

## Applications

Ansible Semaphore is running via Docker Compose the runs along with it's own Postgres database and is accessible at http://10.0.0.18:3000 (admin / changeme)

## Monitoring

Node Exporter is running via docker compose and is exposed via http://10.0.0.18:9100 and consumed via Prometheus running on the monitoring server virtual machine
