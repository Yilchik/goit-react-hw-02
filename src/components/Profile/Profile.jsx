import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.userCard}>
        <img src={image} alt="User avatar" className={css.userAvatar} />
        <p className={css.userName}>{name}</p>
        <p className={css.userInfo}>@{tag}</p>
        <p className={css.userInfo}>{location}</p>
      </div>
      <ul className={css.userStats}>
        <li className={css.userStatsInfo}>
          <span>Followers</span>
          <span className={css.userStatsData}>{stats.followers}</span>
        </li>
        <li className={css.userStatsInfo}>
          <span>Views</span>
          <span className={css.userStatsData}>{stats.views}</span>
        </li>
        <li className={css.userStatsInfo}>
          <span>Likes</span>
          <span className={css.userStatsData}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
