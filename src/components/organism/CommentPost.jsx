import React, { useState } from "react";
import CommentHeader from "../molecule/CommentHeader";

const CommentPost = ({ username, avatar, comment, replies }) => {
	const [showComment, setShowComment] = useState(true);
	return (
		<>
			{showComment ? (
				<div className="flex flex-col space-y-5 ml-1">
					<CommentHeader username={username} avatar={avatar} />
					<div
						className="p-1 border-l-2 border-slate-300 hover:border-blue-500 trasition-all ease-out-200"
						onClick={() => setShowComment(!showComment)}
					>
						<span>{comment}</span>
					</div>
					{replies &&
						replies.length > 0 &&
						replies.map((reply, idx) => (
							<div className={`ml-${idx + 3}`}>
								<CommentPost
									username={reply.author.name}
									avatar={reply.author.avatar}
									comment={reply.text}
									replies={reply.replies}
								/>
							</div>
						))}
				</div>
			) : (
				<span
					className=" cursor-pointer hover:text-blue-500 "
					onClick={() => setShowComment(true)}
				>
					expand
				</span>
			)}
		</>
	);
};

export default CommentPost;
