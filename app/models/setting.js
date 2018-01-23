var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var ElectionResultSchema = new mongoose.Schema(
{
  SettingLogo:String,
  SettingSlogan:String
},
{collection:"setting"});
mongoose.model('setting',ElectionResultSchema);
