import { Profile } from "./Profile";
import { FriendsList } from "./FriendsList";
import { TransactionHistory } from "./TransactionHistory";
import friends from './friends.json';
import userData from './userData.json';
import transactions from './transactions.json';

        
    
    export const App = () => {
      return (
        <>
          <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}
          />
          <FriendsList 
            friends={friends}
          />
          <TransactionHistory items={transactions} />
        </>
      );
    };
    