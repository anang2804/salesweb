export interface TestimonialGalleryItem {
  id: number;
  name: string;
  city: string;
  rating: number;
  avatar: string;
  handoverPhoto: string;
}

export const testimonialGallery: TestimonialGalleryItem[] = [
  {
    id: 1,
    name: "Ibu Carla",
    city: "Jakarta",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar1/100/100",
    handoverPhoto: "/images/testimonials/p1.png",
  },
  {
    id: 2,
    name: "Bapak Hendra",
    city: "Bandung",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar2/100/100",
    handoverPhoto: "/images/testimonials/p2.png",
  },
  {
    id: 3,
    name: "Ibu Dewi",
    city: "Surabaya",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar3/100/100",
    handoverPhoto: "/images/testimonials/p3.png",
  },
  {
    id: 4,
    name: "Bapak Agus",
    city: "Yogyakarta",
    rating: 4,
    avatar: "https://picsum.photos/seed/avatar4/100/100",
    handoverPhoto: "/images/testimonials/p4.png",
  },
];
