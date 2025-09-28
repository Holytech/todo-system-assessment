import { Avatar, AvatarGroup } from "@chakra-ui/react";
import React from "react";

interface IAvatar {
  name: string;
  src: string;
}

interface CustomAvatarGroupProps {
  avatars: IAvatar[];
  max?: number;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "2xs" | "xs";
}

const CustomAvatarGroup: React.FC<CustomAvatarGroupProps> = ({
  avatars,
  max = 2,
  size = "sm",
}) => {
  const exceedMax = avatars.length > max;
  const excessCount = avatars.length - max;
  return (
    <AvatarGroup size={size} spaceX="1" borderless>
      {avatars.slice(0, max).map((each) => (
        <Avatar.Root key={each.name}>
          <Avatar.Fallback name={each.name} />
          <Avatar.Image src={each.src} />
        </Avatar.Root>
      ))}
      {exceedMax && (
        <Avatar.Root>
          <Avatar.Fallback>+{excessCount}</Avatar.Fallback>
        </Avatar.Root>
      )}
    </AvatarGroup>
  );
};

export default CustomAvatarGroup;
