
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(bodyParser.json());

//activa el cors
app.use(cors());
let users = [{ email: "keicherigo29@outlook.com", password: "123" }, { email: "", password: "" }];

app.get("/users", (req, res) => {
    return res.status(200).json({ message: "si abre" })
})

app.post('/register', (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'El usuario ya está registrado.' });
    }

    const newUser = { firstname, lastname, email, password };
    users.push(newUser);

    res.status(201).json({ message: 'Usuario registrado correctamente.' });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    console.log(email, password)

    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    res.status(200).json({ message: 'Inicio de sesión exitoso.' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
