import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Card: FC<Props> = ({ children }) => {
  return <div className="card">{children}</div>;
};
