const express= require('express');
const app = express();

// webpage
app.get('/', (req, res) => {
    res.status(200).json({
        status: "success",
    });
});

// getUser
app.get('/api/user/:id', (req, res) => {
    res.status(200).json({ message: 'Success' });
})

// getAllUser
app.get('/api/users', (req, res) => {
    res.status(200).json({ message: 'Success' });
})

// createUser
app.post('/api/users', (req, res) => {
    const { name, phone, email, password } = req.body;

    if (!email || !name || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required.' });
    }

    const newUser = {name: 'John Doe', 
                    phone: '631-XXX-XXXX', 
                    id: 'johndoe000', 
                    email: 'john.doe@stonybrook.edu', 
                    password: '0000'}

    users.push(newUser);
    res.status(201).json(newUser);
})

// updateUser
app.put('/api/user/:id', (req, res) => {
    if(!req.params.id){
        res.status(404).json({})
    }
    //const { name, phone, email, password } = req.body; 
    
    //temp
    const name= 'Jane Doe'
    const phone= '631-YYY-YYYY'
    const password= '1234'

    const updatedUser = {
        name: name, 
        phone: phone, 
        password: password}

    res.status(201).json(updatedUser);
});

// getMap
app.get('/api/map/:email/:id', (req, res) => {
    res.status(200).json({ message: 'Success' });
})

// getAllMaps
app.get('/api/maps', (req, res) => {
    res.status(200).json({ message: 'Success' });
})

// createMap
app.post('/api/map', (req, res) => {
    const { email, name, chat, file, font, color, legend } = req.body;
    if (!file) {
        return res.status(400).json({ message: 'File is required.' });
    }
    const newMap = {
        name: name || 'myMap', 
        chat: [{}], 
        file: file || {},
        font: font || '',
        color: color || {},
        legend: legend || ''
    };

    res.status(201).json(newMap);
});

// updateMap
app.put('/api/map/:email/:id', (req, res) => {
    if(!req.params.email){
        res.status(404).json({})
    }
    if(!req.params.id){
        res.status(404).json({})
    }

    //const { email, name, chat, file, font, color, legend } = req.body;

    //temp
    const name= 'Updated Test Map';
    const chat= []
    const file= {}
    const font= 'Arial'
    const color= {}
    const legend= 'Updated legend'

    const updatedMap = {
        id: req.params.id,
        name: name,
        chat: chat, 
        file: file,
        font: font,
        color: color,
        legend: legend
    };

    res.status(200).json(updatedMap);
});

// deleteMap
app.delete('/api/map/:email/:id ', (req, res) => {
    if(!req.params.email){
        res.status(404).json({})
    }
    if(!req.params.id){
        res.status(404).json({})
    }

    const {file} = req.body;
    const mapId = req.params.id;
    if (!file) {
        return res.status(400).json({ message: 'File is required.' });
    }
    res.status(200).json({ message: 'File is required.' });
})


module.exports = app; 