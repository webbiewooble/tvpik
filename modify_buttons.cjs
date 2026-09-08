const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// We have 3 sections. Let's find the start of each section.
const vyzStart = html.indexOf('VYZ Packages');
const ziggStart = html.indexOf('Zigg TV IPTV Packages');
const umbrellaStart = html.indexOf('Umbrella IPTV Packages');

function processSection(startIdx, endIdx, pdfUrl) {
    let sectionHtml = html.substring(startIdx, endIdx);
    
    // Regex to match the Contact on WhatsApp button anchor tag
    // It looks like:
    // <a
    //   href="https://wa.me/918588853774"
    //   target="_blank"
    //   class="..."
    // >
    //   Contact on WhatsApp
    // </a>
    const btnRegex = /<a\s*href="https:\/\/wa\.me\/918588853774"\s*target="_blank"\s*class="([^"]+)"\s*>\s*Contact on WhatsApp\s*<\/a>/g;
    
    sectionHtml = sectionHtml.replace(btnRegex, (match, classes) => {
        // Adjust classes to use flex
        let newClasses = classes.replace('block text-center', 'flex items-center justify-center gap-2');
        
        let pdfButtonClasses = 'w-full flex items-center justify-center gap-2 bg-white text-slate-800 border border-slate-200 py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors shadow-sm';
        
        return `<div class="flex flex-col gap-3 mt-auto">
                    <a
                      href="${pdfUrl}"
                      target="_blank"
                      class="${pdfButtonClasses}"
                    >
                      <i data-lucide="file-down" class="w-5 h-5"></i> View & Download PDF
                    </a>
                    <a
                      href="https://wa.me/918588853774"
                      target="_blank"
                      class="${newClasses}"
                    >
                      <i data-lucide="message-circle" class="w-5 h-5"></i> Contact on WhatsApp
                    </a>
                  </div>`;
    });
    return sectionHtml;
}

const p1 = html.substring(0, vyzStart);
const p2 = processSection(vyzStart, ziggStart, '/VYZ_Plans.pdf');
const p3 = processSection(ziggStart, umbrellaStart, '/Zigg_Plans.pdf');
const p4 = processSection(umbrellaStart, html.length, '/Umbrella_Packages.pdf');

fs.writeFileSync(filePath, p1 + p2 + p3 + p4, 'utf8');
console.log('Done replacing buttons!');
