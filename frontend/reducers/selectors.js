export const fetchProfilePhotos = (state, user) => {
    // debugger;
    return user.photo_ids ? user.photo_ids.map( id => state.entities.photos[id]) : [];
};