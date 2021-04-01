import orders from '../models/orders.model.js';

export const ordersController = {
    orderRead: async (req, res) => {
        res.json(await orders.find())
    },
    
    orderCreate: async (req, res) => {
        res.json (await orders.create(req.body))
    }
}