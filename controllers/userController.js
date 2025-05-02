const db = require("../db/queries")

const userController = {
    // 1) userController method 1.
    getUsernames: (req, res) => {
        db.getAllUsernames()
          .then(usernames => {
            console.log(usernames);
            res.send(`Hello: ${usernames.join(', ')}`); // Process the data as needed
          })
          .catch(err => {
            // Handle the error appropriately (e.g., send an error response)
            console.error("Failed to fetch usernames in controller:", err);
            res.status(500).send("Error fetching user data.");
          });
      },

    // 2) userController method 2
    newUserForm: (req, res) => {
      const data = { message: "Hello from express server" };
      res.render("index", data); // Assuming you have index.ejs in your views directory
    },

    // 2) userController method 3
    createUser: (req, res) => {
      console.log("username to be saved: ", req.body.username);
      const username = req.body.username;
      db.insertUsername(username)
        .then(() => {
            console.log("Username saved!");
            res.render("index", {username: username})
        })
        .catch(err => {
            console.log("Failed to insert username:", err)
        })

    }
  };

  module.exports = userController;
