import { Book, Resource } from "@/types";

export const categories = [
  "Puzzle Books",
  "Logic Books",
  "Science Books",
  "Activity Books",
  "Islamic Learning",
  "Brain Development",
  "Creative Writing",
  "Preschool Learning",
];

export const ageGroups = ["3-5", "5-7", "7-10", "10-12"] as const;

export const books: Book[] = [
  {
    id: "1",
    slug: "detective-mind",
    title: "Detective Mind",
    subtitle: "Puzzle Adventures for Sharp Thinkers",
    category: "Logic Books",
    ageGroup: "7-10",
    price: 699,
    discountedPrice: 549,
    stock: 48,
    isFeatured: true,
    isBestseller: true,
    coverImage: "/assets/books/detective-mind.svg",
    gallery: ["/assets/books/detective-mind.svg", "/assets/books/inside-preview.svg"],
    skillTags: ["Critical Thinking", "Pattern Recognition", "Problem Solving"],
    educationalBenefits: [
      "Builds logic and deduction skills",
      "Encourages independent thinking",
      "Improves focus through playful challenges",
    ],
    description:
      "Designed for curious readers, Detective Mind turns everyday learning into joyful mystery-solving with age-appropriate puzzles.",
    rating: 4.8,
    reviewsCount: 126,
  },
  {
    id: "2",
    slug: "my-smart-world",
    title: "My Smart World",
    subtitle: "Explore Places, People and Culture",
    category: "Science Books",
    ageGroup: "5-7",
    price: 649,
    discountedPrice: 499,
    stock: 62,
    isFeatured: true,
    isNewRelease: true,
    coverImage: "/assets/books/smart-world.svg",
    gallery: ["/assets/books/smart-world.svg", "/assets/books/inside-preview.svg"],
    skillTags: ["Curiosity", "Vocabulary", "General Knowledge"],
    educationalBenefits: [
      "Strengthens observation and recall",
      "Creates global awareness at a young age",
      "Blends storytelling with knowledge blocks",
    ],
    description:
      "A colorful knowledge journey helping children discover landmarks, ideas, and stories from around the world.",
    rating: 4.7,
    reviewsCount: 93,
  },
  {
    id: "3",
    slug: "wonder-science",
    title: "Wonder Science",
    subtitle: "Hands-on Science for Curious Kids",
    category: "Science Books",
    ageGroup: "10-12",
    price: 799,
    discountedPrice: 629,
    stock: 40,
    isFeatured: true,
    isBestseller: true,
    coverImage: "/assets/books/wonder-science.svg",
    gallery: ["/assets/books/wonder-science.svg", "/assets/books/inside-preview.svg"],
    skillTags: ["Scientific Thinking", "Experimentation", "Reasoning"],
    educationalBenefits: [
      "Introduces practical science concepts",
      "Connects textbook ideas to real life",
      "Builds confidence through guided experiments",
    ],
    description:
      "From atoms to galaxies, Wonder Science nurtures the habit of asking better questions and exploring answers with confidence.",
    rating: 4.9,
    reviewsCount: 152,
  },
  {
    id: "4",
    slug: "junior-writer-studio",
    title: "Junior Writer Studio",
    subtitle: "Creative Writing Prompts & Activities",
    category: "Creative Writing",
    ageGroup: "10-12",
    price: 599,
    discountedPrice: 469,
    stock: 35,
    isNewRelease: true,
    coverImage: "/assets/books/writer-studio.svg",
    gallery: ["/assets/books/writer-studio.svg", "/assets/books/inside-preview.svg"],
    skillTags: ["Writing", "Imagination", "Communication"],
    educationalBenefits: [
      "Builds expressive writing habits",
      "Improves confidence in storytelling",
      "Supports school composition outcomes",
    ],
    description:
      "A practical companion to help children structure ideas, develop vocabulary, and write with originality.",
    rating: 4.6,
    reviewsCount: 64,
  },
];

export const resources: Resource[] = [
  {
    id: "r1",
    title: "Detective Mind - Chapter 3 Answer Key",
    type: "Answer Keys",
    bookSlug: "detective-mind",
    chapter: "Chapter 3",
    fileUrl: "#",
  },
  {
    id: "r2",
    title: "My Smart World - Geography Worksheet",
    type: "Worksheets",
    bookSlug: "my-smart-world",
    chapter: "Unit 2",
    fileUrl: "#",
  },
  {
    id: "r3",
    title: "Wonder Science - Teacher Guide",
    type: "Teacher Guides",
    bookSlug: "wonder-science",
    chapter: "Module 1",
    fileUrl: "#",
  },
  {
    id: "r4",
    title: "Puzzle Skills - Activity Sheet",
    type: "Activity Sheets",
    bookSlug: "detective-mind",
    chapter: "Worksheet Set A",
    fileUrl: "#",
  },
];

export const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Primary School Teacher",
    quote:
      "The Detective Mind series has transformed my son’s approach to puzzles. He doesn’t just look for answers anymore; he looks for the why.",
  },
  {
    name: "David Chen",
    role: "Parent of Two",
    quote:
      "Finally, books that don’t talk down to children. SSB Publications challenges the intellect while keeping them absolutely engaged.",
  },
  {
    name: "Elena Rodríguez",
    role: "Education Consultant",
    quote:
      "A fantastic resource for homeschooling. The structure is smart, practical and follows modern educational frameworks perfectly.",
  },
];

export const faqs = [
  {
    question: "Do you provide bulk ordering for schools?",
    answer:
      "Yes. Schools can request institutional pricing, curriculum mapping, and onboarding support via the For Schools page.",
  },
  {
    question: "Can parents preview the book before purchase?",
    answer:
      "Each product page includes a Look Inside preview and a downloadable sample PDF.",
  },
  {
    question: "How quickly are orders shipped?",
    answer: "Orders are dispatched within 24–48 working hours across India.",
  },
];
