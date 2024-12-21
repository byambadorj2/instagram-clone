"use client";
import Masonry from "react-masonry-css";
import Image from "next/image";

const images = [
  "https://picsum.photos/id/13/1024/768",
  "https://picsum.photos/id/14/1024/768",
  "https://picsum.photos/id/15/1024/768",
  "https://picsum.photos/id/14/1024/768",
  "https://picsum.photos/id/15/1024/768",
];
export default function PostsGrid() {
  return (
    <Masonry
      breakpointCols={{
        default: 4,
        860: 3,
        500: 2,
      }}
      className="flex -ml-4"
      columnClassName="pl-4"
    >
      {images.map((src, index) => (
        <Image key={index} src={src} alt="" width={1024} height={768} />
      ))}
    </Masonry>
  );
}
