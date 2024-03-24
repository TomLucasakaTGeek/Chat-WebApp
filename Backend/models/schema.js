const mongoose = require('mongoose')
const zod = require('zod')

const userModel = zod.Schema({
    name: zod.string,
    email: zod.string,
})

module.exports = { userModel }