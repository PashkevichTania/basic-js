const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if(!(members instanceof Array)) return false;
    if (members.length === 1) {
        if ( typeof members[0] != 'string') return false;
    }
    let result = []
        for (let member of members) {
            if (typeof (member) == 'string') {
                let arr = member.replace(/\s/g, '').toUpperCase().split('')
                result.push(arr[0])
            }
        }
        return result.sort().join('');
    }
