# Git Resources

## How to Clone a Private GitHub Repository via SSH

Step 1: Generate an SSH private and public key

```
ssh-keygen -C github
```

Step 2: Add a new SSH key into the GitHub settings under SSH keys by copying the pub key contents

https://github.com/settings/keys

Step 3: clone the repo

```
git clone git@github.com:programmablewealth/homelab-gitops.git
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/4E7-2cIcF2U?si=4AE6x0Ma0fmCL5lv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

https://www.youtube.com/watch?v=4E7-2cIcF2U
