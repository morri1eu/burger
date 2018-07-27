var orm = require('./../config/orm')


var burger = {
    all: function (cb) {
        orm.selectAll('burgers', function (result) {
            console.log(result)
            cb(result)
        })
    },
    update: function(objVals,condition,cb){
        orm.updateOne('burgers',objVals,condition,function(result){
            cb(result)
        })
    },
    insert: function(cols,vals,cb){
        orm.insertOne('burgers', cols,vals,function(result){
            cb(result)
        })
    }


}
module.exports= burger