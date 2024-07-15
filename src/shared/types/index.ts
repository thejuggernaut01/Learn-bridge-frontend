export type CourseCardProps = {
  id: number;
  src: string;
  title: string;
  instructor: string;
  rating: number;
  enrolled: number;
  price: number;
  badge?: string;
  discount?: number;
};

export type AppliedCardProps = {
  id: number;
  src: string;
  title: string;
  instructor: string;
  rating: number;
  progress: number;
};

export type ProfileMenuItemsProps =
  | "Profile Details"
  | "My Courses"
  | "Messages"
  | "My Reviews";
