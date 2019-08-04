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
        // data: {photo: photo}
        // dataType: 'json'
    })
);

export const createPhoto = photo => (
    $.ajax({
        method: 'post',
        url: `/api/photos`,
        data: { photo: photo },
        contentType: false,
        processData: false
    })
);