# Ansible Virtual Machine

This server will be running Ansible and the Semaphore UI for Ansible. It will be the control node for Ansible.

10.0.0.18

## Monitoring

Node Exporter is running via docker compose and is exposed via http://10.0.0.18:9100 and consumed via Prometheus running on the monitoring server virtual machine
