var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var EventResultSchema = new mongoose.Schema(
  {
    AchievementName:String,
    AchievementDate:String,
    Achievementlocation:String,
    NoofAchievements:Number,
    AchievementDetails:String,
    AchievementMoreImages:[]
},
{collection:"Achievement"});
mongoose.model('Achievement',EventResultSchema);
