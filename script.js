
const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
    });

// Instead of using a selector, define the gallery elements
const myGallery = GLightbox({
    elements: [
        {
            'href': './img/pho5.jpeg',
            'type': 'image',
            'title': 'Champion',
            'description': 'Vietnamese soccer tournament 2019',
        },
        {
           'href': './img/da_nang.jpeg',
            'type': 'image',
            'title': 'Da Nang Beach',
            'description': 'Summer 2018',
        },
         {
            'href': './img/pho1.jpeg',
            'type': 'image',
            'title': 'New York',
            'description': 'summer 2018',
        },
        {
            'href': './img/pho6.jpeg',
            'type': 'image',
            'title': 'English Class',
            'description': 'Fall 2018',
        },
       {
            'href': './img/pho2.jpeg',
            'type': 'image',
            'title': 'Washington',
            'description': 'Summer 2018',
        },
         {
            'href': './img/moun.jpeg',
            'type': 'image',
            'title': 'Washington',
            'description': 'Summer 2018',
        },
        {
            'href': './img/pho7.jpeg',
            'type': 'image',
            'title': 'Christmas',
            'description': '2017',
        },
        {
          'href':'./img/pho4.png',
          'type': 'image',
        },
         {
            'href': './img/bridge.jpeg',
            'type': 'image',
            'title': 'Christmas',
            'description': '2017',
        },
         {
            'href': './img/crab.jpeg',
            'type': 'image',
            'title': 'Christmas',
            'description': '2017',
        },
    ],
    autoplayVideos: true,
});
