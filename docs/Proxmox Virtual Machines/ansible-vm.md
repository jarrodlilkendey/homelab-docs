# Ansible Virtual Machine

This server will be running Ansible and the Ansible Semaphore. It will be the control node for Ansible.

10.0.0.18

## Applications

Ansible Semaphore is running via Docker Compose the runs along with it's own Postgres database and is accessible at http://10.0.0.18:3000 (admin / changeme)

The following VMs are accessible by the Ansible control node (10.0.0.18).

- 10.0.0.19 (Monitoring Server VM)
- 10.0.0.13 (Jellyfin Server VM)
- 10.0.0.14 (Portainer VM)
- 10.0.0.12 (Proxmox Host Machine)

The Ansible control node has been configured to uses the jarrod user with a password over SSH to access these nodes.

In the future I will set up a specific ansible user on all of these machines, that the Ansible control node will login as.

Also I will shift from user name and password SSH access to instead use a SSH access key.

The Ansible control user has access to the ansible VM's private key generated to control access to the private GitHub homelab-gitops repository.

### Ansible Playbooks

#### update-apt-packages.yaml

This playbook is used to update all Ubuntu packages across all of the Ubuntu Server VMs using apt.

This is scheduled to run daily at 7 AM.

## Monitoring

Node Exporter is running via docker compose and is exposed via http://10.0.0.18:9100 and consumed via Prometheus running on the monitoring server virtual machine
