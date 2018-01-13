var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var EventResultSchema = new mongoose.Schema(
  {
    EventName:String,
    EventDate:String,
    Eventlocation:String,
    Noofpeoples:Number,
    EventDetails:String,
    EventCost:Number,
    EventMoreImages:[]
},
{collection:"event"});
mongoose.model('event',EventResultSchema);
