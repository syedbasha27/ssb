export type AgeGroup = "3-5" | "5-7" | "7-10" | "10-12";

export type Book = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  ageGroup: AgeGroup;
  price: number;
  discountedPrice: number;
  stock: number;
  isFeatured?: boolean;
  isBestseller?: boolean;
  isNewRelease?: boolean;
  coverImage: string;
  gallery: string[];
  skillTags: string[];
  educationalBenefits: string[];
  description: string;
  rating: number;
  reviewsCount: number;
};

export type Resource = {
  id: string;
  title: string;
  type: "Answer Keys" | "Teacher Guides" | "Worksheets" | "Puzzle Solutions" | "Activity Sheets";
  bookSlug: string;
  chapter: string;
  fileUrl: string;
};
