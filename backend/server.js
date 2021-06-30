const app = require("./app");

const connectDatabase = require("./config/database")

const dotenv = require("dotenv");

// Handle uncaught Exceptions
process.on('uncaughtException', err => {
    console.log(`Error: ${err.stack}`);
    console.log("Shutting down due to uncaught exception")
    process.exit(1);
})

// setting up config file.
dotenv.config({ path: "backend/config/config.env"})

// connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})

// Handle unhadled promise rejection(like URI error mongodb:// -> mongod://)
process.on('unhandledRejection', err => {
    console.log(`Error: ${err.message}`);
    console.log('shutting down the server due to unhadled promise rejection');
    server.close(() => {
        process.exit(1);
    })
})
