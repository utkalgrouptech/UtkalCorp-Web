import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://utkalcorporation.com",
      lastModified: new Date(),
    },
    {
      url: "https://utkalcorporation.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://utkalcorporation.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://utkalcorporation.com/contact",
      lastModified: new Date(),
    },
  ];
}