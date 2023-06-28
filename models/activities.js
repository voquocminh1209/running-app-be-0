const mongoose = require("mongoose")
var uniqueValidator = require("mongoose-unique-validator")

const moment = require("moment")


// Schema là lược đồ database
let activities_schema = mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    title:{
        type: String,
        default:""
    },
    discription:{
        type :String,
        default:""
    },
    date:{
        type: Date,
        default:  Date.now() // + 25200000 // date.now ở múi giờ UTC 00:00 , cộng thêm 25200000 milisercond ra múi giờ UTC +07:00
    },
    record:{
        activity:{
            type: String,
            default:""
        },
        level:{
            type: String,
            default: ""
        },
        distance:{
            type: Number,
            default: 0
        },
        totalTime:{
            type: Number,
            default: 0
        },
        avgPace:{
            type: Number,
            default: 0
        },
        calo:{
            type: Number,
            default: 0
        }
    },
    map:{
        routes:{
            type:Object,
            default: null
        },
        markerOnRoute:{
            type:Object,
            default: null
        },
        region:{
            type:Object,
            default: null
        }
    }
})

// Xác thực Unique trường duy nhất)
activities_schema.plugin(uniqueValidator)

exports.Activities = mongoose.model("Activities", activities_schema);

