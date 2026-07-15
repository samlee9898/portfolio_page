import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PROJECTS } from "@/data/projects";

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = () => {
  return (
    /* main container in projects page */
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((project) => (
        <Card
          key={project.title}
          className="relative mx-auto w-full max-w-sm pt-0"
        >
          {/* insert conditional rendering */}
          {!project.image && (
            <div className="absolute inset-x-0 top-0 z-30 aspect-video bg-black/35" />
          )}
          <img
            src={project.image ?? "/images/Coming_Soon.jpg"}
            alt={project.title}
            className="relative z-20 aspect-video w-full object-cover"
          />
          <CardHeader>
            <CardAction>
              {project.featured && <Badge variant="secondary">Featured</Badge>}
            </CardAction>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardFooter className="mt-auto">
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-full items-center justify-center rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/80"
              >
                Live Demo
              </a>
            ) : (
              <Button
                className="h-8 w-full bg-muted text-muted-foreground hover:bg-muted"
                disabled
              >
                Coming soon
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default page;
