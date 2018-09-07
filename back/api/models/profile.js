const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    lastName: { type: String},
    firstName: { type: String },
    fields: {type: String},
    profileImage: { type: String  }
});

module.exports = mongoose.model('Profile', profileSchema);