import { academicsFeature } from "./features/academics";
import { admissionsFeature } from "./features/admissions";
import { financeFeature } from "./features/finance";
import { otherFeatures } from "./features/other";

export interface FeatureDetail {
  slug: string;
  name: string;
  tagline: string;
  stat: string;
  statLabel: string;
  description: string;
  iconName: string;
  benefits: string[];
  subFeatures: {
    title: string;
    description: string;
  }[];
  workflow: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const platformFeatures: Record<string, FeatureDetail> = {
  academics: academicsFeature,
  admissions: admissionsFeature,
  finance: financeFeature,
  ...otherFeatures
};
