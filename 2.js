function isUsernameValid(username) {
    if (typeof(username) == 'string') {
        if (username.length >= 5 && username.length <= 9) {
            let matches = username.match(/([A-Z]+|[0-9]+|[!"#$%&'()*+,./:;<=>?@[\]^`{|}~]+)/g); // add last matches
            if (matches == null) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function isPasswordValid(passsword) {
    if (typeof(passsword) == 'string') {
        if (passsword.length == 10) {
            let matches = passsword.match(/([A-Z]+|[0-9]+|[!"#$%&'()*+,./:;<=>?@[\]^`{|}~]+|[a-z]+)/g); // add last matches
            if (matches != null) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

console.log(
    isUsernameValid('@wakwaw'),
    isUsernameValid('poEtri'),
    isUsernameValid('tiara'),
    isPasswordValid('p@ssW0rd99'),
    isPasswordValid('C0d3YourFuture!#')
);