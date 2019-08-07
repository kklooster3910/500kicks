export const fetchLikes = () => (
    $.ajax({
        method: 'get',
        url: '/api/likes'
    })
);

export const createLike = like => (
    $.ajax({
        method: 'post',
        url: '/api/likes',
        data: { like: like }
    })
);

export const removeLike = id => (
    $.ajax({
        method: 'delete',
        url: `/api/likes/${id}`
    })
)

// export const fetchLike = id => (
//     $.ajax({
//         method: 'get',
//         url: `/api/likes/${id}`
//     })
// );

// updateLike
