import { ReactElement, ReactNode } from "react";

export const Wrapper = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  return <div className="min-vh-100 d-flex flex-column">{children}</div>;
};
