const HttpStatus = require('http-status-codes')
const Joi = require('joi')
const messageModel = require('../models/messageModel')

module.exports = {
    async addMessage(req, res){
        const schema = Joi.object().keys({
            author: Joi.string().required(),
            body: Joi.string().required(),
        })

        const { error, value } = schema.validate(req.body)

        if (error){
            return res.status(HttpStatus.BAD_REQUEST).json({ validationErrorMessage: error.details })
        }

        const newMessage = {
            author: value.author,
            body: value.body,
            createAt: new Date()
        }

        messageModel.create(newMessage)
            .then((message) => {
                res.status(HttpStatus.CREATED).json( { message: "Messaggio creato con successo", message})
            })
            .catch((err) => {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json( { message: "Messaggio non creato", err})
            })
    },

    async getAllMessages(req, res){
        await messageModel.find()
            .then( (message) =>{
                return res.status(HttpStatus.OK).json(message)
            })
            .catch((err) => {
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Si è verificato un errore, riprovare più tardi.", err })
            })
    }
}
