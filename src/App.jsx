import { useState } from "react";
import "./App.css";
import CommentPost from "./components/organism/CommentPost";
import { posts } from "../data/data";

const comment = {
	author: {
		name: "[deleted]",
		avatar: "https://robohash.org/Maybe_not",
	},
	text: "Goodbye nested discussions, see you in a year :(",
	replies: [
		{
			author: {
				name: "omegared9",
				avatar: "https://robohash.org/omegared9",
			},
			text: "I keep asking what the respawn timer is....never got a solid answer.",
		},
		{
			author: {
				name: "omegared9",
				avatar: "https://robohash.org/omegared9",
			},
			text: "I keep asking what the respawn timer is....never got a solid answer.",
		},
	],
};

function App() {
  const renderReplies = (comment) => {
    
		for (const reply of comment.replies) {
			renderReplies(reply);
			console.log(reply);
		}
	};
	return (
		<div className="w-[100vw] h-[100vh] ">
			<div className=" max-w-2xl mx-auto border border-slate-500 overflow-y-scroll">
				{/* {renderPosts(posts)} */}
				{
					<CommentPost
						comment={posts.text}
						username={posts.author.name}
            avatar={posts.author.avatar}
            replies={posts.replies}
          />
          
				}
			</div>
		</div>
	);
}

export default App;
