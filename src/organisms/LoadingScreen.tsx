import { FC } from "react";

import { Column } from "~/atoms/Column";
import { Loading } from "~/atoms/Loading";

export const LoadingScreen: FC = ({ children }) => (
  <Column
    css={({ scale }) => ({
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexGrow: 1,
      padding: scale(4),
    })}
  >
    <Loading />
    {children && (
      <div css={({ scale }) => ({ marginTop: scale(4) })}>{children}</div>
    )}
  </Column>
);
