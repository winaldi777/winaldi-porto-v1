// Untuk navbar
let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // kalo scroll kebawah
  if(currentScroll > lastScroll && currentScroll > 80) {
    navbar.classList.add("-translate-y-full");
  }
  // scroll keatas
  else {
    navbar.classList.remove("-translate-y-full");
  }

  lastScroll = currentScroll;
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    
    // Toggle icon
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
      icon.setAttribute('data-lucide', 'menu');
    } else {
      icon.setAttribute('data-lucide', 'x');
    }
    lucide.createIcons();
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenuBtn.querySelector('i').setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  });
});

// Re-initialize Lucide icons after DOM updates
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

// Data skills yang akan ditampilkan
const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  backend: ['Node.js', 'PHP'],
  technical: ['Network Installation', 'Crimping', 'Troubleshooting'],
  interpersonal: ['Teamwork', 'Problem-solving','Time Management', 'Monitoring']
};

const wrapper = document.getElementById('tech-stack');

// Loop melalui setiap kategori (frontend, backend, dll)
Object.entries(skills).forEach(([category, items]) => {
  
  // 1. Buat elemen pembungkus kategori
  const section = document.createElement('div');
  
  // 2. Buat judul kategori (Huruf pertama dibuat Kapital)
  const title = document.createElement('h4');
  title.className = "text-sm font-bold text-white/90 uppercase tracking-wider mb-3";
  title.textContent = category;
  
  // 3. Buat tag UL
  const ul = document.createElement('ul');
  ul.className = "flex flex-wrap gap-2"; // Styling agar menyamping seperti badge
  
  // 4. Loop isi dari setiap kategori menjadi LI
  items.forEach(skill => {
    const li = document.createElement('li');
    li.className = "px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300 hover:border-emerald-500/50 transition-color";
    li.textContent = skill;
    ul.appendChild(li);
  });

  // Susun elemen
  section.appendChild(title);
  section.appendChild(ul);
  wrapper.appendChild(section);
});

// Data pengalaman kerja
const experiences = [
  {
    title: 'Boys Dormitory Monitor',
    place: 'Universitas Advent Indonesia - Bandung',
    date: 'January 2026 - Present',
    description: 'Responsible for supervising daily student activities in the dormitory, ensuring discipline, safety, and coordination with dormitory supervisors.',
    current: true
  },
  {
    title: 'Network Engineer',
    place: 'Universitas Advent Indonesia - Bandung',
    date: 'December 2025 - January 2026',
    description: 'Resolved network issues reported to the IT office through on-site troubleshooting and cable diagnostics.\n\nReplaced and installed new network cabling in the Bouganville residential area, including creating updated network topology and cable mapping documentation.',
    current: false,
  },
  {
    title: 'Boys Dormitory Janitor',
    place: 'Universitas Advent Indonesia - Bandung',
    date: 'May 2025 - December 2025',
    description: 'Perform routine cleaning and maintenance of the dormitory hall area to maintain cleanliness and comfort for residents.\n\nCarry out cleaning duties according to the schedule and instructions set by the dormitory supervisor.',
    current: false,
  }
];

const expContainer = document.getElementById('experiences');

experiences.forEach(exp => {
const item = document.createElement('div');
item.className = "relative pl-8";

// Logika untuk titik timeline (dot)
const dotClass = exp.current 
    ? "absolute -left-[6.5px] top-1 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" 
    : "absolute -left-[6.5px] top-1 w-3 h-3 rounded-full bg-[#1f2d3a] border-2 border-gray-600";

  item.innerHTML = `
    <div class="${dotClass}"></div>
    <div class="flex justify-between items-start mb-1">
      <h3 class="text-sm font-medium text-gray-100 leading-none">${exp.title}</h3>
      <span class="text-xs text-gray-500 font-medium">${exp.date}</span>
    </div>
    <p class="text-xs text-gray-400">${exp.place}</p>
    <p class="text-sm text-gray-300 mt-2 whitespace-pre-line">${exp.description}</p>  
  `;

  expContainer.appendChild(item);
});


// Data sertifikasi
const certifications = [
  {
    title: 'IT Specialist: HTML5 Application Development',
    issuer: 'Certiport - A Pearson VUE Business',
    date: 'November 2025',
    image: '/assets/certifications/it-specialist.jpg',
  }
];
const certContainer = document.getElementById('certifications');
certifications.forEach(cert => {
  const item = document.createElement('div');
  item.className = "flex flex-col items-center gap-4";

  item.innerHTML = `
    <div>
      <div class="flex flex-col bg-white/5 border border-white/10 rounded-md p-4 items-center gap-2">
        <h3 class="text font-bold text-gray-100">${cert.title}</h3>
        <p class="text-sm text-gray-400">${cert.issuer}</p>
        <span class="text-xs text-gray-500 font-medium">${cert.date}</span>
        <img src="${cert.image}" alt="${cert.title}" class="w-full object-cover rounded-md">
      </div>
    </div>
  `;

  certContainer.appendChild(item);
});

// untuk form email
const modal = document.getElementById("emailModal");
const openBtn = document.getElementById("openEmailModal");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("contactForm");

// buka modal
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

// tutup modal
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// klik luar modal = tutup
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

// submit form -> buka email client
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

  window.location.href =
    `mailto:wnaldytmbaa@gmail.com?subject=${subject}&body=${body}`;

});