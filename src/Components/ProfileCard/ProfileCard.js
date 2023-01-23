

import { tweetPosts } from '../../Const/Const'
import CardDetail from '../CardDetail/CardDetail';

export default function ProfileCard() {
  return (
    <div className="App">

      {
        tweetPosts.map(profile => (
          <CardDetail
            profileData = {profile}
          />
        ))
      }
      
    </div>
  );
}


