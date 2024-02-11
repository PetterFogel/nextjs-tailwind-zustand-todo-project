import { FC, ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  title?: string;
  description?: string;
  children: ReactNode;
}

export const CardWrapper: FC<Props> = ({ title, description, children }) => {
  return (
    <Card className="w-full dark:bg-defaultDark">
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
};
