var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var ElectionResultSchema = new mongoose.Schema(
  {
    Title:String,
    Date:String,
    Time:String,
    Address:String,
    Description:String,
    ExpectedGrowth:String,
    OtherChiefGuest:String,
    CanvasMoreImages:[]


},
{collection:"Canvas"});
mongoose.model('Canvas',ElectionResultSchema);
