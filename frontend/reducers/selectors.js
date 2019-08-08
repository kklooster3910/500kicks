export const fetchProfilePhotos = (state, user) => {
    // debugger;
    if (!user) {
        return []
    };
    return user.photo_ids ? user.photo_ids.map( id => state.entities.photos[id]) : [];
};

export const fetchPhotoLikes = (state, photo) => {
    let photoLikes;
    if (photo.like_ids.length > 0) {
        photoLikes = photo.like_ids.map(id => state.entities.likes[id])
    }
    return photoLikes
}

export const fetchPhotoComments = (state, photo) => {
    // debugger;
    return photo.comment_ids ? photo.comment_ids.map( id => state.entities.comments[id]) : [];
}