import CareHeart from "@components/Icons/CareHeart";
import DedicatedCare from "@components/Icons/DedicatedCare";

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
