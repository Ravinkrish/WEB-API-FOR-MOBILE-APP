var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var ElectionResultSchema = new mongoose.Schema(
  {
    Name:String,
    EmailAddress:String,
    PhoneNumber:Number,
    Subject:String,
    OfficeAddress:String
},
{collection:"contact"});
mongoose.model('contact',ElectionResultSchema);
