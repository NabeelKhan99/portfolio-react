// src/utils/randomProjects.ts
import { ProjectProps } from "@/components/ProjectCard";

export function getRandomProjects(projects: ProjectProps[], count: number) {
  const shuffled = [...projects].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}