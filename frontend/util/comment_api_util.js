export const fetchComments = () => (
    $.ajax({
        method: 'get',
        url: '/api/comments'
    })
)

export const createComment = comment => (
    $.ajax({
        method: 'post',
        url: '/api/comments',
        data: {comment}
    })
)