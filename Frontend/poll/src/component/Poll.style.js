import style from "styled-components";

export const MainContainer = style.div`

     display: flex;
     justify-content:center;
     width:100%;
     height:100vh;
     background-color: red;

   
    
`;

export const MainCard = style.div`
     display: flex;
     flex-direction :column;
     justify-content:center;
     align-items: center;
     gap:10px;
    
    width:90%;
    background-color:navy;
    border-radius : 20px;
    margin:20px;
    // padding-top:150px;

    overflow:auto;

    
`;
export const Card = style.div`
    display: flex;
    flex-direction: column;
    justify-content : center;
    align-items:center;


    width:50%;
    height:50%;
    border-radius : 20px;

   
    background-color: gray;
`;

export const Question = style.span`
    color:white
    text-align: left;
    
`;

export const AnswerDiv = style.div`
    display:flex;
    justify-content : space-between;
    padding:10px;
    background-color:white;
    width:80%;
    margin:10px 0;
    text-align: left;
     border-radius : 10px;
      &:hover {
        background-color: darkgreen; /* Change the background color on hover */
        color: white; /* Optional: Change text color on hover */
    }
`;
export const Answer = style.span`
    color:black;
    padding-left :5px;
   
    
`;

export const CommentContainer = style.div`
  margin-top: 20px;
`;

export const CommentInput = style.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const ReplyBox = style.div`
  margin-top: 10px;
  padding: 10px;
  border-top: 1px solid #ccc;
`;

export const ReplyInput = style.input`
  width: calc(100% - 100px);
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const ReplyButton = style.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
`;

export const Comment = style.div`
  padding: 10px;
  background-color: #f9f9f9;
  margin-bottom: 10px;
  border-radius: 5px;
`;

