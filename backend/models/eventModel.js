const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
    event_name: {
        type: String,
        required: true
    },
    event_type: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    total_employees: {
        type: Number,
        required: true
    },
    attendees: [{
        employee_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
        },
        employee_name: {
          type: String,
          required: true
        }
    }]
}, { timestamps: true })

module.exports = mongoose.model('Event', eventSchema)