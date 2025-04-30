<template>
  <div class="min-h-screen bg-black text-white font-sans">
    <!-- Animated background pattern -->
    <div class="fixed inset-0 z-0 opacity-10">
      <div class="absolute inset-0 bg-grid-white/[0.2] bg-grid-pattern"></div>
    </div>

    <!-- Navigation -->
    <nav class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/80 border-b border-white/10">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <a href="#" class="text-xl font-bold tracking-tighter">
            <span class="text-white">Ryobi</span><span class="text-gray-500">.</span>
          </a>
          <div class="hidden md:flex space-x-8">
            <a v-for="(item, index) in navItems" :key="index" :href="item.href" 
               class="text-sm font-medium hover:text-gray-400 transition-colors relative group">
              {{ item.label }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <button @click="toggleMobileMenu" class="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center">
      <button @click="toggleMobileMenu" class="absolute top-4 right-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="flex flex-col space-y-6 items-center">
        <a v-for="(item, index) in navItems" :key="index" :href="item.href" @click="toggleMobileMenu" 
           class="text-xl font-medium hover:text-gray-400 transition-colors">
          {{ item.label }}
        </a>
      </div>
    </div>

    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div class="noise-overlay"></div>
      <div class="container mx-auto px-4 z-10 py-20">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <div class="space-y-6 max-w-2xl">
              <div class="inline-block reveal-animation">
                <span class="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20">
                  Frontend Developer
                </span>
              </div>
              <h1 class="text-5xl md:text-7xl font-bold tracking-tighter leading-tight reveal-animation">
                <span class="block">Hi, I'm</span>
                <span class="block glitch-text" data-text="Ryobi Surya Atmaja">Ryobi Surya Atmaja</span>
              </h1>
              <p class="text-xl text-gray-400 reveal-animation">
                I build responsive web and mobile applications using Nuxt 3, React, Flutter, and WordPress.
              </p>
              <div class="flex flex-wrap gap-4 reveal-animation">
                <a href="#projects" class="btn-primary">
                  View Projects
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a href="#contact" class="btn-secondary">
                  Contact Me
                </a>
              </div>
              <div class="flex space-x-4 pt-4 reveal-animation">
                <a href="https://github.com/Kittu533" target="_blank" rel="noopener noreferrer" 
                   class="social-icon-link">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/yobi-suya-atmaja-1996b729a/" target="_blank" rel="noopener noreferrer" 
                   class="social-icon-link">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://yobidev.vercel.id" target="_blank" rel="noopener noreferrer" 
                   class="social-icon-link">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div class="relative w-64 h-64 md:w-80 md:h-80 reveal-animation">
              <div class="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse"></div>
              <div class="absolute inset-1 rounded-full bg-black flex items-center justify-center overflow-hidden border border-white/40">
                <div class="w-full h-full bg-black flex items-center justify-center text-5xl font-bold text-white">
                  <span class="glitch-text" data-text="RS">RS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" class="text-white/50 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="relative py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="section-header">
            <h2 class="section-title">About Me</h2>
            <div class="section-line"></div>
          </div>
          <div class="mt-12 glass-card p-8 reveal-animation">
            <div class="flex flex-col md:flex-row gap-8">
              <div class="md:w-2/3">
                <p class="text-lg mb-6 text-gray-300">
                  I am a Frontend Developer with hands-on experience in developing responsive web and mobile applications 
                  using Nuxt 3, Laravel, React, Flutter, and WordPress.
                </p>
                <p class="text-lg mb-8 text-gray-300">
                  I have a proven track record in delivering real-world projects, including the JogFarm Android app under 
                  the national PKMKC Program and the UTY Growpath#2 event website. Currently contributing to a multi-platform 
                  system at Gama Integra Informatika, building a web-based admin dashboard and mobile web apps.
                </p>
              </div>
              <div class="md:w-1/3">
                <div class="space-y-6">
                  <div class="space-y-2">
                    <h3 class="text-xl font-bold text-white">Contact</h3>
                    <ul class="space-y-3">
                      <li class="flex items-center">
                        <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <a href="mailto:robiatmaja7@gmail.com" class="text-gray-300 hover:text-white">robiatmaja7@gmail.com</a>
                      </li>
                      <li class="flex items-center">
                        <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <span class="text-gray-300">+62 822 4190 8389</span>
                      </li>
                      <li class="flex items-center">
                        <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span class="text-gray-300">Sleman, Yogyakarta</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-8">
              <a href="#" class="btn-primary inline-flex items-center">
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section with Infinite Scroll -->
    <section id="skills" class="relative py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="section-header">
            <h2 class="section-title">Technical Skills</h2>
            <div class="section-line"></div>
          </div>
          
          <!-- Infinite scrolling skills ticker -->
          <div class="mt-12 overflow-hidden reveal-animation">
            <div class="skills-ticker-container">
              <div class="skills-ticker">
                <div v-for="(skill, index) in technicalSkills" :key="index" class="skill-tag">
                  {{ skill }}
                </div>
                <div v-for="(skill, index) in technicalSkills" :key="`repeat-${index}`" class="skill-tag">
                  {{ skill }}
                </div>
              </div>
            </div>
            
            <!-- Second row going opposite direction -->
            <div class="skills-ticker-container mt-4">
              <div class="skills-ticker-reverse">
                <div v-for="(skill, index) in technicalSkills.slice().reverse()" :key="`rev-${index}`" class="skill-tag">
                  {{ skill }}
                </div>
                <div v-for="(skill, index) in technicalSkills.slice().reverse()" :key="`rev-repeat-${index}`" class="skill-tag">
                  {{ skill }}
                </div>
              </div>
            </div>
          </div>
          
          <!-- Skills grid -->
          <!-- <div class="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 reveal-animation">
            <div v-for="(skill, index) in technicalSkills" :key="`grid-${index}`" 
                 class="skill-card flex flex-col items-center justify-center p-6 glass-card hover:border-white/40 transition-all duration-300">
              <span class="text-lg font-bold text-white">{{ skill }}</span>
            </div>
          </div> -->
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="relative py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="section-header">
            <h2 class="section-title">Experience</h2>
            <div class="section-line"></div>
          </div>
          
          <div class="mt-12 glass-card p-8 reveal-animation">
            <!-- Experience Timeline -->
            <div class="experience-timeline">
              <!-- Experience Item 1 -->
              <div class="experience-item">
                <div class="experience-dot"></div>
                <div class="experience-content">
                  <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                    <h3 class="text-xl font-bold">Frontend Developer Intern</h3>
                    <span class="text-gray-400 text-sm md:text-base bg-white/10 px-3 py-1 rounded-full mt-1 md:mt-0">Feb 2025 - Present</span>
                  </div>
                  <h4 class="text-lg text-gray-300 mb-3">Gama Integra Informatika</h4>
                  <ul class="space-y-2 text-gray-400 list-disc pl-5">
                    <li>Developed web applications using Nuxt 3 as the main frontend framework.</li>
                    <li>Consumed REST APIs provided by the backend built with Express.js and Python.</li>
                    <li>Contributed to the development of a web-based admin dashboard, and built user interfaces for mobile web applications for users, agents, and guides.</li>
                    <li>Focused on delivering responsive, modular, and user-friendly UI/UX across different devices.</li>
                  </ul>
                </div>
              </div>
              
              <!-- Experience Item 2 -->
              <div class="experience-item">
                <div class="experience-dot"></div>
                <div class="experience-content">
                  <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                    <h3 class="text-xl font-bold">Web Developer</h3>
                    <span class="text-gray-400 text-sm md:text-base bg-white/10 px-3 py-1 rounded-full mt-1 md:mt-0">Aug 2024 - Feb 2025</span>
                  </div>
                  <h4 class="text-lg text-gray-300 mb-3">UTY GROWPATH#2</h4>
                  <ul class="space-y-2 text-gray-400 list-disc pl-5">
                    <li>Developed and maintained the official event website for UTY Growpath#2 using WordPress.</li>
                    <li>Managed content structure, visual layout, and plugin configurations to ensure optimal performance throughout the event.</li>
                    <li>Ensured cross-device compatibility and seamless user experience for event visitors.</li>
                  </ul>
                </div>
              </div>
              
              <!-- Experience Item 3 -->
              <div class="experience-item">
                <div class="experience-dot"></div>
                <div class="experience-content">
                  <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                    <h3 class="text-xl font-bold">Lead Developer - PKMKC</h3>
                    <span class="text-gray-400 text-sm md:text-base bg-white/10 px-3 py-1 rounded-full mt-1 md:mt-0">Apr 2024 - Aug 2024</span>
                  </div>
                  <h4 class="text-lg text-gray-300 mb-3">JogFarm Marketplace App</h4>
                  <ul class="space-y-2 text-gray-400 list-disc pl-5">
                    <li>Designed and developed JogFarm, an Android-based mobile marketplace app for local livestock farmers.</li>
                    <li>Led the development of UI/UX, core functionalities, and end-to-end testing until release.</li>
                    <li>Worked in a 5-member team and acted as the lead developer.</li>
                    <li>The project was part of the PKMKC Student Creativity Program (Karsa Cipta) and funded by the Indonesian government.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="relative py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="section-header">
            <h2 class="section-title">Projects</h2>
            <div class="section-line"></div>
          </div>
          <div class="mt-12">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div v-for="(project, index) in projects" :key="index" 
                   :class="[
                     'project-card group reveal-animation',
                     index === 0 || index === 3 ? 'md:col-span-12' : 'md:col-span-6'
                   ]">
                <div class="glass-card h-full p-6 border border-white/10 hover:border-white/40 transition-all duration-300">
                  <div class="flex flex-col h-full">
                    <div class="mb-4">
                      <span class="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white">
                        {{ project.technologies[0] }}
                      </span>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-white group-hover:text-gray-300 transition-colors">{{ project.title }}</h3>
                    <p class="text-gray-400 mb-4 flex-grow">{{ project.description }}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span v-for="(tech, techIndex) in project.technologies.slice(1)" :key="techIndex" 
                            class="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/10">
                        {{ tech }}
                      </span>
                    </div>
                    <div class="mt-auto">
                      <a v-if="project.link" :href="project.link" target="_blank" 
                         class="inline-flex items-center text-white hover:text-gray-300 transition-colors">
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Contact Section -->
    <section id="contact" class="relative py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="section-header">
            <h2 class="section-title">Contact</h2>
            <div class="section-line"></div>
          </div>
          <div class="mt-12">
            <div class="glass-card p-8 reveal-animation">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="md:col-span-1">
                  <h3 class="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
                  <p class="text-gray-300 mb-8">
                    Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                  </p>
                  <div class="space-y-6">
                    <div class="flex items-start">
                      <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-medium text-white">Email</h4>
                        <a href="mailto:robiatmaja7@gmail.com" class="text-gray-300 hover:text-white transition-colors">robiatmaja7@gmail.com</a>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-medium text-white">Phone</h4>
                        <p class="text-gray-300">+62 822 4190 8389</p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-medium text-white">Location</h4>
                        <p class="text-gray-300">Sleman, Yogyakarta</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-2">
                  <form class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
                        <input type="text" id="name" class="form-input" placeholder="Your name" />
                      </div>
                      <div>
                        <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input type="email" id="email" class="form-input" placeholder="Your email" />
                      </div>
                    </div>
                    <div>
                      <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                      <input type="text" id="subject" class="form-input" placeholder="Subject" />
                    </div>
                    <div>
                      <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <textarea id="message" rows="5" class="form-input" placeholder="Your message"></textarea>
                    </div>
                    <button type="submit" class="btn-primary w-full">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div class="container mx-auto px-4 text-center">
        <div class="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/Kittu533" target="_blank" rel="noopener noreferrer" class="social-icon-link">
            <span class="sr-only">GitHub</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/yobi-suya-atmaja-1996b729a/" target="_blank" rel="noopener noreferrer" class="social-icon-link">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a href="https://ryobidev.vercel.id" target="_blank" rel="noopener noreferrer" class="social-icon-link">
            <span class="sr-only">Website</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </a>
        </div>
        <p class="text-gray-400">© 2025 Ryobi Surya Atmaja. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { defineComponent, h, ref, onMounted } from 'vue';

