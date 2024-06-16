import FriendListItem from "../FriedListItem/FriendListItem";
import cssF from "./FriendList.module.css";

function FriendList({ friends }) {
  const friendsElements = friends.map((friend) => {
    return (
      <li key={friend.id} className={cssF.friendListWrapper}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    );
  });
  return <ul className={cssF.friendList}>{friendsElements}</ul>;
}

export default FriendList;
