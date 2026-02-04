const imageModules = import.meta.glob(
  "../assets/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
  { eager: true, import: "default" }
);

const galleryItems = Object.entries(imageModules)
  .filter(([path]) => !path.endsWith(".DS_Store"))
  .reduce((acc, [path, src]) => {
    const parts = path.split("/");
    const folder = parts[parts.length - 2] || "Unknown";
    if (!acc[folder]) acc[folder] = [];
    acc[folder].push(src);
    return acc;
  }, {});

const galleryList = Object.keys(galleryItems)
  .sort((a, b) => a.localeCompare(b))
  .map((name) => ({
    name,
    images: galleryItems[name].sort((a, b) => a.localeCompare(b)),
  }));

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="section-head">
        <h2>Gallery</h2>
        <p>Every tee we are selling, including color options.</p>
      </div>

      <div className="gallery-stack">
        {galleryList.map((item) => (
          <article className="gallery-block" key={item.name}>
            <header className="gallery-block-header">
              <h3>{item.name}</h3>
              <span>{item.images.length} photos</span>
            </header>
            <div className="gallery-grid">
              {item.images.map((src, index) => (
                <img
                  key={`${item.name}-${index}`}
                  src={src}
                  alt={`${item.name} shirt color ${index + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
