const express = require("express")
const app = express();
const userRoutes = require('./routes/routes');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

const PORT = 2020;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Mount the user route to "/users" path.
// This means that all our routes have to be prefixed with "/users"
// For examples: "/users/new"
app.use('/users', userRoutes);
