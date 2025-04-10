const comments = require('./commentdb')
const users = require('../user/userdb')

function getComments(id)
{
    let result = []

    comments.forEach(comment => {
        if (comment.postId === id)
        {
            let commentator = users.find(user => user.id === comment.userId)
            result.push({
                comment: comment.content,
                commentator: commentator.fullName

            })
        }
    })

    return result;
}

module.exports = { getComments }