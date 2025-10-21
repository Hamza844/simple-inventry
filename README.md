# Simple Inventory API

A simple RESTful API for managing products and orders with inventory levels.  
Built with Node.js, Express, and SQLite. This project demonstrates clean backend architecture using controllers, routes, and models, and is ready for containerized deployment.

---

## Features

- Add new products
- View all products or fetch a product by ID
- Place orders (only if sufficient stock is available)
- View all orders
- Fully containerized with Docker

---

## Prerequisites

- **Node.js** (v18 or above)
- **npm** (comes with Node.js)
- **Docker** (for containerized deployment, optional)

---

## Getting Started

##  Clone the repository

```sh
git clone https://github.com/hamza844/simple-inventry.git
cd simple-inventry


## Install dependencies

npm install

###  Run the application locally

node src/app.js

The server will start on http://localhost:3000

-----------------------------------------------------------

### Running with Docker 

docker build -t simple-inventory .
### Run the Docker container
docker run -p 3000:3000 simple-inventory

-----------------------------------------------
## API Usage Examples
### Add a Product

curl -X POST http://localhost:3000/products \
-H "Content-Type: application/json" \
-d '{"name":"Mobile","price":25000,"quantity":15}'

### Get All Products

curl http://localhost:3000/products

### Get Product by ID
curl http://localhost:3000/products

### Place an Order

curl -X POST http://localhost:3000/orders \
-H "Content-Type: application/json" \
-d '{"productId":1,"quantityOrdered":2}'

### Get All Orders
curl http://localhost:3000/orders


# Containerization & Testing
After writing the code, I created a Docker container for this project and tested all endpoints successfully.
You can find the code and Docker setup here: (same URL)
GitHub Repo: hamza844/simple-inventry



** Next Steps 🚀**
Thanks for reviewing my work up to this point!
In the next phase, I will deploy this application on Kubernetes using pods.
For updates and professional networking, connect with me on LinkedIn:
https://www.linkedin.com/in/hamza-ejaz-619764292