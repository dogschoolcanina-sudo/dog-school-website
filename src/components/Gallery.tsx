import { useState, useRef } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";

export function Gallery() {
  const [images, setImages] = useState<string[]>([
    "https://images.unsplash.com/photo-1648799834307-97650bbf7298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Njk3ODMxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1735597403677-2029485b4547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB0cmFpbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjcwNTkyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1597603413826-cd1c06b05222?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBncm9vbWluZyUyMGJhdGh8ZW58MXx8fHwxNzY3MDU5MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1616420486543-9d94ce1af95b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB3YWxraW5nJTIwcGFya3xlbnwxfHx8fDE3NjcwMDA3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  ]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      fileArray.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setImages((prev) => [...prev, e.target.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleDeleteImage = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm mb-4">
            📸 Galería
          </div>
          <h2 className="text-gray-900 mb-4">
            Nuestros perros felices
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            Mira algunos de los perros que hemos entrenado y cuidado con amor y
            dedicación
          </p>

          {/* Upload Button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors inline-flex items-center space-x-2 shadow-lg"
          >
            <Upload className="w-5 h-5" />
            <span>Subir Imágenes</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        {/* Gallery Grid */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={image}
                    alt={`Perro ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                  {index >= 4 && (
                    <button
                      onClick={(e) => handleDeleteImage(index, e)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">
              No hay imágenes aún. ¡Sube algunas fotos!
            </p>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Vista ampliada"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}