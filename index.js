"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// Check database connection
prisma.$connect()
    .then(() => {
    console.log('Database connected successfully');
})
    .catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1);
});
// Welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the REST API');
});
const users_1 = __importDefault(require("./users"));
app.use('/users', users_1.default);
const posts_1 = __importDefault(require("./posts"));
app.use('/posts', posts_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