// Mobile menu state
const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Navigation items
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

// Technical skills (without percentages as requested)
const technicalSkills = [
  'Nuxt 3/Vue',
  'React',
  'Flutter',
  'HTML',
  'CSS',
  'JavaScript',
  'Tailwind CSS',
  'Laravel',
  'WordPress',
  'MySQL/Firebase'
];

// Projects from resume
const projects = [
  {
    title: 'Wheelchair Booking System for Pilgrims in Makkah',
    description: 'Multi-platform system for wheelchair bookings for Hajj and Umrah pilgrims in Makkah using Nuxt 3, integrated with REST APIs.',
    technologies: ['Nuxt 3', 'Tailwind CSS', 'REST API', 'Express.js', 'Python'],
    link: 'https://kursi-roda-gii-app-customer.vercel.app'
  },
  {
    title: 'JogFarm - Livestock Marketplace Android App',
    description: 'Lead developer in a Flutter-based mobile marketplace app for livestock farmers, integrated with Firebase services.',
    technologies: ['Flutter', 'Firebase', 'Android'],
    link: null
  },
  {
    title: 'Luxury Hotel Booking Website',
    description: 'Hotel booking platform using Laravel 11 with authentication, role-based access, search, and CMS.',
    technologies: ['Laravel 11', 'MVC', 'MySQL'],
    link: null
  },
  {
    title: 'JobPrep - AI Career Coach for Students',
    description: 'Career preparation platform featuring CV analysis and AI-powered interview simulation. Won 3rd place in Web Programming competition.',
    technologies: ['ReactJS', 'TailwindCSS', 'FastAPI', 'Firebase', 'Gemini AI'],
    link: 'https://jobprep-arkana.netlify.app'
  },
];

