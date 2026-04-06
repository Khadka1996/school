"use client";

import { galleryImages } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { GalleryImage } from "@/components/gallery-image";
import { useLanguage } from "@/hooks/useLanguage";

export default function GalleryPage() {
  const { pick } = useLanguage();

  return (
    <>
      <PageHeader
        badge={pick("Gallery", "ग्यालेरी")}
        title={pick("School Life in Pictures", "तस्वीरहरूमा विद्यालय जीवन")}
        subtitle={pick("Events, classrooms, sports and cultural programs at Shree Panchthar Secondary School.", "श्री पाँचथर माध्यमिक विद्यालयका कार्यक्रम, कक्षा, खेलकुद र सांस्कृतिक गतिविधिहरू।")}
      />
      <section className="container py-12">
        <div className="masonry-grid">
          {galleryImages.map((image, index) => (
            <GalleryImage key={image} src={image} alt={`School gallery image ${index + 1}`} />
          ))}
        </div>
      </section>
    </>
  );
}
