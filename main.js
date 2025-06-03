document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu && closeMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }

    const chooseusContainer = [
        {
            Image: "assets/imgcard.png",
            title: "Payment method",
            description: "We have a lot of them, from cryptocurrencies to barter for potatoes",
        },
        {
            Image: "assets/img2.png",
            title: "Simple search process",
            description: "We checked it out, even the kid did it, but it was many mom's friend's son",
        },
        {
            Image: "assets/imgb3.png",
            title: "24/7 Support",
            description: "Is there something you don't understand? Feel free to call us. Phone number is in the footer.",
        },
        {
            Image: "assets/imgcat.png",
            title: "We are nice",
            description: "Fantasy is over, there will be something really convincing here",
        },
    ];

    const renderProduct = (products) => {
        const container = document.getElementById('chooseusContainer');
        products.forEach(product => {
            container.innerHTML += `
                <div class="imgcard">
                    <img src="${product.Image}" alt="${product.title}">
                    
                    <h3 class="p-method">${product.title}</h3>
                    <p class="method">${product.description}</p>
                </div>
            `;
        });
    };

    renderProduct(chooseusContainer);
});

const rectanglcontainer =[
    {
        image1: "assets/bed1.png",
        image2: "assets/rating star.png",
        image3: "assets/heart.png",
        title:  "wilderness Club at Big Ceddar",
         description1: "28 october-1 november",
          description2: "assets/price.png",

    },
    {
        image1: "assets/bed2.png",
        image2: "assets/rating star.png",
        image3: "assets/heart.png",
        title: " wilderness Club at Big Ceddar",
        description1: "28 october-1 november",
        description2: "assets/price.png",
    },
{
    image1: "assets/bed3.png",
    image2: "assets/rating star.png",
    image3: "assets/heart.png",
    title: "wilderness Club at Big Ceddar",
    description1: "28 october-1 november",
    description2: "assets/price.png",
},
]

const renderContainer = rectanglcontainer => {
    const container = document.getElementById('rectanglcontainer');
    rectanglcontainer.forEach(rect => {
        container.innerHTML += `
        <div class="bedone">
            <img src="${rect.image1}" alt="Bed Image" class="bedone-img">
            <img src="${rect.image2}" alt="Rating" class="rating">
            <img src="${rect.image3}" alt="Heart or Rating" class="heart">

            <h4>${rect.title}</h4>
            <p class="october">${rect.description1}</p>
            <img src="${rect.description2}" alt="Price Icon">
        </div>

        `;
    });
};
renderContainer(rectanglcontainer);

const Reviewscontainer =[
    {
        Image: "assets/Ellipse w.png",
        description1: "I  quickly found the right for me, <br>but i had a few questions about the <br>hotal, i wrote to tech support and they <br>answered all my questions within an <br>hour.The vacation itseif was perfect <br>Thank you very much i will come backagain and again.",
        description2: "<i>Jannike Borg, Publisher</i>"
    },
    {
        Image: "assets/Ellipse m1.png",
            description1: "I  quickly found the right for me, <br>but i had a few questions about the <br>hotal, i wrote to tech support and they <br>answered all my questions within an <br>hour.The vacation itseif was perfect <br>Thank you very much i will come back again and again.",
            description2: "<i>LeBron Durant, Flight attendant</i>",

    },
    {
            Image: "assets/Ellipse m2.png",
            description1: "I  quickly found the right for me, <br>but i had a few questions about the <br>hotal, i wrote to tech support and they <br>answered all my questions within an <br>hour.The vacation itseif was perfect <br>Thank you very much i will come back again and again.",
        description2: "<i>Kaarel piho, Chiropodist</i>",
    },
    

];

const renderReview = Reviewscontainer => {
    const container = document.getElementById('Reviewscontainer');
    Reviewscontainer.forEach(review => {  
        container.innerHTML += `
       <div class="Ellipse-w">
        <img src="${review.Image}" alt="" class="Ellipse-w-img">
        <p>${review.description1}</p>
        <p class="Ellipse-w-author">${review.description2}</p>
        </div>
        `;
    });
}
renderReview(Reviewscontainer); 

const recentpostscontainer = [
  {
    image1: "assets/Rectangle trip.png",
    description1: "May 23, 2022",
    image2: "assets/5 minutes trip.png",
    title: "My trip to Athens",
    description2: "It would seem that in a city where <br>Thereus, Plato and Epicurus once <br>walked, the very idea of the subway is <br> alien to the city, but all ready...",
  },
  {
    image1: "assets/Rectangle vilnius.png",
    description1: "May 22, 2022",
    image2: "assets/5 minutes villinius.png",
    title: "Vilnius Resorts",
    description2: "I haven't seen any resorts in Vilnius, but <br>there are wonderful people and pubs",
  },
  {
    image1: "assets/Rectangle plane.png",
    description1: "May 20, 2022",
    image2: "assets/time plane.png",
    title: "Tips for Flying on a Plane",
    description2: "If you have a fear of flying, here's a helpful  <br>tip: bring your co-pilot so you can take a nap <br> while he steers the plane for you",
  },
];

const renderrecentposts = (recentpostscontainer) => {
  const container = document.getElementById("recentpostscontainer");
  recentpostscontainer.forEach((post) => {
    container.innerHTML += `
      <div class="post-img">
        <img src="${post.image1}" alt="" class="post-img">
        <p class="may">${post.description1}</p>
        <img src="${post.image2}" alt="" class="minute">
        <h2 class="post">${post.title}</h2>
        <p class="city">${post.description2}</p>
      </div>
    `;
  });
};

renderrecentposts(recentpostscontainer);