// Animation effects
onMounted(() => {
  // Reveal animations on scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.reveal-animation').forEach(el => {
    observer.observe(el);
  });
  
  // Glitch text effect
  const glitchTexts = document.querySelectorAll('.glitch-text');
  
  const glitchEffect = () => {
    glitchTexts.forEach(text => {
      text.classList.add('glitching');
      setTimeout(() => {
        text.classList.remove('glitching');
      }, 200);
    });
  };
  
  // Trigger glitch effect randomly
  setInterval(() => {
    if (Math.random() > 0.7) {
      glitchEffect();
    }
  }, 3000);
  
  // Initial glitch
  setTimeout(glitchEffect, 1500);
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
}

/* Background grid pattern */
.bg-grid-pattern {
  background-size: 30px 30px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
}

/* Noise overlay */
.noise-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  z-index: -1;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

/* Section styling */
.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  display: inline-block;
  position: relative;
}

.section-line {
  height: 2px;
  width: 60px;
  background: white;
  margin: 0 auto;
  border-radius: 2px;
}

/* Glass card effect */
.glass-card {
  background: rgba(17, 17, 17, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.glass-card:hover {
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
}

/* Button styles */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  border-radius: 0.5rem;
  background: white;
  color: black;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -5px rgba(255, 255, 255, 0.3);
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1), transparent);
  transition: left 0.7s ease;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  border-radius: 0.5rem;
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

