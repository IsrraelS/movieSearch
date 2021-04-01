import movie from '../models/movie.model.js';

export const movieController = {
    title: async (req, res) => {
        res.json (await movie.find(req.params,{
            title : req.body.title
        }))
    },

    id: async (req, res) => {
        res.json (await movie.findById(req.params.id,{
            id : req.body.id 
        }))
    },

    all: async (req, res) => {
        res.json (await movie.find())
    }
}