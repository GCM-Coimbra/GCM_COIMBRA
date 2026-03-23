"use client";

import { RiStarFill } from "@remixicon/react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { fadeInUpVariants } from "../../anime";

const clientNames = [
  "João da Silva",
  "Mariana Costa",
  "Carlos Ferreira",
  "Aline Ribeiro",
  "Rafael Gomes",
  "Patrícia Lima",
];

export function CustomerReviewCard({
  description,
  index,
  clientImage,
}: {
  description: string;
  index: number;
  clientImage: string;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const name = isMounted ? clientNames[index] : "";

  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      custom={isMobile ? 0 : index * 0.1}
      ref={cardRef}
      className="size-full"
    >
      <Card className="size-full">
        <CardHeader>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <RiStarFill
                key={index.toString()}
                className="size-3 text-primary"
              />
            ))}
          </div>
          <CardTitle className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={clientImage} />
            </Avatar>
            <div className="flex flex-col">
              <p className="font-medium text-sm">{name}</p>
              <p className="text-muted-foreground text-sm">
                @{name ? name.toLowerCase().replaceAll(" ", "") : ""}
              </p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
