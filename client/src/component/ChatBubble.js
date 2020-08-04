import React from 'react'

const ChatBubble = ({chat, username}) => {
    console.log(chat);
    if(chat.username !== username){
        return (
            <div style={{padding:15,marginTop:8,height:70,width:'50%', marginLeft:8,fontSize:16,fontSize:16,backgroundColor:'#00C6FF', borderRadius:10, color:'#FFF'}}>
                 <div style={{display:'flex', flexDirection:'row', marginTop:-7}}>
                   <p>{chat.username}</p><p style={{marginLeft:5}}>{chat.current_time}</p>
                 </div>
                 <div style={{marginTop:-8}}>
                   <p>{chat.data}</p>
                 </div>
            </div>
        )
    }
    return (
        <div style={{padding:15,marginTop:8,height:70,width:'50%', marginLeft:'48%',fontSize:16,backgroundColor:'#0078FF', borderRadius:10, color:'#FFF'}}>
             <div style={{display:'flex', flexDirection:'row', marginTop:-7}}>
               <p>{chat.username}</p><p style={{marginLeft:5}}>{chat.current_time}</p>
             </div>
             <div style={{marginTop:-8}}>
               <p>{chat.data}</p>
             </div>
        </div>
    )
}

export default ChatBubble;
