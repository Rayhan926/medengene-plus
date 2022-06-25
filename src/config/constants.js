import CareHeart from "@components/Icons/CareHeart";
import DedicatedCare from "@components/Icons/DedicatedCare";
import { FiHome } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import AllergiesTab from "@views/UserProfile/components/AllergiesTab";
import FindCareIcon from "@components/Icons/FindCareIcon";

const { default: Clinicians } = require("@components/Icons/Clinicians");

export const qualitiHealthCards = [
  {
    icon: <Clinicians />,
    title: "Clinicians on your schedule",
    description:
      "Scelerisque at auctor id maecenas amet, nisl ipsum urna ut a ac olutpat condim entum pretiu mauctor id maecenas Sceleri.",
  },
  {
    icon: <CareHeart />,
    title: "Care that comes to you",
    description:
      "Scelerisque at auctor id maecenas amet, nisl ipsum urna ut a ac olutpat condim entum pretiu mauctor id maecenas Sceleri.",
  },
  {
    icon: <DedicatedCare />,
    title: "Dedicated Care Teams",
    description:
      "Scelerisque at auctor id maecenas amet, nisl ipsum urna ut a ac olutpat condim entum pretiu mauctor id maecenas Sceleri.",
  },
];

export const navLinks = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "About",
    url: "#about",
  },
  {
    text: "Health Stories",
    url: "#health-stories",
  },
  {
    text: "Blog",
    url: "#blog",
  },
];

export const blogs = [
  {
    image: "/img/blog_1.jpg",
    title: "In faucibus sapien nunc eleifend",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque risus sed urna aliquet, ac hendrerit turpis sollicitudin.",
    link: "#",
  },
  {
    image: "/img/blog_2.jpg",
    title: "In faucibus sapien nunc eleifend",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque risus sed urna aliquet, ac hendrerit turpis sollicitudin.",
    link: "#",
  },
  {
    image: "/img/blog_3.jpg",
    title: "In faucibus sapien nunc eleifend",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque risus sed urna aliquet, ac hendrerit turpis sollicitudin.",
    link: "#",
  },
  {
    image: "/img/blog_4.jpg",
    title: "In faucibus sapien nunc eleifend",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque risus sed urna aliquet, ac hendrerit turpis sollicitudin.",
    link: "#",
  },
];

export const footerLinks = {
  company: {
    section_title: "Company",
    links: [
      {
        text: "About Us",
        url: "#",
      },
      {
        text: "Careers",
        url: "#",
      },
      {
        text: "Press & Media",
        url: "#",
      },
      {
        text: "Contact Us",
        url: "#",
      },
    ],
  },
  discover: {
    section_title: "Discover",
    links: [
      {
        text: "Our Blog",
        url: "#",
      },
      {
        text: "Advertising",
        url: "#",
      },
      {
        text: "Plans & Pricing",
        url: "#",
      },
      {
        text: "Testimonials",
        url: "#",
      },
    ],
  },
  legal: {
    section_title: "Legal",
    links: [
      {
        text: "Terms of Use",
        url: "#",
      },
      {
        text: "Privacy Policy ",
        url: "#",
      },
      {
        text: "Cookie Policy",
        url: "#",
      },
      {
        text: "All FAQs",
        url: "#",
      },
    ],
  },
};

export const sidebarLinks = [
  {
    text: "Care Center",
    url: "/care-center",
    icon: <FiHome size={18} />,
    sublinks: [
      {
        text: "User Profile",
        url: "/user-profile",
        icon: <AiOutlineUser size={18} />,
      },
      {
        text: "Find Care",
        url: "/find-care",
        icon: <FindCareIcon />,
      },
    ],
  },
];

export const userProfilePageTabs = [
  {
    text: "Current Health Issues",
    component: "Current Health Issues",
  },
  {
    text: "Medications",
    component: "Medications",
  },
  {
    text: "Allergies",
    component: <AllergiesTab />,
  },
  {
    text: "Immunizations",
    component: "Immunizations",
  },
  {
    text: "Preventive Care",
    component: "Preventive Care",
  },
];
