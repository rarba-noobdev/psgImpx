<script>
  import { onMount } from 'svelte';
  let showBackToTop = false;
  let scrollY = 0;

  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
      showBackToTop = scrollY > 300;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

  // Smooth scroll function
  const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  };
</script>

<!-- Navbar with parallax effect -->
<nav class="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg z-50 py-4 transition-all duration-500 ease-out"
     style="transform: translateY({Math.max(0, scrollY * -0.3)}px)">
  <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
    <h1 class="font-clash text-3xl font-bold text-green-700 flex items-center animate-pulse-slow">
      <i class="fas fa-tools mr-3 text-green-600 animate-spin-slow"></i> TIJET
    </h1>
    <div class="space-x-8 font-inter text-lg">
      <a href="#home" on:click|preventDefault={() => smoothScroll('#home')} class="hover:text-green-600 transition-all duration-300 hover:scale-110">Home</a>
      <a href="#about" on:click|preventDefault={() => smoothScroll('#about')} class="hover:text-green-600 transition-all duration-300 hover:scale-110">About</a>
      <a href="#products" on:click|preventDefault={() => smoothScroll('#products')} class="hover:text-green-600 transition-all duration-300 hover:scale-110">Products</a>
      <a href="#why-us" on:click|preventDefault={() => smoothScroll('#why-us')} class="hover:text-green-600 transition-all duration-300 hover:scale-110">Why Us</a>
      <a href="#contact" on:click|preventDefault={() => smoothScroll('#contact')} class="hover:text-green-600 transition-all duration-300 hover:scale-110">Contact</a>
    </div>
  </div>
</nav>

<!-- Enhanced Hero Section -->
<section id="home" class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
  <!-- Updated YouTube Video Background -->
  <div class="absolute inset-0">
    <iframe 
      class="absolute top-0 left-0 w-full h-full scale-110 transform object-cover pointer-events-none opacity-90"
      src="https://www.youtube.com/embed/JbFHaj2vp0k?autoplay=1&mute=1&loop=1&playlist=JbFHaj2vp0k&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0&showinfo=0"
      frameborder="0"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  
  <!-- Enhanced gradient overlay with animated particles effect -->
  <div class="absolute inset-0 bg-gradient-to-br from-green-900/85 via-green-800/75 to-emerald-700/70 animate-gradient-shift"></div>
  
  <!-- Floating particles animation -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="floating-particles"></div>
  </div>

  <!-- Enhanced content with staggered animations -->
  <div class="relative z-10 text-center text-white px-6 max-w-6xl">
    <div class="animate-slide-up-delayed">
      <h1 class="font-clash text-7xl md:text-9xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-emerald-200 animate-text-shimmer">
        TIJET
      </h1>
    </div>
    
    <div class="animate-slide-up-delayed-2">
      <p class="mt-8 text-xl md:text-3xl font-inter leading-relaxed max-w-4xl mx-auto font-light">
        Welcome to <span class="font-semibold text-green-300">TIJET</span>, promoted by <span class="font-bold text-emerald-300">PSG Impex</span>, merging 25+ years of industry leadership with 200+ CNC & VMC projects.
      </p>
    </div>
    
    <div class="animate-slide-up-delayed-3">
      <p class="mt-6 text-lg md:text-2xl font-inter leading-relaxed max-w-3xl mx-auto text-green-100">
        With <span class="font-semibold text-emerald-300">TIJET</span>, you're not just a client – you're a partner in progress.
      </p>
    </div>
    
    <div class="animate-slide-up-delayed-4">
      <p class="mt-16 italic font-light text-2xl md:text-3xl text-green-200 animate-pulse-subtle">"Your success is our commitment."</p>
      <a href="#contact" on:click|preventDefault={() => smoothScroll('#contact')} 
         class="mt-12 inline-block bg-gradient-to-r from-white to-green-50 text-green-800 px-12 py-4 rounded-full font-inter font-bold hover:from-green-100 hover:to-white transition-all duration-500 shadow-2xl hover:shadow-green-500/20 transform hover:scale-110 hover:-translate-y-1 active:scale-95">
        Get in Touch
      </a>
    </div>
  </div>
</section>

