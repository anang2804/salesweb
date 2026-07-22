export interface GalleryItem {
  id: number;
  customerName: string;
  city: string;
  rating: number;
  avatar: string;
  documentationPhoto: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    customerName: "Bambang Wijaya",
    city: "Jakarta",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    documentationPhoto:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80",
  },
  {
    id: 2,
    customerName: "Dewi Sartika",
    city: "Bandung",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    documentationPhoto:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",
  },
  {
    id: 3,
    customerName: "Hendra Gunawan",
    city: "Surabaya",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    documentationPhoto:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&q=80",
  },
  {
    id: 4,
    customerName: "Ratna Kusuma",
    city: "Yogyakarta",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    documentationPhoto:
      "https://images.unsplash.com/photo-1605559424843-9e4b2285f6b0?w=600&q=80",
  },
  {
    id: 5,
    customerName: "Agus Pratama",
    city: "Semarang",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    documentationPhoto:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
  },
  {
    id: 6,
    customerName: "Siti Rahmawati",
    city: "Medan",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    documentationPhoto:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80",
  },
];