/* Social icon links */
.social-icon-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;
}

.social-icon-link:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  transform: translateY(-3px);
}

/* Experience timeline styling */
.experience-timeline {
  position: relative;
  padding-left: 30px;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, white, rgba(255, 255, 255, 0.1));
}

.experience-item {
  position: relative;
  padding-bottom: 40px;
}

.experience-item:last-child {
  padding-bottom: 0;
}

.experience-dot {
  position: absolute;
  left: -30px;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
}

.experience-content {
  position: relative;
  padding-left: 10px;
}

/* Skills ticker animation */
.skills-ticker-container {
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
}

.skills-ticker {
  display: flex;
  animation: ticker 20s linear infinite;
  white-space: nowrap;
}

.skills-ticker-reverse {
  display: flex;
  animation: ticker-reverse 20s linear infinite;
  white-space: nowrap;
}

@keyframes ticker {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes ticker-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.skill-tag {
  display: inline-block;
  padding: 8px 16px;
  margin: 0 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: white;
  font-weight: 500;
}

/* Skill card styling */
.skill-card {
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.05);
}

/* Project card styling */
.project-card {
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

/* Form input styling */
.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: white;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: white;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

/* Education icon styling */
.education-icon-wrapper {
  display: flex;
  justify-content: center;
}

.education-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Reveal animation */
.reveal-animation {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal-animation.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Glitch text effect */
.glitch-text {
  position: relative;
  display: inline-block;
}

.glitch-text.glitching {
  animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
}

.glitch-text.glitching::before,
.glitch-text.glitching::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text.glitching::before {
  left: 2px;
  text-shadow: -1px 0 white;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch-text.glitching::after {
  left: -2px;
  text-shadow: -1px 0 white;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}

@keyframes glitch-anim {
  0% {
    clip: rect(31px, 9999px, 94px, 0);
  }
  10% {
    clip: rect(112px, 9999px, 76px, 0);
  }
  20% {
    clip: rect(85px, 9999px, 77px, 0);
  }
  30% {
    clip: rect(27px, 9999px, 97px, 0);
  }
  40% {
    clip: rect(64px, 9999px, 98px, 0);
  }
  50% {
    clip: rect(61px, 9999px, 85px, 0);
  }
  60% {
    clip: rect(99px, 9999px, 114px, 0);
  }
  70% {
    clip: rect(34px, 9999px, 115px, 0);
  }
  80% {
    clip: rect(98px, 9999px, 129px, 0);
  }
  90% {
    clip: rect(43px, 9999px, 96px, 0);
  }
  100% {
    clip: rect(82px, 9999px, 64px, 0);
  }
}

@keyframes glitch-anim2 {
  0% {
    clip: rect(65px, 9999px, 119px, 0);
  }
  10% {
    clip: rect(79px, 9999px, 61px, 0);
  }
  20% {
    clip: rect(75px, 9999px, 100px, 0);
  }
  30% {
    clip: rect(86px, 9999px, 128px, 0);
  }
  40% {
    clip: rect(136px, 9999px, 114px, 0);
  }
  50% {
    clip: rect(55px, 9999px, 140px, 0);
  }
  60% {
    clip: rect(110px, 9999px, 56px, 0);
  }
  70% {
    clip: rect(89px, 9999px, 80px, 0);
  }
  80% {
    clip: rect(100px, 9999px, 136px, 0);
  }
  90% {
    clip: rect(138px, 9999px, 56px, 0);
  }
  100% {
    clip: rect(120px, 9999px, 91px, 0);
  }
}
</style>