import express from 'express';

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("express server is listening on port 3000");
});

app.get("/", (req, res) => {
    res.send('hello from exrpess\n');
});

const users = [{
    id: '123',
    name: "john doe"
}, {
    id: '321',
    name: "person mcperson"
}];

app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === userId);
    res.send(user);
});

app.get("/users/", (req, res) => {
    res.send(users);
});

app.post("/users", (req, res)=> {
    console.log(req.body);
    const newUser = req.body;
    users.push(newUser);
    res.send(users);
});