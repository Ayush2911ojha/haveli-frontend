import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faUtensils, faSpa, faSwimmer, faGlassCheers, faDumbbell } from "@fortawesome/free-solid-svg-icons";


export const navList = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
    {
      id: 3,
      path: "/services",
      text: "Services",
    },
    {
      id: 4,
      path: "/hotelsList",
      text: "Browse hotels",
    },
    
    {
      id: 5,
      path: "/contact",
      text: "Contact",
    },
  ];

export const socialIcons = [
  {
    icon: <FontAwesomeIcon icon={faFacebookF} />,
  },
  {
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
  {
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedinIn} />,
  },
  {
    icon: <FontAwesomeIcon icon={faYoutube} />,
  },
];

  
  export const carouselData = [
    {
      img: "../assets/img/carousel-1.jpg",
      title: "Discover A Brand Luxurious Hotel",
      subtitle: "luxury living",
      btn1: "Our Room",
      btn2: "Book Room",
    },
    {
      img: "../assets/img/carousel-2.jpg",
      title: "Discover A Brand Luxurious Hotel",
      subtitle: "luxury living",
      btn1: "Our Room",
      btn2: "Book Room",
    },
      {
      img: "https://images.pexels.com/photos/2133508/pexels-photo-2133508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Discover A Brand Luxurious Hotel",
      subtitle: "luxury living",
      btn1: "Our Room",
      btn2: "Book Room",
    },
      {
      img: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Discover A Brand Luxurious Hotel",
      subtitle: "luxury living",
      btn1: "Our Room",
      btn2: "Book Room",
    },
  ];
  export const about = [
    {
      icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
      text: "Rooms",
      count: "7861",
    },
    {
      icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
      text: "Staffs",
      count: "1234",
    },
    {
      icon: <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>,
      text: "Clients",
      count: "4321",
    },
  ];
  

export const services = [
  {
    icon: <FontAwesomeIcon icon={faHotel} className="text-primary text-2xl" />,
    name: "Rooms & Appartment",
    description: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <FontAwesomeIcon icon={faUtensils} className="text-primary text-2xl" />,
    name: "Food & Restaurant",
    description: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <FontAwesomeIcon icon={faSpa} className="text-primary text-2xl" />,
    name: "Spa & Fitness",
    description: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <FontAwesomeIcon icon={faSwimmer} className="text-primary text-2xl" />,
    name: "Sports & Gaming",
    description: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <FontAwesomeIcon icon={faGlassCheers} className="text-primary text-2xl" />,
    name: "Event & Party",
    description: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <FontAwesomeIcon icon={faDumbbell} className="text-primary text-2xl" />,
    name: "GYM & Yoga",
    description: "Contrary to popular belief, ipsum is not simply random.",
  },
];

  export const team = [
    {
      image: "../assets/img/team-1.jpg",
      name: "Full Name",
      designation: "Designation",
    },
    {
      image: "../assets/img/team-2.jpg",
      name: "Full Name",
      designation: "Designation",
    },
    {
      image: "../assets/img/team-3.jpg",
      name: "Full Name",
      designation: "Designation",
    },
    {
      image: "../assets/img/team-3.jpg",
      name: "Full Name",
      designation: "Designation",
    },
  ];
  
  export const footerItem = [
    {
      id: 1,
      header: "Company",
      UnitItem: [
        {
          name: "About Us",
        },
        {
          name: "Contact Us",
        },
        {
          name: "Privacy Policy",
        },
        {
          name: "Terms & Condition",
        },
        {
          name: "Support",
        },
      ],
    },
    {
      id: 2,
      header: "Services",
      UnitItem: [
        {
          name: "Food & Restaurant",
        },
        {
          name: "Spa & Fitness",
        },
        {
          name: "Sports & Gaming",
        },
        {
          name: "Event & Party",
        },
        {
          name: "GYM & Yoga",
        },
      ],
    },
  ];
  
  export const footerContact = [
    {
      icon: <i className="fa fa-map-marker-alt me-3"></i>,
      name: "123 street SharpCareer",
    },
    {
      icon: <i className="fa fa-phone-alt me-3"></i>,
      name: "+91 89 78 787 787",
    },
    {
      icon: <i className="fa fa-envelope me-3"></i>,
      name: "info@example.com",
    },
  ];
  
  export const contact = [
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "Booking",
      email: "book@example.com",
    },
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "Technical",
      email: "tech@example.com",
    },
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "General",
      email: "info@example.com",
    },
  ];
  export const testimonial = [
    {
      description:
        "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
      name: "Client Name",
      profession: "Profession",
      icon: (
        <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
      ),
      img: "../assets/img/testimonial-1.jpg",
    },
    {
      description:
        "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
      name: "Client Name",
      profession: "Profession",
      icon: (
        <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
      ),
      img: "../assets/img/testimonial-2.jpg",
    },
    {
      description:
        "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
      name: "Client Name",
      profession: "Profession",
      icon: (
        <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
      ),
      img: "../assets/img/testimonial-3.jpg",
    },
  ];
  
  export const roomItems = [
    {
      img: "../assets/img/room-1.jpg",
      price: "110/night",
      name: "Junior Suit",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },
  
    {
      img: "../assets/img/room-2.jpg",
      price: "110/night",
      name: "Executive Suite",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },
    {
      img: "../assets/img/room-3.jpg",
      price: "110/night",
      name: "Super Deluxe",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },
    
  ];
  
  export const facility = [
    {
      icon: <i class="fa fa-bed text-primary me-2"></i>,
      quantity: 3,
      facility: "bed",
    },
    {
      icon: <i class="fa fa-bath text-primary me-2"></i>,
      quantity: 2,
      facility: "bath",
    },
    {
      icon: <i class="fa fa-wifi text-primary me-2"></i>,
      facility: "Wifi",
    },
  ];
  