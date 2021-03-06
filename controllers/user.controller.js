import user from '../models/user.model.js';

export const userController = {
    read: async (req, res) => {
        res.json (await user.find()) 
    },

    create: async (req, res) => {
        res.json (await user.create(req.body))
    },

    update: async (req, res) => {
        res.json (await user.findByIdAndUpdate(req.params.id,{
            id : req.body.id,
            name : req.body.name,
            lastname: req.body.lastname,
            email : req.body.email,
            dni : req.body.dni,
            password : req.body.password
        }))
    },

    delete: async (req, res) => {
        res.json (await user.findByIdAndDelete(req.params.id))
    },

    login: async (req, res) =>{
        const userDataBase = await user.find()
            if (userDataBase.email === req.headers.email && userDataBase.password === req.headers.password){    
                res.sendStatus(200)
            } else {
                res.sendStatus(401)
            }
    } 
}    