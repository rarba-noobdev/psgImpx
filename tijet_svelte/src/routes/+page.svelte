<script>
  import { onMount } from 'svelte';
  let showBackToTop = false;

  onMount(() => {
    window.addEventListener('scroll', () => {
      showBackToTop = window.scrollY > 300;
    });
  });

  const productsArry = [
    { id: 1, name: "Indexable U Drill", imageSrc: "https://www.psgimpex.com/Assets/u-drill.jpg", alt: "udrills", description: "High-precision drilling tools for efficient machining." },
    { id: 2, name: "SPMG/SPGT 05/06/07/09/11/14", imageSrc: "https://www.psgimpex.com/Assets/SPMG.jpg", alt: "SPMG /SPGT", description: "Versatile inserts for turning and milling operations." },
    { id: 3, name: "Top Clamp Tool Holders", imageSrc: "https://www.psgimpex.com/Assets/Tool-Holders.jpg", alt: "Tool-Holders", description: "Secure and reliable holders for various tools." },
    { id: 4, name: "Boring Bars", imageSrc: "https://www.psgimpex.com/Assets/Boring-bars.jpg", alt: "Boring bars", description: "Precision boring tools for internal machining." },
    { id: 5, name: "Indexable End Mill", imageSrc: "https://www.psgimpex.com/Assets/indexable-end-mill-cutters-500x500.jpg", alt: "end mill", description: "Multi-purpose end mills with replaceable inserts." },
    { id: 6, name: "APMT 1135 / APMT 1604", imageSrc: "https://www.psgimpex.com/Assets/APMT-Insert.jpg", alt: "carbide insert", description: "Durable carbide inserts for high-speed cutting." },
    { id: 7, name: "Grooving/Parting Insert", imageSrc: "https://www.psgimpex.com/Assets/grooving-inserted.webp", alt: "grooving insert", description: "Specialized inserts for grooving and parting tasks." },
    { id: 8, name: "Solid Carbide Drill/End Mill/Reamer/Hole Mill/Form Tools", imageSrc: "https://www.psgimpex.com/Assets/Solid-Carbide.jpg", alt: "solid carbide", description: "All-in-one solid carbide tools for precision work." },
    { id: 9, name: "Carbide/PCD/CBN/Cermet Insert", imageSrc: "https://www.psgimpex.com/Assets/Carbide-inserts.jpg", alt: "carbides", description: "Advanced inserts for tough materials." },
    { id: 10, name: "Face/Shoulder Milling Cutters", imageSrc: "https://www.psgimpex.com/Assets/Face-Mill.jpg", alt: "face cutters", description: "Efficient cutters for face and shoulder milling." },
    { id: 11, name: "Imported Solid Carbide Rods", imageSrc: "https://www.psgimpex.com/Assets/Carbide-Rods.jpg", alt: "carbide rods", description: "High-quality rods for custom tool manufacturing." },
    { id: 12, name: "BT 40 Adaptor", imageSrc: "https://www.psgimpex.com/Assets/boring-head.jpg", alt: "BT40 adapter", description: "Adaptors for BT40 tool systems." },
    { id: 13, name: "APMT 1135 PDER", imageSrc: "https://www.psgimpex.com/Assets/Tijet-product-1.jpg", alt: "APMT1135", description: "Enhanced inserts for superior performance." },
    { id: 14, name: "APMT 1604 PDER", imageSrc: "https://www.psgimpex.com/Assets/Tijet-product-2.jpg", alt: "APMT1604", description: "Robust inserts for heavy-duty applications." }
  ];
</script>

<!-- Navbar -->
<nav class="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow-lg z-50 py-4 transition-all duration-300">
  <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
    <h1 class="font-clash text-3xl font-bold text-green-700 flex items-center">
      <i class="fas fa-tools mr-2 text-green-600"></i> TIJET
    </h1>
    <div class="space-x-6 font-inter text-lg">
      <a href="#home" class="hover:text-green-600 transition">Home</a>
      <a href="#about" class="hover:text-green-600 transition">About</a>
      <a href="#products" class="hover:text-green-600 transition">Products</a>
      <a href="#why-us" class="hover:text-green-600 transition">Why Us</a>
      <a href="#contact" class="hover:text-green-600 transition">Contact</a>
    </div>
  </div>
</nav>

