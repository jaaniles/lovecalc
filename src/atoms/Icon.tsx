import isPropValid from "@emotion/is-prop-valid";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";
import Svg from "react-inlinesvg";

const icons = {
  arrowRight: require("../assets/svgs/arrow-right.svg"),
  bars: require("../assets/svgs/bars.svg"),
  camera: require("../assets/svgs/camera.svg"),
  compress: require("../assets/svgs/compress.svg"),
  cog: require("../assets/svgs/cog.svg"),
  expand: require("../assets/svgs/expand.svg"),
  microphone: require("../assets/svgs/microphone.svg"),
  microphoneSlash: require("../assets/svgs/microphone-slash.svg"),
  minus: require("../assets/svgs/minus.svg"),
  triangle: require("../assets/svgs/triangle.svg"),
  play: require("../assets/svgs/play.svg"),
  pause: require("../assets/svgs/pause.svg"),
  plus: require("../assets/svgs/plus.svg"),
  signOutAlt: require("../assets/svgs/sign-out-alt.svg"),
  volumeMute: require("../assets/svgs/volume-mute.svg"),
  volumeUp: require("../assets/svgs/volume-up.svg"),
};

export type IconName = keyof typeof icons;

const iconDimension = 6;

type SVGProps = {
  marginLeft?: boolean;
  size?: number;
};

const StyledSvg = styled(Svg, { shouldForwardProp: isPropValid })<SVGProps>(
  ({ size, theme }) => ({
    width: size || theme.scale(iconDimension),
    height: size || theme.scale(iconDimension),
  }),
  ({ marginLeft, theme }) =>
    marginLeft && {
      marginLeft: theme.scale(2),
    },
);

interface Props {
  name: IconName;
  size?: number;
  className?: string;
  color?: string;
  marginLeft?: boolean;
}

export const Icon: FC<Props> = ({
  name,
  color,
  className,
  size,
  marginLeft,
}) => {
  const { colors } = useTheme();
  const CurrentIcon = icons[name];

  if (!CurrentIcon) {
    return null;
  }

  return (
    <StyledSvg
      marginLeft={marginLeft}
      className={className}
      src={CurrentIcon}
      size={size}
      color={color || colors.text700}
    />
  );
};
