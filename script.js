
import express from 'express';

const app = express();

app.use(express.json());

// GET 

app.get("/", (req, res) => {
    res.send(" success");

});

// POST


app.post("/signup", (req, res) => {
    console.log(req.body);

    res.send("Signup success");
});

// PUT 
app.put("/edit-user", (req, res) => {
    console.log(req.body);

    res.send(" updated success");
});

// DELETE 
app.delete("/delete-user", (req, res) => {
    res.send(" delete success");
});

// Server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
