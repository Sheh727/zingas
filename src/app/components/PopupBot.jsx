"use client";
import { useState } from "react";
import ChatBot from "react-chatbotify";



const PopupBot = () => {
   

  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1001,
          padding:  isOpen ? "10px 149px":"10px 15px",
          borderRadius: isOpen ?  "0px" :"50px",
          backgroundColor: "#f1ca02ff",
          color: "black",
          border: "none",
          cursor: "pointer"
        }}
      >
        {isOpen ? "Close Chat" : "Chat with us"}
      </button>

      
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "70px",
            right: "20px",
            width: "350px",
            height: "500px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            zIndex: 1000,
            overflow: "hidden"
          }}
        >
          <ChatBot   settings={{
    header: {
      title: (
        <div
          style={{
            cursor: "pointer",
            margin: 0,
            fontSize: 20,
            fontWeight: "bold"
          }}
        >
          Zingas
        </div>
      ),
      avatar: "https://yourdomain.com/avatar.png",
    
    },
    general: {
		primaryColor: "#131414ff",
		secondaryColor: "#fdfd01ff",
		fontFamily: "",
	  Color: "#000"
	},
    tooltip: {
		mode: "Disabled",
		text: "Zingas Chatbot",
       
	},
     notification: {
		disabled: true,
		
	},
  }}

styles={{
    botBubbleStyle: {
  backgroundColor: '#f0f0f0',
  color: '#333'
},
headerStyle: {
  color: '#000000',
  backgroundColor:'yellow' 
  
},
 tooltipStyle: {  color: '#000000'}, 


}}

  />
        </div>
      )}
    </>
  );
};

export default PopupBot;