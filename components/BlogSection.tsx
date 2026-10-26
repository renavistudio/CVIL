import React from 'react';
import { BLOG_POSTS } from './BlogHub';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

interface BlogSectionProps {
  onOpenBlog?: (slug?: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenBlog }) => {
  return (
    <section id="blog-section" className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-200 pb-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-[#B8860B]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#B8860B] uppercase">
                Recursos Legales & Soluciones para Empresas
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif text-obsidian tracking-tight">
              Guías Prácticas para Dueños de Negocio en Zamora
            </h2>
            <p className="text-charcoal/70 text-sm mt-2 leading-relaxed">
              Soluciones legales de nuestros licenciados y abogados corporativos en Zamora para resolver controversias entre socios, cobrar pagarés mercantiles y defender al patrón sin rodeos.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 border border-obsidian text-obsidian hover:bg-obsidian hover:text-white transition-colors duration-300 text-xs font-bold uppercase tracking-widest rounded-sm"
            >
              Ver Todas las Guías <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group bg-white border border-gray-200 hover:border-obsidian hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden rounded-sm"
            >
              <div className="h-52 overflow-hidden relative bg-gray-100">
                <img
                  src={post.imageUrl}
                  alt={post.title} width="400" height="208"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-obsidian/90 text-[#E8CA9D] px-2.5 py-1 rounded-sm backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-stone mb-2">
                    <Clock className="w-3 h-3 text-[#B8860B]" />
                    <span>{post.readTime}</span>
                  </div>
                  <a
                    href={`/blog/${post.slug}`}
                    className="block group/title"
                  >
                    <h3 className="font-serif text-lg font-bold text-obsidian leading-snug group-hover:text-[#B8860B] transition-colors mb-3">
                      {post.title}
                    </h3>
                  </a>
                  <p className="text-charcoal/70 text-xs leading-relaxed line-clamp-3 mb-4">
                    {post.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-stone">CVIL Abogados</span>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-obsidian group-hover:translate-x-1 transition-transform"
                  >
                    Leer Solución <ArrowRight className="w-3.5 h-3.5 text-[#B8860B]" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
