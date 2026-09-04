const fs = require('fs');
const path = require('path');

const tailwindPath = '/Users/rendon/Desktop/CVIL_Web/tailwind.config.js';
let tailwindContent = fs.readFileSync(tailwindPath, 'utf8');
tailwindContent = tailwindContent.replace(/gold:\s*'#B8860B'/, "gold: '#946B00'");
tailwindContent = tailwindContent.replace(/stone:\s*'#8c8c8c'/, "stone: '#767676'");
fs.writeFileSync(tailwindPath, tailwindContent);

const componentsDir = '/Users/rendon/Desktop/CVIL_Web/components';
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace colors
    content = content.replace(/text-\[\#B8860B\]/g, 'text-gold');
    content = content.replace(/bg-\[\#B8860B\]/g, 'bg-gold');
    content = content.replace(/border-\[\#B8860B\]/g, 'border-gold');
    content = content.replace(/#B8860B/g, '#946B00');

    if (file === 'Hero.tsx') {
        content = content.replace(/hover:bg-\[\#9a7209\]/g, 'hover:bg-[#7A5500]');
        // Lightbox close button
        content = content.replace(
            /className="absolute top-4 right-4 p-3 bg-black\/40/g,
            'aria-label="Cerrar imagen ampliada"\n                                className="absolute top-4 right-4 p-4 bg-black/40'
        );
    }

    if (file === 'ContactForm.tsx') {
        // Nombre Completo
        content = content.replace(
            /<label className="block text-\[11px\] font-bold text-charcoal uppercase tracking-wider mb-2" htmlFor="service">\s*Nombre Completo <span className="text-gold">\*<\/span>\s*<\/label>\s*<input\s*name="name"/g,
            '<label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2" htmlFor="name">\n                                        Nombre Completo <span className="text-gold">*</span>\n                                    </label>\n                                    <input\n                                        id="name"\n                                        name="name"'
        );
        // Teléfono / WhatsApp
        content = content.replace(
            /<label className="block text-\[11px\] font-bold text-charcoal uppercase tracking-wider mb-2" htmlFor="service">\s*Teléfono \/ WhatsApp <span className="text-gold">\*<\/span>\s*<\/label>\s*<input\s*name="phone"/g,
            '<label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2" htmlFor="phone">\n                                        Teléfono / WhatsApp <span className="text-gold">*</span>\n                                    </label>\n                                    <input\n                                        id="phone"\n                                        name="phone"'
        );
        // Breve descripción
        content = content.replace(
            /<label className="block text-\[11px\] font-bold text-charcoal uppercase tracking-wider mb-2" htmlFor="service">\s*Breve descripción de su consulta <span className="text-gray-400 font-normal">\(Opcional\)<\/span>\s*<\/label>\s*<textarea/g,
            '<label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2" htmlFor="message">\n                                    Breve descripción de su consulta <span className="text-gray-400 font-normal">(Opcional)</span>\n                                </label>\n                                <textarea id="message"'
        );
    }

    if (file === 'Navbar.tsx') {
        content = content.replace(
            /<button\s*onClick=\{\(\) => setIsOpen\(!isOpen\)\}\s*className="text-obsidian"/g,
            '<button\n              onClick={() => setIsOpen(!isOpen)}\n              className="text-obsidian p-3"'
        );
    }

    if (file === 'Partners.tsx') {
        content = content.replace(
            /<motion\.button[\s\S]*?className="h-2 rounded-full shrink-0 focus:outline-none"[\s\S]*?aria-label=\{`Ver socio \$\{dotIdx \+ 1\}`\}\s*\/>/g,
            `<button
                                                key={dotIdx}
                                                onClick={() => {
                                                    setDirection(dotIdx > currentIndex ? 1 : -1);
                                                    setCurrentIndex(dotIdx);
                                                }}
                                                aria-label={\`Ver socio \${dotIdx + 1}\`}
                                                className="flex items-center justify-center w-12 h-12"
                                            >
                                                <motion.span
                                                    layout
                                                    initial={false}
                                                    animate={{
                                                        width: isActive ? 24 : 8,
                                                        backgroundColor: isActive ? '#946B00' : 'rgba(209, 213, 219, 0.8)'
                                                    }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                    className="h-2 rounded-full shrink-0 block"
                                                />
                                            </button>`
        );
    }

    if (file === 'Services.tsx') {
        content = content.replace(
            /className="absolute top-4 right-4 p-2 border border-white\/10 hover:bg-white hover:text-black transition-all duration-200 text-white"/g,
            'className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all duration-200 text-white" aria-label="Cerrar"'
        );
        content = content.replace(
            /className="border border-white\/20 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-colors"/g,
            'className="border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-8 py-3 hover:bg-white hover:text-black transition-colors"'
        );
    }

    if (file === 'Location.tsx') {
        content = content.replace(
            /className="inline-flex items-center gap-1\.5 text-xs text-charcoal\/70 hover:text-obsidian font-medium transition-colors cursor-pointer"/g,
            'className="inline-flex items-center gap-1.5 text-xs text-charcoal/70 hover:text-obsidian font-medium transition-colors cursor-pointer py-2.5 px-3 -ml-3"'
        );
    }

    if (file === 'SocioMario.tsx' || file === 'SocioAlejandro.tsx') {
        content = content.replace(
            /className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-gold hover:text-obsidian transition-colors mb-12"/g,
            'className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-gold hover:text-obsidian transition-colors mb-12 py-3 px-2 -ml-2"'
        );
    }

    fs.writeFileSync(filePath, content);
}

console.log('Script completed successfully.');
