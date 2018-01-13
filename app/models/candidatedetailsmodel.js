var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var ElectionResultSchema = new mongoose.Schema(
  {
    CandidateName:String,
    Education:String,
    Party:String,
    OfficeAddress:String,
    CandidateLogo:String,
    CandidateSlogan:String,
    survival_info:{},
    Election_history:{}
},
{collection:"election"});
mongoose.model('election',ElectionResultSchema);
