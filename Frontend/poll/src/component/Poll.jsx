import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import {
  Answer,
  AnswerDiv,
  Card,
  MainCard,
  MainContainer,
  Question,
  CommentContainer,
  CommentBox,
  Comment,
  ReplyBox,
  ReplyButton,
  CommentInput,
  ReplyInput,
} from "./Poll.style";

const socket = io("http://localhost:4000");

const Poll = () => {
  const [poll, setPoll] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replyText, setReplyText] = useState("");
  const [currentCommentId, setCurrentCommentId] = useState(null);
  const [selectedPollId, setSelectedPollId] = useState(null);

  const fetchPoll = async () => {
    try {
      const token = localStorage.getItem("userId");
      if (!token) {
        throw new Error("No token found in local storage");
      }
      const response = await fetch("http://localhost:4000/fetchPoll", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      setPoll(data);
      if (data.length > 0) {
        setSelectedPollId(data[0]._id);
      }
    } catch (error) {
      console.error("Error fetching poll:", error);
    }
  };

  const fetchComments = async (pollId) => {
    try {
      const response = await fetch(`http://localhost:4000/getComments?pollId=${pollId}`);
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const addComment = async () => {
    try {
      const token = localStorage.getItem("userId");
      if (!token) {
        throw new Error("No token found in local storage");
      }
      const response = await fetch("http://localhost:4000/addComment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          pollId: selectedPollId,
          commentText: newComment,
        }),
      });
      const newCommentData = await response.json();
      setComments((prevComments) => [...prevComments, newCommentData]);
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const addReply = async () => {
    try {
      const token = localStorage.getItem("userId");
      if (!token) {
        throw new Error("No token found in local storage");
      }
      const response = await fetch("http://localhost:4000/replyToComment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          commentId: currentCommentId,
          replyText,
        }),
      });
      const updatedComment = await response.json();
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment._id === updatedComment._id ? updatedComment : comment
        )
      );
      setReplyText("");
      setCurrentCommentId(null);
    } catch (error) {
      console.error("Error replying to comment:", error);
    }
  };

  const UpdatePoll = async (pollId, optionId) => {
    try {
        const response = await fetch("http://localhost:4000/updatePoll", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                pollId: pollId,
                optionId: optionId
            }),
        });

        const result = await response.json();

        if (response.ok) {
            console.log("Poll updated successfully:", result);
        } else {
            console.error("Failed to update poll:", result.msg);
        }
    } catch (error) {
        console.error("Error while updating poll:", error);
    }
};

  useEffect(() => {
    fetchPoll();
    if (selectedPollId) {
      fetchComments(selectedPollId);
    }

    socket.on("newComment", (newComment) => {
      setComments((prevComments) => [...prevComments, newComment]);
    });

    socket.on("commentUpdated", (updatedComment) => {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment._id === updatedComment._id ? updatedComment : comment
        )
      );
    });

    return () => {
      socket.off("newComment");
      socket.off("commentUpdated");
    };
  }, [selectedPollId]);

  return (
    <MainContainer>
      <MainCard>
        {poll?.map((data) => (
          <Card key={data._id}>
            <Question>{data.question}</Question>
            {data?.options?.map((optiondata) => (
              <AnswerDiv key={optiondata._id} onClick={() => UpdatePoll(data._id, optiondata._id)}>
                <Answer>{optiondata.text}</Answer>
                <Answer>{optiondata.votes}</Answer>
              </AnswerDiv>
            ))}
            <CommentContainer>
              <CommentInput
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
              />
              <button onClick={addComment}>Submit Comment</button>
              <div>
                {comments
                  .filter((comment) => comment.pollId === data._id)
                  .map((comment) => (
                    <div key={comment._id}>
                      <Comment>{comment.commentText}</Comment>
                      <ReplyBox>
                        {comment.replies?.map((reply) => (
                          <Comment key={reply._id}>{reply.replyText}</Comment>
                        ))}
                        <ReplyInput
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder="Reply..."
                        />
                        <ReplyButton onClick={() => setCurrentCommentId(comment._id)}>
                          Reply
                        </ReplyButton>
                        {currentCommentId === comment._id && (
                          <button onClick={addReply}>Submit Reply</button>
                        )}
                      </ReplyBox>
                    </div>
                  ))}
              </div>
            </CommentContainer>
          </Card>
        ))}
      </MainCard>
    </MainContainer>
  );
};

export default Poll;