<!-- Hero -->
<section id="home" class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
  <!-- YouTube Video Background -->
  <div class="absolute inset-0">
    <iframe 
      class="absolute top-0 left-0 w-full h-full scale-110 transform object-cover pointer-events-none"
      src="https://www.youtube.com/embed/_pSYopTb36M?autoplay=1&mute=1&start=10&loop=1&playlist=_pSYopTb36M&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0"
      frameborder="0"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <!-- Enhanced gradient overlay -->
  <div class="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/70 to-green-700/60"></div>

  <!-- Content with enhanced animation -->
  <div class="relative z-10 text-center text-white px-6 max-w-5xl animate-slide-up">
    <h1 class="font-clash text-6xl md:text-8xl font-bold tracking-tight mb-4">TIJET</h1>
    <p class="mt-6 text-lg md:text-2xl font-inter leading-relaxed max-w-3xl mx-auto">
      Welcome to <span class="font-semibold">TIJET</span>, promoted by <span class="font-bold">PSG Impex</span>, merging 25+ years of industry leadership with 200+ CNC & VMC projects.  
      <br /> With <span class="font-semibold">TIJET</span>, you're not just a client – you're a partner in progress.
    </p>
    <p class="mt-12 italic font-light text-xl">"Your success is our commitment."</p>
    <a href="#contact" class="mt-8 inline-block bg-white text-green-700 px-8 py-3 rounded-full font-inter font-semibold hover:bg-green-100 transition shadow-md">Get in Touch</a>
  </div>
</section>

<!-- About Section -->
<section id="about" class="py-20 bg-gray-100">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-4xl md:text-5xl font-clash font-bold text-center mb-12 text-green-800">About Us</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="flex flex-col justify-center">
        <p class="text-lg font-inter text-gray-700 leading-relaxed">
          <span class="font-bold">PSG Impex</span> has been at the forefront of precision engineering for over 25 years. We specialize in high-quality CNC and VMC tools, delivering innovative solutions to industries worldwide.
        </p>
        <p class="mt-4 text-lg font-inter text-gray-700 leading-relaxed">
          Our <span class="font-semibold">TIJET</span> brand represents the pinnacle of cutting-edge technology, ensuring reliability and performance in every product.
        </p>
      </div>
      <div class="relative">
        <img src="https://media.istockphoto.com/id/154368811/photo/cnc-milling-at-work.jpg" alt="About Us" class="rounded-2xl shadow-xl object-cover h-80 w-full" />
      </div>
    </div>
  </div>
</section>

<!-- Icons/Features -->
<section class="bg-white py-20">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
    <div class="bg-gray-50 rounded-2xl shadow-lg p-10 flex flex-col items-center hover:shadow-2xl hover:bg-green-50 transition transform hover:-translate-y-2 hover:scale-105">
      <i class="fas fa-tools text-5xl text-green-600 mb-4"></i>
      <h3 class="text-xl font-clash font-semibold mb-2">Expert Tools</h3>
      <p class="text-lg font-inter text-gray-700 text-center">Precision, quality, and innovation in every tool.</p>
    </div>
    <div class="bg-gray-50 rounded-2xl shadow-lg p-10 flex flex-col items-center hover:shadow-2xl hover:bg-green-50 transition transform hover:-translate-y-2 hover:scale-105">
      <i class="fas fa-cogs text-5xl text-green-600 mb-4"></i>
      <h3 class="text-xl font-clash font-semibold mb-2">Cutting-Edge Tech</h3>
      <p class="text-lg font-inter text-gray-700 text-center">Efficiency through advanced technology.</p>
    </div>
    <div class="bg-gray-50 rounded-2xl shadow-lg p-10 flex flex-col items-center hover:shadow-2xl hover:bg-green-50 transition transform hover:-translate-y-2 hover:scale-105">
      <i class="fas fa-thumbs-up text-5xl text-green-600 mb-4"></i>
      <h3 class="text-xl font-clash font-semibold mb-2">Proven Excellence</h3>
      <p class="text-lg font-inter text-gray-700 text-center">25+ years, 200+ projects, 100% satisfaction.</p>
    </div>
  </div>
</section>

