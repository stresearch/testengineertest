import React from 'react';
import PropTypes from 'prop-types';
import ProfileStatGroup from './ProfileStatGroup';
import { EditProfileButton } from '../../UI/Button';

const UserStatsHeader = ({ profile, owner }) => (
  <div className="profile-header-menu">
    <ul className="header-menu-list">
      <ProfileStatGroup label="Tweets" value={profile.tweets.length} />
      <ProfileStatGroup label="Following" value={profile.following.length} />
      <ProfileStatGroup label="Followers" value={profile.followers.length} />
      <ProfileStatGroup label="Likes" value={profile.likes.length} />
    </ul>
    {owner ? (
      <div className="profile-edit-button">
        <EditProfileButton primary>Edit Profile</EditProfileButton>
      </div>
    ) : null}
  </div>
);

UserStatsHeader.propTypes = {
  profile: PropTypes.object.isRequired,
  owner: PropTypes.bool.isRequired
};

export default UserStatsHeader;