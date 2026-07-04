import { generateOgImage, size, contentType } from "@/components/OgImageTemplate";

export const alt = "Class Nex - Smart School Management System";
export { size, contentType };

export default async function Image() {
  return generateOgImage({
    title: "The AI-Powered School Management System",
    subtitle: "Unify academics, administration, finance, and parent-teacher communication on a single, secure cloud platform.",
    category: "Platform Overview",
  });
}