<!-- Enhanced About Section -->
<section id="about" class="py-24 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
  <div class="absolute inset-0 bg-pattern opacity-5"></div>
  <div class="max-w-6xl mx-auto px-6 relative z-10">
    <h2 class="text-5xl md:text-6xl font-clash font-bold text-center mb-16 text-green-800 animate-fade-in-up">About Us</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div class="flex flex-col justify-center space-y-6 animate-slide-in-left">
        <p class="text-xl font-inter text-gray-700 leading-relaxed">
          <span class="font-bold text-green-800">PSG Impex</span> has been at the forefront of precision engineering for over 25 years. We specialize in high-quality CNC and VMC tools, delivering innovative solutions to industries worldwide.
        </p>
        <p class="text-xl font-inter text-gray-700 leading-relaxed">
          Our <span class="font-semibold text-green-700">TIJET</span> brand represents the pinnacle of cutting-edge technology, ensuring reliability and performance in every product.
        </p>
        <div class="flex space-x-8 mt-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-green-700 font-clash">25+</div>
            <div class="text-sm text-gray-600 font-inter">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-green-700 font-clash">200+</div>
            <div class="text-sm text-gray-600 font-inter">Projects Completed</div>
          </div>
        </div>
      </div>
      <div class="relative animate-slide-in-right">
        <div class="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur opacity-20 animate-pulse-slow"></div>
        <img src="https://media.istockphoto.com/id/154368811/photo/cnc-milling-at-work.jpg" 
             alt="About Us" 
             class="relative rounded-3xl shadow-2xl object-cover h-96 w-full transform hover:scale-105 transition-all duration-700" />
      </div>
    </div>
  </div>
</section>

<!-- Enhanced Icons/Features Section -->
<section class="bg-white py-24 relative overflow-hidden">
  <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 relative z-10">
    <div class="group bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl shadow-xl p-12 flex flex-col items-center hover:shadow-2xl hover:from-green-50 hover:to-emerald-50 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 animate-fade-in-up">
      <div class="relative">
        <i class="fas fa-tools text-6xl text-green-600 mb-6 group-hover:text-green-700 transition-all duration-500 group-hover:animate-bounce"></i>
        <div class="absolute -inset-2 bg-green-200 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 animate-pulse"></div>
      </div>
      <h3 class="text-2xl font-clash font-bold mb-4 text-green-800 group-hover:text-green-900">Expert Tools</h3>
      <p class="text-lg font-inter text-gray-700 text-center group-hover:text-gray-800">Precision, quality, and innovation in every tool.</p>
    </div>
    
    <div class="group bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl shadow-xl p-12 flex flex-col items-center hover:shadow-2xl hover:from-green-50 hover:to-emerald-50 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 animate-fade-in-up animation-delay-200">
      <div class="relative">
        <i class="fas fa-cogs text-6xl text-green-600 mb-6 group-hover:text-green-700 transition-all duration-500 group-hover:animate-spin-slow"></i>
        <div class="absolute -inset-2 bg-green-200 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 animate-pulse"></div>
      </div>
      <h3 class="text-2xl font-clash font-bold mb-4 text-green-800 group-hover:text-green-900">Cutting-Edge Tech</h3>
      <p class="text-lg font-inter text-gray-700 text-center group-hover:text-gray-800">Efficiency through advanced technology.</p>
    </div>
    
    <div class="group bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl shadow-xl p-12 flex flex-col items-center hover:shadow-2xl hover:from-green-50 hover:to-emerald-50 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 animate-fade-in-up animation-delay-400">
      <div class="relative">
        <i class="fas fa-thumbs-up text-6xl text-green-600 mb-6 group-hover:text-green-700 transition-all duration-500 group-hover:animate-pulse"></i>
        <div class="absolute -inset-2 bg-green-200 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 animate-pulse"></div>
      </div>
      <h3 class="text-2xl font-clash font-bold mb-4 text-green-800 group-hover:text-green-900">Proven Excellence</h3>
      <p class="text-lg font-inter text-gray-700 text-center group-hover:text-gray-800">25+ years, 200+ projects, 100% satisfaction.</p>
    </div>
  </div>
</section>

