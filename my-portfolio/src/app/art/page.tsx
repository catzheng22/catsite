import { artImages } from "../../../lib/gallery.config";
import ImageCard from "../components/ImageCard"

export default function Art() {
  return (
      <div className="columns-1 md:columns-2 xl:columns-3 space-y-4">
        {artImages.map((filename, index) => (
          <ImageCard
            key={index}
            src={`/images/art/${filename}`}
            alt={`Art piece ${index + 1}`}
          />
        ))}
    </div>
  );
}