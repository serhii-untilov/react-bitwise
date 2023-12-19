#/bin/bash
NODE_MAJOR=18
apt install sudo
usermod -aG sudo "$(whoami)"
usermod -aG wheel "$(whoami)"
sudo apt update -y
sudo apt upgrade -y
sudo apt install -y ca-certificates curl gnupg
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/nodesource.gpg
echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt update -y
sudo apt install nodejs -y
node -v
sudo apt install build-essential -y
npm install
