import Image from "next/image";
import wonderImages, { WonderImage } from "../../data";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wonderImages.find((p) => p.id === id)!;
  return (
    <div>
      <Image alt={photo.name} src={photo.src} />
      <div>
        <h2>{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </div>
  );
}
