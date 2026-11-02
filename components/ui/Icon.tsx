import type { IconType } from "react-icons";
import {
  FaAmbulance,
  FaArrowLeft,
  FaArrowRight,
  FaBookOpen,
  FaCheckCircle,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaComments,
  FaEnvelope,
  FaFacebookF,
  FaFileAlt,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaHandshake,
  FaHeadset,
  FaHeart,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaPhoneAlt,
  FaPlus,
  FaQuoteLeft,
  FaRegCalendarAlt,
  FaRegCircle,
  FaRegCommentDots,
  FaRegEnvelope,
  FaRegUser,
  FaStar,
  FaTimes,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Every icon the site can use, by the name templates.json stores. A new icon is added here once.
const icons: Record<string, IconType> = {
  FaAmbulance,
  FaArrowLeft,
  FaArrowRight,
  FaBookOpen,
  FaCheckCircle,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaComments,
  FaEnvelope,
  FaFacebookF,
  FaFileAlt,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaHandshake,
  FaHeadset,
  FaHeart,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaPhoneAlt,
  FaPlus,
  FaQuoteLeft,
  FaRegCalendarAlt,
  FaRegCommentDots,
  FaRegEnvelope,
  FaRegUser,
  FaStar,
  FaTimes,
  FaUsers,
  FaYoutube,
  FaXTwitter,
};

type Props = {
  name: string;
  className?: string;
};

export const Icon = ({ name, className }: Props) => {
  const Glyph = icons[name];
  if (!Glyph) {
    if (process.env.NODE_ENV !== "production") console.warn(`Icon "${name}" is not in components/ui/Icon.tsx`);
    return <FaRegCircle aria-hidden="true" className={className} />;
  }
  return <Glyph aria-hidden="true" className={className} />;
};
