# Homelab Security

## Homelab Security Risks

Data loss, no backup solution no disaster recovery solution , no offsite backup , theft, fire, disk corruption

No password manager, Passwords and user names kept in cloud synced docs

No monitoring to ensure homelab services are accessible over the internet. Run a port scanner in my public ip address

No automation of OS patching, no monitoring of OS versions, I don't update them manually either

No automation of application patching

Iot devices on home network- alexa, Google home
Tv on home network
Pcs on home network
Mobiles on home network
Gaming consoles on home network

No VP segregating homelab from other devices on the network

Consumer grade router/firewall protecting the network

Physical access to the laptop. Theft, data breach, etc.

No log collection for detecting intrusions

No password expiry policies

Use of user name and password for ssh instead of SSH keys
Root SSH access not disabled

I could keep media server off a VPN and the rest of the services on the VPN. Can this be done because I would want the bare metal server on the VPN.

Proxmox bridges / VLAN might be an alternative to a VPN

Scenario:
Key logger or ransomware Margaret infected a computer on the network and its trying to spread And infect more devices on the network
Homelab running a password manager how to secure it by segregating networks
