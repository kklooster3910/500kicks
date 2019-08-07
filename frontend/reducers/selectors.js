export const fetchProfilePhotos = (state, user) => {
    // debugger;
    return user ? user.photo_ids.map( id => state.entities.photos[id]) : [];
};