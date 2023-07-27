'use strict'
module.exports = async(obj)=>{
  try{
    if(obj){
      if(HP.AddJob) await HP.AddJob(obj)
      if(obj?.data?.name){
        if(CmdMap[obj.data.name]){
          await require('src/cmds/'+obj.data.name)(obj)
        }else{
          await HP.ReplyMsg(obj, {content: 'Oh dear! **'+obj.data.name+'** command not recognized...'})
        }
      }else{
        if(HP.RemoveJob) await HP.RemoveJob(obj.jobId)
      }
    }
  }catch(e){
    console.error(e);
  }
}
