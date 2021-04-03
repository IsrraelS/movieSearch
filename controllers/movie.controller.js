import movie from '../models/movie.model.js';

export const movieController = {
    title: async (req, res) => {
        res.json (await movie.findOne({title:req.params.title}))
    },

    id: async (req, res) => {
        res.json (await movie.findById({_id:req.params.id}))
    },

    all: async (req, res) => {
        res.json (await movie.find())
    }
}