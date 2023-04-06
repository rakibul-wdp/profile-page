# CipherSchools Assignment

Frontend code is inside `/client` and backend is inside `/server`. Frontend is made with React, vite TypeScript and sass and for backend NodeJs, Express is used with TypeScript and serverless framework. To make the API cost-effective, the application uses AWS Lambda functions to host the backend.

### Production URL:

- Frontend: https://dynamic-cajeta-249b91.netlify.app/
- Server: https://w0uqy5aj6g.execute-api.ap-south-1.amazonaws.com/dev

## Starting frontend locally

To run the frontend code on your local machine, follow these steps:

1. Clone the repository to your local machine and navigate to the client directory:

```shell
    git clone https://github.com/sumanbiswas7/cipherSchools-assignment.git
    cd client
```

2. Install the node_modules and run the dev server

```shell
npm i
npm run dev
```

## Starting server locally

To run the backend code on your local machine, follow these steps:

1. Clone the repository to your local machine and navigate to the server directory:

```shell
    git clone https://github.com/sumanbiswas7/cipherSchools-assignment.git
    cd server
```

2. Now before starting the server make sure to add your mongodb url in `.env` file like `.env.example`

```js
DB_URL =
  "mongodb+srv://<username>:<password>@<clustername>.baedtin.mongodb.net/<databasename>";
```

3. Install the node_modules and start the dev server

```shell
npm i
npm run dev
```

### Endpoints

- `/auth/signup`: receives email, password, name in request body to register the user
- `/auth/login`: receives email and password in request body to login the user
- `/auth/changepassword`: receives email and password and new password in request body to change the password
- `/user/update`: receives email and user properties in request body and updates the user
