const mongoose = require('mongoose');

const leaveRequestSchema = new mongoose.Schema({
  childId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'child',
    required: true
  },
  startDate: {
    type:String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  childName:{
    type:String,
    required:true
  },
  reason:{
    type:String,
    required:true
  }
});

const LeaveRequest = mongoose.model('LeaveRequest', leaveRequestSchema);
module.exports = LeaveRequest;
