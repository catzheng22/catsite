import artImageList from "../../../lib/art_config";
import ImageCard from "../components/ImageCard"

export default function Page() {
  return (
      <div className="columns-1 md:columns-2 xl:columns-3 space-y-4">
        {artImageList.map((filename, index) => (
          <ImageCard
            key={index}
            src={`/art_images/${filename}`}
            alt={`Art piece ${index + 1}`}
          />
        ))}
    </div>
  );
}