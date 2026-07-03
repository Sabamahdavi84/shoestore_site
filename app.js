$('.feedbacks-container').slick({
    Infinite:true,
    slidesToShow:3,
    slidesToScroll:1,
    autoplay:true,
    pauseOnHove:true,
    responsive:[
        {
         breakpoint:900,
            settings:{
                slidesToShow:3
            },
        },
        {
        breakpoint: 600,
         settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         }
       }
    ]
})