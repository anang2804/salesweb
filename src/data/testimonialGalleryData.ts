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
    handoverPhoto: "https://picsum.photos/seed/handover1/600/400",
  },
  {
    id: 2,
    name: "Bapak Hendra",
    city: "Bandung",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar2/100/100",
    handoverPhoto: "https://picsum.photos/seed/handover2/600/400",
  },
  {
    id: 3,
    name: "Ibu Dewi",
    city: "Surabaya",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar3/100/100",
    handoverPhoto: "https://picsum.photos/seed/handover3/600/400",
  },
  {
    id: 4,
    name: "Bapak Agus",
    city: "Yogyakarta",
    rating: 4,
    avatar: "https://picsum.photos/seed/avatar4/100/100",
    handoverPhoto: "https://picsum.photos/seed/handover4/600/400",
  },
  {
    id: 5,
    name: "Ibu Ratna",
    city: "Semarang",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar5/100/100",
    handoverPhoto: "https://picsum.photos/seed/handover5/600/400",
  },
  {
    id: 6,
    name: "Bapak Dwi",
    city: "Medan",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar6/100/100",
    handoverPhoto: "https://picsum.photos/seed/handover6/600/400",
  },
  {
    id: 7,
    name: "Ibu Sari",
    city: "Makassar",
    rating: 4,
    avatar: "https://picsum.photos/seed/avatar7/100/100",
    handoverPhoto: "https://picsum.photos/seed/handover7/600/400",
  },
];
