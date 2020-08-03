import React from 'react'

const ChatBubble = ({chat}) => {
    console.log(chat);
    return (
        <div style={{padding:10, display:'flex', flexDirection:'column', width:700,marginLeft:35,marginTop:8,fontSize:13,backgroundColor:'#ed2f65', borderRadius:10, color:'#FFF'}}>
             <div style={{display:'flex', flexDirection:'row', marginTop:-15}}>
                 <p>Tony Madafaka</p><p style={{marginLeft:5}}>9:12pm</p>
             </div>
             <div style={{marginTop:-25}}>
               <p>{chat}</p>
             </div>
        </div>
    )
}

export default ChatBubble;