<!-- Products -->
<section id="products" class="py-20 bg-gray-100">
  <h2 class="text-4xl md:text-5xl font-clash font-bold text-center mb-12 text-green-800">Our Products</h2>
  <div class="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6">
    {#each productsArry as product}
      <div class="bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
        <img src={product.imageSrc} alt={product.alt} class="h-56 w-full object-cover" />
        <div class="p-6">
          <h3 class="text-lg font-clash font-semibold text-green-700 mb-2">{product.name}</h3>
          <p class="text-sm font-inter text-gray-600">{product.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Why Choose Us -->
<section id="why-us" class="relative py-24 text-white text-center overflow-hidden">
  <div class="absolute inset-0 bg-cover bg-center bg-[url('https://i.ibb.co/CttbWbt/why-choose-us.jpg')] transform scale-110 transition-transform duration-1000"></div>
  <div class="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-700/80"></div>
  <div class="relative z-10 max-w-4xl mx-auto px-6 animate-slide-up">
    <h3 class="text-4xl md:text-5xl font-clash font-bold mb-6">Why PSG Impex?</h3>
    <p class="text-lg md:text-2xl font-inter leading-relaxed">
      PSG Impex stands out with decades of precision manufacturing, advanced CNC technologies, and
      a track record of excellence with major brands. Our commitment to innovation ensures
      customized solutions for your unique needs.
    </p>
  </div>
</section>

<!-- Contact -->
<section id="contact" class="bg-white py-20 px-6">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    <div class="flex flex-col justify-center">
      <h3 class="text-3xl font-clash font-bold mb-4 text-green-800">Want to get in Touch?</h3>
      <p class="text-lg font-inter mb-6 text-gray-700">Feel free to contact us for inquiries or partnerships.</p>
      <div class="flex gap-8 text-4xl text-green-700">
        <a href="https://wa.me/918838751336" class="hover:text-green-900 transition"><i class="fab fa-whatsapp"></i></a>
        <a href="mailto:psgimpexsales@gmail.com" class="hover:text-green-900 transition"><i class="far fa-envelope"></i></a>
        <a href="tel:+918838751336" class="hover:text-green-900 transition"><i class="fas fa-phone"></i></a>
      </div>
    </div>
    <div class="bg-gray-50 p-8 rounded-2xl shadow-lg">
      <h3 class="text-4xl font-clash font-bold text-green-800">PSG IMPEX</h3>
      <h2 class="text-2xl font-semibold mt-2 font-inter text-gray-800">M.R Karthikeyan</h2>
      <p class="mt-4 font-inter text-gray-700">No.2/4, Doss 2nd Cross Street,<br />Thundalam, Chennai-600077</p>
      <p class="mt-2 text-gray-600 font-inter">GSTIN : 33FHWPS4947G2ZI</p>
      <p class="mt-2 font-inter text-gray-700">
        <a href="mailto:psgimpexsales@gmail.com" class="hover:underline hover:text-green-700">psgimpexsales@gmail.com</a>
      </p>
      <p class="font-inter text-gray-700">
        <a href="tel:+918838751336" class="hover:underline hover:text-green-700">+91 88387 51336</a>
      </p>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="bg-green-800 text-white py-8 text-center font-inter">
  <p>&copy; 2025 TIJET by PSG Impex. All rights reserved.</p>
  <div class="mt-4 flex justify-center gap-6 text-2xl">
    <a href="https://www.facebook.com" class="hover:text-green-300 transition"><i class="fab fa-facebook-f"></i></a>
    <a href="https://www.twitter.com" class="hover:text-green-300 transition"><i class="fab fa-twitter"></i></a>
    <a href="https://www.linkedin.com" class="hover:text-green-300 transition"><i class="fab fa-linkedin-in"></i></a>
  </div>
</footer>

<!-- Back to Top Button -->
{#if showBackToTop}
  <a href="#home" class="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-110">
    <i class="fas fa-arrow-up"></i>
  </a>
{/if}

<svelte:head>
  <title>TIJET - Precision Tools by PSG Impex</title>
  <meta name="description" content="High-quality CNC and VMC tools from TIJET, promoted by PSG Impex with 25+ years of experience." />
  <script src="https://kit.fontawesome.com/ebe180da63.js" crossorigin="anonymous"></script>
  <link href="https://api.fontshare.com/v2/css?f[]=inter@400,500,700&f[]=clash-display@400,600,700&display=swap" rel="stylesheet">
  <style>
    .font-clash { font-family: 'Clash Display', sans-serif; }
    .font-inter { font-family: 'Inter', sans-serif; }
    @keyframes slideUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
    .animate-slide-up { animation: slideUp 1s ease-out; }
  </style>
</svelte:head>