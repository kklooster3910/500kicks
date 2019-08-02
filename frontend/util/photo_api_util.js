export const fetchPhotos = () => (
    $.ajax({
        method: 'get',
        url: '/api/photos'
    })
);

export const fetchPhoto = id => (
    $.ajax({
        method: 'get',
        url: `/api/photos/${id}`,
        data: { photo: photo } 
    })
);