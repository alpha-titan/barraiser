import React from 'react'
import Avatar from "../atoms/Avatar"
import UserInfo from "../atoms/UserInfo"

const CommentHeader = ({ username, avatar, text}) => {
  return (
      <div className=" flex space-x-5" >
          <Avatar url={avatar} />
          <UserInfo username={username} />
    </div>
  )
}

export default CommentHeader