import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const contactInfo = [
  {
    title: "Email",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
    icon: Phone,
  },
  {
    title: "Location",
    value: "Delhi, India",
    href: "#",
    icon: MapPin,
  },
];

export const socialLinks = [
  {
    title: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  {
    title: "Email",
    href: "mailto:your-email@example.com",
    icon: Mail,
  },
];

export const availability = {
  status: "Available for Full-Time Opportunities",
  color: "bg-green-500",
};