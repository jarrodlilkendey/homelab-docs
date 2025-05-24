# Pihole Virtual Machine

- IP address: 10.0.0.17

Set up using this tutorial: https://youtu.be/FnFtWsZ8IP0?si=MtKTLepJfbyGnKgm

Installed on bare metal (no docker container) with https://docs.pi-hole.net/main/basic-install/

`sudo curl -sSL https://install.pi-hole.net | bash`

The pihole ui is accessible at http://10.0.0.17/admin

The admin password is stored in my password manager

https://pi-hole.net/

I did not update the DHCP settings on my router to pihole.

I changed the DNS provider via Windows 10 settings - https://developers.cloudflare.com/1.1.1.1/setup/windows/

I configured the alternate DNS provider to cloudflare in case the pihole VM or homelab goes down

Manage Local DNS records with https://www.youtube.com/watch?v=kKsHo6r4_rc
