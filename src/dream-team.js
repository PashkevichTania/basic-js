const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (typeof members === 'undefined' || members === null || members.length <= 0) {
        return false;
    } else {
        let result = []
        for (let member of members) {
            if (typeof (member) == 'string') {
                let arr = member.replace(/\s/g, '').toUpperCase().split('')
                result.push(arr[0])
            }
        }
        return result.sort().join('');
    }
}