const mongooes = require("mongoose");

const blacklistTokenSchema = new mongooes.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24 hours in seconds
  },
});

module.exports = mongooes.model("BlackListToken", blacklistTokenSchema);
