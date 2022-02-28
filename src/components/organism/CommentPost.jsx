import React, { useState } from "react";
import CommentHeader from "../molecule/CommentHeader";

const CommentPost = ({ username, avatar, comment, replies }) => {
	const [showComment, setShowComment] = useState(true);
    const renderReplies = (replies) => {
        if (replies && replies.length > 0) {
            console.log(replies);
            for (const reply of replies) {  
				return (
					<CommentPost
						username={reply.author.name}
						avatar={reply.author.avatar}
						comment={reply.text}
						replies={reply.replies}
					/>
                );
                
            }
            for (const reply of replies) {
				renderReplies(reply.replies);
			}
            
		}
	};
	return (
		<>
			{showComment ? (
				<div
					className="flex flex-col space-y-5 ml-1"
					onClick={() => setShowComment(!showComment)}
				>
					<CommentHeader username={username} avatar={avatar} />
					<div className="p-1 border-l-2 border-slate-300 hover:border-blue-500 trasition-all ease-out-200">
						<span>{comment}</span>
					</div>
				</div>
			) : (
				<span
					className=" cursor-pointer hover:text-blue-500 "
					onClick={() => setShowComment(true)}
				>
					expand
				</span>
			)}
			{renderReplies(replies)}
		</>
	);
};

export default CommentPost;
