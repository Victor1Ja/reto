# Kubernetes Deployment for NGINX, RestAppClima, and SavingsAccountApp

This guide will help you deploy three services (`nginx`, `RestAppClima`, and `SavingsAccountApp`) on a Kubernetes cluster.

## Prerequisites

- A running Kubernetes cluster
- `kubectl` installed and configured to interact with your cluster
- Docker images for `nginx`, `RestAppClima`, and `SavingsAccountApp` pushed to a container registry

## Steps

### 1. Create Kubernetes Manifests

You'll need to create Kubernetes deployment and service YAML files for each application.

### 2. Deploy NGINX

Apply the following manifests to deploy the NGINX service.

```bash
kubectl apply -f nginx-deployment.yaml
kubectl apply -f nginx-service.yaml
```

### 3. Deploy RestAppClima
Apply the following manifests to deploy the RestAppClima service.

``` bash
kubectl apply -f restappclima-deployment.yaml
kubectl apply -f restappclima-service.yaml
```
### 4. Deploy SavingsAccountApp
Apply the following manifests to deploy the SavingsAccountApp service.

```bash
kubectl apply -f savingsaccountapp-deployment.yaml
kubectl apply -f savingsaccountapp-service.yaml
```
### 5. Verify Deployments
To ensure that all deployments are successful, use the following command:

``` bash
kubectl get pods
```
You should see pods running for nginx, RestAppClima, and SavingsAccountApp.

### 6. Access the Services
If you have a LoadBalancer or NodePort service type, use the external IP or the node's IP with the allocated port to access the services.

```bash
kubectl get svc
```
This command will show you the details of the services, including the external IPs and ports.

## Conclusion
You have now successfully deployed nginx, RestAppClima, and SavingsAccountApp on your Kubernetes cluster.