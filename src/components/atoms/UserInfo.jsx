import React from 'react'

const UserInfo = ({username}) => {
  return (
      <div className="flex" >
			<span className="font-semibold text-2xl" >{username}</span>
		</div>
  );
}

export default UserInfo