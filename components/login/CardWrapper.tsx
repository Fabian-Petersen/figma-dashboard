"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

// $ Import Components to be used in CardWrapper
import Header from "./Header";
import BackButton from "./BackButton";

// $ Define the Props for CardWrapper
type CardWrapperProps = {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

const CardWrapper = ({ children, headerLabel }: CardWrapperProps) => {
  return (
    <Card className="max-w-[20rem] w-full bg-gray-100 border-gray-200 shadow-md shadow-white/90">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
