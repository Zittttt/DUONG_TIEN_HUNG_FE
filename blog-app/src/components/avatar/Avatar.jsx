import React, { memo } from "react";

function Avatar({ name }) {
  const avatarSrc = `https://ui-avatars.com/api/?name=${name.trim()}`;
  return (
    <img src={avatarSrc} alt="avatar" className="rounded-circle" width={60} />
  );
}

export default memo(Avatar);
