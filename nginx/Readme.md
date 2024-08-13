# Deploying a Custom NGINX Docker Image on Azure

This guide will help you deploy a custom NGINX Docker image to Azure, which includes a personalized HTML file. Follow the steps below to build, push, and deploy your Docker image.

## Prerequisites

- Docker installed on your local machine
- Azure CLI installed and configured
- An Azure Container Registry (ACR) set up
- An Azure Virtual Machine (VM) with Docker installed

## Steps

### 1. Create Project Directory

Start by creating a new directory for your project and navigating into it.

```bash
mkdir nginx-custom
cd nginx-custom
```

### 2. Create Dockerfile
Create a file named Dockerfile with the following content:

``` Dockerfile
FROM nginx
COPY index.html /usr/share/nginx/html/index.html
```
### 3. Create index.html
In the same directory, create an index.html file with the following content:

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reto 2</title>
</head>
<body>
    <h1>Reto 2</h1>
    <p>Bienvenido al segundo reto de despliegue con Docker y Registry.</p>
</body>
</html>
```
### 4. Build the Docker Image
Build your Docker image using the following command:

```bash
docker build -t <registry_name>.azurecr.io/nginx-personalizado .
```
Replace <registry_name> with the name of your Azure Container Registry.

### 1. Log in to Azure Container Registry
Log in to your Azure Container Registry (ACR) with Docker:

```bash
docker login <registry_name>.azurecr.io
```
### 6. Push the Docker Image to Azure
Push your Docker image to Azure Container Registry:

```bash
docker push <registry_name>.azurecr.io/nginx-personalizado
```
### 7. Create docker-compose.yml
Create a docker-compose.yml file with the following content:

```yaml
version: '3.3'
services:
  web:
    image: <registry_name>.azurecr.io/nginx-personalizado
    ports:
      - "80:80"
```
Replace <registry_name> with your actual Azure Container Registry name.

### 8. Deploy on Azure Virtual Machine
Copy your docker-compose.yml file to your Azure Virtual Machine, and then SSH into your VM. Once connected, navigate to the directory where the docker-compose.yml file is located and run:

```bash
docker-compose up -d
```
9. Access Your Web Page
Once the deployment is successful, open a web browser and enter the public IP address of your Azure VM. You should see a page displaying "Reto 2" and a welcome message.

Conclusion
You have now successfully deployed a custom NGINX Docker image on an Azure Virtual Machine using Azure Container Registry.