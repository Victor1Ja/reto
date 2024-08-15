# Kubernetes Deployment for NGINX and SavingsAccountApp

This guide will help you deploy three services (`nginx` and `SavingsAccountApp`) on a Kubernetes cluster.

## Prerequisites

- A running Kubernetes cluster
- `kubectl` installed and configured to interact with your cluster
- Docker images for `nginx` and `SavingsAccountApp` pushed to a container registry

## Steps on Docker side
Build and publish the Docker images for `nginx`, `RestAppClima`, and `SavingsAccountApp` to a container registry.
example:
```bash
cd RestAppClima
# Step 1: Build the Docker image
docker build -t savings-account-app:1.0.0 .

# Step 2: Login to Azure Container Registry
docker login myregistry.azurecr.io

# Step 3: Tag the Docker image
docker tag savings-account-app:1.0.0 myregistry.azurecr.io/savings-account-app:1.0.0

# Step 4: Push the Docker image to Azure Container Registry
docker push myregistry.azurecr.io/savings-account-app:1.0.0
```

## Steps on Kubernetes side

### 1. Install kubeclt
Kubectl is a command-line tool that allows you to run commands against Kubernetes clusters. You can install it using the following command:

[Docs Here](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)

### 1. Connect to your Kubernetes Cluster
Download the kubeconfig file from your Kubernetes cluster and set the `KUBECONFIG` environment variable to point to the file.

```bash
export KUBECONFIG=/path/to/kubeconfig
```

### 1. Check the Cluster Status
Run the following command to check the status of your Kubernetes cluster:

```bash
kubectl cluster-info
```
If u see the cluster information, you are connected to the cluster.


### 1. Create Kubernetes Manifests

You'll need to create Kubernetes deployment and service YAML files for each application.

### 2. Deploy NGINX

Apply the following manifests to deploy the NGINX service.

```bash
kubectl apply -f nginx-deployment.yaml
kubectl apply -f nginx-service.yaml
```

### 4. Deploy SavingsAccountApp
Apply the following manifests to deploy the SavingsAccountApp service.

```bash
kubectl apply -f database-full-deployment.yaml
kubectl apply -f savingsaccountapp-full-deployment.yaml
```
### 5. Verify Deployments
To ensure that all deployments are successful, use the following command:

``` bash
kubectl get pods
```
You should see pods running for nginx and SavingsAccountApp service and database.

### 6. Access the Services
If you have a LoadBalancer or NodePort service type, use the external IP or the node's IP with the allocated port to access the services.

```bash
kubectl get svc
```
This command will show you the details of the services, including the external IPs and ports.

## Conclusion
You have now successfully deployed nginx, RestAppClima, and SavingsAccountApp on your Kubernetes cluster.