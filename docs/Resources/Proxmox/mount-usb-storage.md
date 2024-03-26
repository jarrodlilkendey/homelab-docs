# How to Mount USB Storage in Proxmox Virtual Machines

<iframe width="560" height="315" src="https://www.youtube.com/embed/eS4SNodCTcI?si=lbKnC0Mc_qbCh5m2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

https://www.youtube.com/watch?v=eS4SNodCTcI

<iframe width="560" height="315" src="https://www.youtube.com/embed/a3QTaV4Cg7M?si=tKOtfD-MoqKTWlDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

https://www.youtube.com/watch?v=a3QTaV4Cg7M

https://www.reddit.com/r/Proxmox/comments/yxkn41/add_harddrive_again_to_proxmox_without_wiping_it/

https://www.reddit.com/r/Proxmox/comments/10spjwj/easiest_way_to_mount_usb_drive_proxmox_7/

Use USB passthrough.

Try removing from host and storage
Comment out via fstab on host
Pass it through via usb only
Handle mount on jellyfin vm

sgdisk -N 1 /dev/sda
mkfs.ext4 /dev/sda1

ls -l /dev/disk/by-uuid/\*
c022ab0a-e154-4e11-ac69-714b9adf48d7

mkdir /mnt/usb-drive
nano /etc/fstab
add line /dev/disk/by-uuid/c022ab0a-e154-4e11-ac69-714b9adf48d7 /mnt/usb-drive ext4 defaults 0
mount -a
systemctl daemon-reload

On vm:

sudo lsblk -o NAME,FSTYPE,SIZE,MOUNTPOINT,LABEL
sudo mount /dev/sdc1 /media -t ext4

cd /media to see the files
