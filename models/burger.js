var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insert: function(value, cb) {
        orm.insertOne("burgers", "burger_name", value, function(res) {
            cb(res);
        });
    },
    update: function(values, location, cb) {
        orm.updateOne("burgers", values, location, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;