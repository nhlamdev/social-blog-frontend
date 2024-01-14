import { IProfile } from "@/interface";
import Image from "next/image";
import { MutableRefObject, useCallback } from "react";
import { FaRegImage } from "react-icons/fa";

interface IAvatarControl {
  profile: IProfile;
  imageRef: MutableRefObject<HTMLInputElement | null>;
}

export const AvatarControl = (props: IAvatarControl) => {
  const { profile, imageRef } = props;

  const image = useCallback(() => {
    if (
      imageRef?.current &&
      imageRef.current.files &&
      imageRef.current.files.length > 0
    ) {
      return URL.createObjectURL(imageRef.current?.files[0]);
    } else {
      return `/service/${profile.image}`;
    }
  }, [profile.image, imageRef]);

  return (
    <div className="relative w-24 h-24 rounded-full shadow-lg">
      <Image
        src={image()}
        fill
        loading="lazy"
        className="object-cover"
        style={{ borderRadius: "50%", border: "2px solid black" }}
        alt="profile image"
      />

      <div
        className="absolute p-2 bg-slate-300 rounded-full shadow-md cursor-pointer"
        style={{ bottom: 0, right: 0 }}
        onClick={() => {
          imageRef.current?.click();
        }}
      >
        <FaRegImage className="text-md" />
      </div>

      <input type="file" hidden ref={imageRef} />
    </div>
  );
};
