
 //user profile structure.
type UserProfile = {
    id: number;
    username: string;
    settings?: {
        notifications?: boolean;
    };
};

// create three users
const user1: UserProfile = {
    id: 1,
    username: "martin",
    settings: {
        notifications: true
    }
};

const user2: UserProfile = {
    id: 2,
    username: "james"
};

const user3: UserProfile = {
    id: 3,
    username: "peter",
    settings: {}
};

// retrieve notification preferences, defaulting to false.
function isNotified(user: UserProfile): boolean {
    return user.settings?.notifications ?? false;
}

// display the notification status for each user.
console.log(`${user1.username}: ${isNotified(user1)}`);
console.log(`${user2.username}: ${isNotified(user2)}`);
console.log(`${user3.username}: ${isNotified(user3)}`);
