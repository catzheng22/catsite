import { sketchbookImages } from "../../../lib/gallery.config";
import ImageCard from "../components/ImageCard"

export default function Sketchbook() {
  return (
      <div className="columns-1 md:columns-2 xl:columns-3 space-y-4">
        {sketchbookImages.map((filename, index) => (
          <ImageCard
            key={index}
            src={`/images/sketchbook/${filename}`}
            alt={`Sketchbook ${index + 1}`}
          />
        ))}
    </div>
  );
}