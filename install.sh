#!/bin/bash
set -e

echo "===================================="
echo " Installing kubectl and kind "
echo "===================================="

# Update system
sudo apt-get update -y
sudo apt-get install -y ca-certificates curl gnupg lsb-release apt-transport-https

echo "------------------------------------"
echo " Installing kubectl "
echo "------------------------------------"

# Download and install kubectl
KUBECTL_VERSION=$(curl -L -s https://dl.k8s.io/release/stable.txt)
curl -LO "https://dl.k8s.io/release/${KUBECTL_VERSION}/bin/linux/amd64/kubectl"

# Make executable and move to PATH
chmod +x kubectl
sudo mv kubectl /usr/local/bin/

# Verify kubectl installation
kubectl version --client --output=yaml

echo "------------------------------------"
echo " Installing kind "
echo "------------------------------------"

# Download and install kind
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.23.0/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind

# Verify kind installation
kind version

echo "------------------------------------"
echo " Installation completed successfully! "
echo "------------------------------------"

# Optional: Create a kind cluster (uncomment if needed)
# echo "Creating kind cluster..."
# kind create cluster --name dev-cluster --wait 60s
