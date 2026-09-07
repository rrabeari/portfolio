export interface PipelineStep {
  title: string;
  description: string;
}

export interface CaseStudy {
  overview: string;
  businessProblem: string;
  pipelineSteps: PipelineStep[];
  keyMetrics: {
    label: string;
    value: string;
    badgeClass?: string;
  }[];
  mlResults?: {
    modelName: string;
    mae: number;
    rmse: number;
    r2: number;
    baselineGainMAE: string;
  };
  architecture: string[];
  futureRoadmap: string[];
}

export interface ProjectTechnology {
  name: string;
  category: 'frontend' | 'backend' | 'ml' | 'database' | 'testing' | 'devops';
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  tags: string[];
  featured: boolean;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  completionDate: string;
  technologies: ProjectTechnology[];
  caseStudy: CaseStudy;
}