<!-- Enhanced Products Section -->
<section id="products" class="py-24 bg-gradient-to-br from-gray-100 to-green-100 relative overflow-hidden">
  <div class="absolute inset-0 bg-pattern opacity-5"></div>
  <div class="relative z-10">
    <h2 class="text-5xl md:text-6xl font-clash font-bold text-center mb-20 text-green-800 animate-fade-in-up">Our Products</h2>
    <div class="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6">
      {#each productsArry as product, index}
        <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 overflow-hidden animate-fade-in-up"
             style="animation-delay: {index * 100}ms">
          <div class="relative overflow-hidden">
            <img src={product.imageSrc} 
                 alt={product.alt} 
                 class="h-64 w-full object-cover transition-all duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </div>
          <div class="p-8">
            <h3 class="text-xl font-clash font-bold text-green-800 mb-3 group-hover:text-green-900 transition-colors">{product.name}</h3>
            <p class="text-base font-inter text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">{product.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Enhanced Why Choose Us Section -->
<section id="why-us" class="relative py-32 text-white text-center overflow-hidden">
  <div class="absolute inset-0 bg-cover bg-center bg-[url('https://i.ibb.co/CttbWbt/why-choose-us.jpg')] transform scale-110 transition-transform duration-1000"
       style="transform: scale({1.1 + scrollY * 0.0001})"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-emerald-700/80"></div>
  <div class="absolute inset-0 bg-pattern opacity-10"></div>
  
  <div class="relative z-10 max-w-5xl mx-auto px-6">
    <h3 class="text-5xl md:text-7xl font-clash font-bold mb-12 animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200">
      Why PSG Impex?
    </h3>
    <p class="text-xl md:text-3xl font-inter leading-relaxed animate-slide-up-delayed font-light">
      PSG Impex stands out with decades of precision manufacturing, advanced CNC technologies, and
      a track record of excellence with major brands. Our commitment to innovation ensures
      customized solutions for your unique needs.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
      <div class="animate-fade-in-up animation-delay-200">
        <div class="text-5xl font-bold text-green-300 font-clash mb-4">25+</div>
        <div class="text-xl font-inter">Years of Excellence</div>
      </div>
      <div class="animate-fade-in-up animation-delay-400">
        <div class="text-5xl font-bold text-green-300 font-clash mb-4">200+</div>
        <div class="text-xl font-inter">Successful Projects</div>
      </div>
      <div class="animate-fade-in-up animation-delay-600">
        <div class="text-5xl font-bold text-green-300 font-clash mb-4">100%</div>
        <div class="text-xl font-inter">Client Satisfaction</div>
      </div>
    </div>
  </div>
</section>

<!-- Enhanced Contact Section -->
<section id="contact" class="bg-gradient-to-br from-white to-green-50 py-24 px-6 relative overflow-hidden">
  <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
    <div class="flex flex-col justify-center animate-slide-in-left">
      <h3 class="text-4xl md:text-5xl font-clash font-bold mb-8 text-green-800">Want to get in Touch?</h3>
      <p class="text-xl font-inter mb-12 text-gray-700 leading-relaxed">Feel free to contact us for inquiries or partnerships. We're here to help you succeed.</p>
      <div class="flex gap-12 text-5xl">
        <a href="https://wa.me/918838751336" 
           class="text-green-600 hover:text-green-800 transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a href="mailto:psgimpexsales@gmail.com" 
           class="text-green-600 hover:text-green-800 transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12">
          <i class="far fa-envelope"></i>
        </a>
        <a href="tel:+918838751336" 
           class="text-green-600 hover:text-green-800 transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12">
          <i class="fas fa-phone"></i>
        </a>
      </div>
    </div>
    <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-12 rounded-3xl shadow-2xl animate-slide-in-right border border-green-200">
      <h3 class="text-5xl font-clash font-bold text-green-800 mb-4">PSG IMPEX</h3>
      <h2 class="text-3xl font-semibold mt-4 font-inter text-gray-800 mb-8">M.R Karthikeyan</h2>
      <div class="space-y-4 text-lg font-inter text-gray-700 leading-relaxed">
        <p>No.2/4, Doss 2nd Cross Street,<br />Thundalam, Chennai-600077</p>
        <p class="text-gray-600">GSTIN : 33FHWPS4947G2ZI</p>
        <p>
          <a href="mailto:psgimpexsales@gmail.com" 
             class="hover:underline hover:text-green-700 transition-all duration-300 hover:scale-105 inline-block">
            psgimpexsales@gmail.com
          </a>
        </p>
        <p>
          <a href="tel:+918838751336" 
             class="hover:underline hover:text-green-700 transition-all duration-300 hover:scale-105 inline-block">
            +91 88387 51336
          </a>
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Enhanced Footer -->
<footer class="bg-gradient-to-r from-green-800 via-green-900 to-emerald-800 text-white py-12 text-center font-inter relative overflow-hidden">
  <div class="absolute inset-0 bg-pattern opacity-10"></div>
  <div class="relative z-10">
    <p class="text-lg mb-6">&copy; 2025 TIJET by PSG Impex. All rights reserved.</p>
    <div class="flex justify-center gap-8 text-3xl">
      <a href="https://www.facebook.com" 
         class="hover:text-green-300 transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.twitter.com" 
         class="hover:text-green-300 transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://www.linkedin.com" 
         class="hover:text-green-300 transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>
</footer>

<!-- Enhanced Back to Top Button -->
{#if showBackToTop}
  <a href="#home" 
     on:click|preventDefault={() => smoothScroll('#home')}
     class="fixed bottom-8 right-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-full shadow-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 animate-bounce-slow z-50">
    <i class="fas fa-arrow-up text-xl"></i>
  </a>
{/if}

<svelte:head>
  <title>TIJET - Precision Tools by PSG Impex</title>
  <meta name="description" content="High-quality CNC and VMC tools from TIJET, promoted by PSG Impex with 25+ years of experience." />
  <script src="https://kit.fontawesome.com/ebe180da63.js" crossorigin="anonymous"></script>
  <link href="https://api.fontshare.com/v2/css?f[]=inter@400,500,700&f[]=clash-display@400,600,700&display=swap" rel="stylesheet">
  <style>
    * {
      scroll-behavior: smooth;
    }
    
    .font-clash { font-family: 'Clash Display', sans-serif; }
    .font-inter { font-family: 'Inter', sans-serif; }
    
    /* Enhanced Animations */
    @keyframes slideUp { 
      from { opacity: 0; transform: translateY(80px); } 
      to { opacity: 1; transform: translateY(0); } 
    }
    @keyframes slideInLeft { 
      from { opacity: 0; transform: translateX(-80px); } 
      to { opacity: 1; transform: translateX(0); } 
    }
    @keyframes slideInRight { 
      from { opacity: 0; transform: translateX(80px); } 
      to { opacity: 1; transform: translateX(0); } 
    }
    @keyframes fadeInUp { 
      from { opacity: 0; transform: translateY(60px); } 
      to { opacity: 1; transform: translateY(0); } 
    }
    @keyframes textShimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes spinSlow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes pulseSlow {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    @keyframes pulseSubtle {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.9; }
    }
    @keyframes bounceSlow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    
    .animate-slide-up { animation: slideUp 1s ease-out; }
    .animate-slide-up-delayed { animation: slideUp 1s ease-out 0.2s both; }
    .animate-slide-up-delayed-2 { animation: slideUp 1s ease-out 0.4s both; }
    .animate-slide-up-delayed-3 { animation: slideUp 1s ease-out 0.6s both; }
    .animate-slide-up-delayed-4 { animation: slideUp 1s ease-out 0.8s both; }
    .animate-slide-in-left { animation: slideInLeft 1s ease-out; }
    .animate-slide-in-right { animation: slideInRight 1s ease-out; }
    .animate-fade-in-up { animation: fadeInUp 1s ease-out; }
    .animate-text-shimmer { 
      background-size: 200% 200%;
      animation: textShimmer 3s ease-in-out infinite;
    }
    .animate-gradient-shift { 
      background-size: 400% 400%;
      animation: gradientShift 8s ease infinite;
    }
    .animate-spin-slow { animation: spinSlow 8s linear infinite; }
    .animate-pulse-slow { animation: pulseSlow 4s ease-in-out infinite; }
    .animate-pulse-subtle { animation: pulseSubtle 2s ease-in-out infinite; }
    .animate-bounce-slow { animation: bounceSlow 3s ease-in-out infinite; }
    
    .animation-delay-200 { animation-delay: 0.2s; }
    .animation-delay-400 { animation-delay: 0.4s; }
    .animation-delay-600 { animation-delay: 0.6s; }
    
    /* Background Patterns */
    .bg-pattern {
      background-image: radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.3) 1px, transparent 0);
      background-size: 30px 30px;
    }
    .bg-grid-pattern {
      background-image: linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px);
      background-size: 50px 50px;
    }
    
    /* Floating Particles */
    .floating-particles::before,
    .floating-particles::after {
      content: '';
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      animation: float 6s ease-in-out infinite;
    }
    .floating-particles::before {
      top: 20%;
      left: 20%;
      animation-delay: -2s;
    }
    .floating-particles::after {
      top: 60%;
      right: 20%;
      animation-delay: -4s;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 1; }
      33% { transform: translateY(-30px) rotate(120deg); opacity: 0.8; }
      66% { transform: translateY(-60px) rotate(240deg); opacity: 0.6; }
    }
    
    /* Smooth scrolling enhancement */
    html {
      scroll-behavior: smooth;
      scroll-padding-top: 100px;
    }
    
    /* Enhanced hover effects */
    .hover-glow:hover {
      box-shadow: 0 0 30px rgba(34, 197, 94, 0.3);
    }
    
    /* Video overlay enhancement */
    iframe {
      filter: brightness(0.8) contrast(1.1);
    }
    
    /* Improved responsive design */
    @media (max-width: 768px) {
      .animate-slide-up-delayed,
      .animate-slide-up-delayed-2,
      .animate-slide-up-delayed-3,
      .animate-slide-up-delayed-4 {
        animation-delay: 0.1s;
      }
      
      .font-clash {
        line-height: 1.1;
      }
    }
    
    /* Loading animation */
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    /* Enhanced focus states for accessibility */
    a:focus,
    button:focus {
      outline: 2px solid rgba(34, 197, 94, 0.8);
      outline-offset: 2px;
      border-radius: 4px;
    }
    
    /* Improved contrast for better readability */
    .text-shadow {
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
  </style>
</svelte:head>