<template>
  <div class="min-h-screen bg-black text-white font-sans">
     <!-- Add this right after opening div -->
     <div id="cursor-trail"></div>
    <!-- Background with Aceternity UI Grid Pattern -->
    <!-- <div class="absolute inset-0 z-0">
      <div class="grid-background">
        <div class="grid-pattern"></div>
      </div>
    </div> -->
    
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 flex h-full w-full items-center justify-center [mask-repeat:no-repeat] [mask-size:40px]">
        <svg class="pointer-events-none absolute z-0 h-full w-full" width="100%" height="100%" viewBox="0 0 696 316" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875" stroke="url(#paint0_radial_242_278)" stroke-opacity="0.05" stroke-width="0.5"></path>
          <defs>
            <radialGradient id="paint0_radial_242_278" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)">
              <stop offset="0.0666667" stop-color="#d4d4d4"></stop>
              <stop offset="0.243243" stop-color="#d4d4d4"></stop>
              <stop offset="0.43594" stop-color="white" stop-opacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <a href="#" class="text-xl font-bold tracking-tighter">
            <span class="text-white">Ryobi</span><span class="text-white/70">.</span>
          </a>
          <div class="hidden md:flex space-x-8">
            <a v-for="(item, index) in navItems" :key="index" :href="item.href" 
               class="text-sm font-medium hover:text-white/70 transition-colors relative group">
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
    <div v-if="mobileMenuOpen" class="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center">
      <button @click="toggleMobileMenu" class="absolute top-4 right-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="flex flex-col space-y-6 items-center">
        <a v-for="(item, index) in navItems" :key="index" :href="item.href" @click="toggleMobileMenu" class="text-xl font-medium hover:text-white/70 transition-colors">
          {{ item.label }}
        </a>
      </div>
    </div>

    <!-- Hero Section with Aceternity UI Spotlight -->
    <section id="home" class="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      <div class="spotlight-background">
        <div class="spotlight"></div>
      </div>
      <div class="container mx-auto px-4 z-10">
        <div class="max-w-3xl">
          <div class="animated-text-wrapper mb-2">
            <p class="text-white/70 text-lg">Hello, I'm</p>
          </div>
          <div class="animated-text-wrapper mb-4">
            <h1 class="text-5xl md:text-7xl font-bold tracking-tighter">Ryobi Surya Atmaja</h1>
          </div>
          <div class="animated-text-wrapper mb-6">
            <h2 class="text-2xl md:text-3xl text-white/80">Full Stack Developer</h2>
          </div>
          <div class="animated-text-wrapper mb-8">
            <p class="text-white/60 text-lg max-w-xl">
              I build exceptional and accessible digital experiences for the web.
            </p>
          </div>
          <div class="flex space-x-4">
            <a href="#projects" class="aceternity-button bg-white text-black">
              View Projects
            </a>
            <a href="#contact" class="aceternity-button-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" class="text-white/50 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>

    <!-- About Section with Aceternity UI Card -->
    <section id="about" class="py-24 bg-white text-black relative">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-col md:flex-row gap-12">
            <div class="md:w-1/3">
              <h2 class="text-3xl font-bold mb-2 tracking-tighter">About Me</h2>
              <div class="w-20 h-1 bg-black mb-6"></div>
            </div>
            <div class="md:w-2/3">
              <div class="aceternity-card p-6 bg-white border border-black/10 rounded-lg shadow-aceternity">
                <p class="text-lg mb-6">
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  I create elegant, efficient, and user-friendly applications that solve real-world problems.
                </p>
                <p class="text-lg mb-8">
                  With a strong foundation in both frontend and backend development, I bring ideas to life 
                  through clean code and thoughtful design.
                </p>
                <div class="grid grid-cols-2 gap-6">
                  <div>
                    <h3 class="text-xl font-bold mb-4">Contact</h3>
                    <ul class="space-y-2">
                      <li class="flex items-center">
                        <span class="font-medium mr-2">Email:</span>
                        <a href="mailto:contact@example.com" class="text-gray-700 hover:text-black">contact@example.com</a>
                      </li>
                      <li class="flex items-center">
                        <span class="font-medium mr-2">Location:</span>
                        <span class="text-gray-700">Indonesia</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold mb-4">Social</h3>
                    <div class="flex space-x-4">
                      <a href="https://github.com/Kittu533" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-700 transition-colors">
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/ryobi-surya-atmaja-1996b729a/" target="_blank" rel="noopener noreferrer" class="text-black hover:text-gray-700 transition-colors">
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="mt-8">
                  <a href="#" class="aceternity-button bg-black text-white inline-flex items-center">
                    Download CV
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section with Aceternity UI Animated Bars -->
    <section id="skills" class="py-24 bg-black text-white relative">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-col md:flex-row gap-12">
            <div class="md:w-1/3">
              <h2 class="text-3xl font-bold mb-2 tracking-tighter">My Skills</h2>
              <div class="w-20 h-1 bg-white mb-6"></div>
              <p class="text-white/70">
                I've worked with a variety of technologies in the web development world.
                Here are my main areas of expertise.
              </p>
            </div>
            <div class="md:w-2/3">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="aceternity-card bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 class="text-xl font-bold mb-4">Frontend</h3>
                  <ul class="space-y-4">
                    <li v-for="(skill, index) in frontendSkills" :key="index">
                      <div class="w-full">
                        <div class="flex justify-between mb-1">
                          <span>{{ skill.name }}</span>
                          <span>{{ skill.level }}%</span>
                        </div>
                        <div class="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div class="aceternity-progress-bar bg-white h-full rounded-full" :style="{ width: `${skill.level}%` }"></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="aceternity-card bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 class="text-xl font-bold mb-4">Backend</h3>
                  <ul class="space-y-4">
                    <li v-for="(skill, index) in backendSkills" :key="index">
                      <div class="w-full">
                        <div class="flex justify-between mb-1">
                          <span>{{ skill.name }}</span>
                          <span>{{ skill.level }}%</span>
                        </div>
                        <div class="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div class="aceternity-progress-bar bg-white h-full rounded-full" :style="{ width: `${skill.level}%` }"></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section with Bento Grid -->
    <section id="projects" class="py-24 bg-white text-black relative">
      <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-col md:flex-row gap-12">
        <div class="md:w-1/3">
          <h2 class="text-3xl font-bold mb-2 tracking-tighter">Projects</h2>
          <div class="w-20 h-1 bg-black mb-6"></div>
          <p class="text-gray-700">
          Here are some of my recent projects. Each one was built with a focus on solving real problems with elegant solutions.
          </p>
        </div>
        <div class="md:w-2/3">
          <!-- Bento Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[18rem]">
          <div v-for="(project, index) in projects" 
             :key="index" 
             :class="[
               'group flex flex-col justify-between p-4 rounded-xl border border-neutral-200 bg-white transition-all duration-200 hover:shadow-xl',
               index === 1 || index === 2 ? 'md:col-span-2' : ''
             ]">
            <div class="aspect-video bg-gray-100 rounded-lg relative overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center text-gray-500">
              {{ project.title }}
            </div>
            <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <a :href="project.link" class="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
              View Project
              </a>
            </div>
            </div>
            <div class="transition duration-200 group-hover:translate-x-2">
            <h3 class="text-xl font-bold text-neutral-600 mt-4">{{ project.title }}</h3>
            <p class="text-sm text-neutral-600 mt-2">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mt-3">
              <span v-for="(tech, techIndex) in project.technologies" 
                :key="techIndex" 
                class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
              {{ tech }}
              </span>
            </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>

    <!-- Contact Section with Aceternity UI Animated Border -->
    <section id="contact" class="py-24 bg-black text-white relative">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-col md:flex-row gap-12">
            <div class="md:w-1/3">
              <h2 class="text-3xl font-bold mb-2 tracking-tighter">Contact</h2>
              <div class="w-20 h-1 bg-white mb-6"></div>
              <p class="text-white/70 mb-6">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="bg-white/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-medium">Email</h3>
                    <a href="mailto:contact@example.com" class="text-white/70 hover:text-white">contact@example.com</a>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-white/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-medium">Location</h3>
                    <p class="text-white/70">Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:w-2/3">
              <form class="aceternity-animated-border p-6 rounded-lg">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block text-sm font-medium mb-2">Name</label>
                    <input type="text" id="name" class="aceternity-input w-full px-4 py-3 bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-white text-white" />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium mb-2">Email</label>
                    <input type="email" id="email" class="aceternity-input w-full px-4 py-3 bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-white text-white" />
                  </div>
                </div>
                <div class="mt-6">
                  <label for="subject" class="block text-sm font-medium mb-2">Subject</label>
                  <input type="text" id="subject" class="aceternity-input w-full px-4 py-3 bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-white text-white" />
                </div>
                <div class="mt-6">
                  <label for="message" class="block text-sm font-medium mb-2">Message</label>
                  <textarea id="message" rows="5" class="aceternity-input w-full px-4 py-3 bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-white text-white"></textarea>
                </div>
                <button type="submit" class="aceternity-button bg-white text-black w-full mt-6">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 bg-black border-t border-white/10">
      <div class="container mx-auto px-4 text-center">
        <div class="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/Kittu533" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-300">
            <span class="sr-only">GitHub</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/ryobi-surya-atmaja-1996b729a/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-300">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        <p class="text-gray-400">© 2024 Ryobi Surya Atmaja. All rights reserved.</p>
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
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

// Frontend skills
const frontendSkills = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'Vue/Nuxt', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Responsive Design', level: 85 }
];

// Backend skills
const backendSkills = [
  { name: 'Node.js', level: 80 },
  { name: 'Database Design', level: 85 },
  { name: 'API Development', level: 80 },
  { name: 'Server Management', level: 70 },
  { name: 'DevOps', level: 65 }
];

// Sample data for projects
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with payment integration and admin dashboard.',
    technologies: ['Nuxt 3', 'Tailwind CSS', 'Stripe', 'MongoDB']
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates.',
    technologies: ['Vue 3', 'Firebase', 'Tailwind CSS']
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing creative work.',
    technologies: ['Nuxt 3', 'GSAP', 'Tailwind CSS']
  }
];

// // Initialize Aceternity UI effects
// onMounted(() => {
//   // This would be where we initialize Aceternity UI components
//   // In a real implementation, we would import and initialize the actual Aceternity UI components
//   initAceternityEffects();
// });

// Cursor trail effect
onMounted(() => {
  // Remove this line since initAceternityEffects is not defined
  // initAceternityEffects();
  
  // Initialize cursor trail
  const cursor = document.getElementById('cursor-trail');
  const particles = [];
  const maxParticles = 15;
  
  const createParticle = (x, y) => {
    const particle = document.createElement('div');
    particle.className = 'cursor-trail-particle';
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    document.body.appendChild(particle);
    
    setTimeout(() => {
      particle.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(particle);
      }, 500);
    }, 100);
    
    return particle;
  };
  let lastX = 0;
  let lastY = 0;
  let isMoving = false;
  
  window.addEventListener('mousemove', (e) => {
    // Update main cursor
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    
    // Create trail particles
    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(createTrail);
    }
    
    lastX = e.clientX;
    lastY = e.clientY;
  });
  
  const createTrail = () => {
    if (particles.length < maxParticles) {
      const particle = createParticle(lastX - 2, lastY - 2);
      particles.push(particle);
      
      if (particles.length > maxParticles) {
        const oldParticle = particles.shift();
        if (oldParticle.parentNode) {
          oldParticle.parentNode.removeChild(oldParticle);
        }
      }
    }
     
    if (isMoving) {
      requestAnimationFrame(createTrail);
      isMoving = false;
    }
  };
})
// Background beams animation
onMounted(() => {
  const paths = [
   "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
      "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
      "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
      "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
      "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
      "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
      "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
      "M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819",
      "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
      "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
      "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
      "M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787",
      "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
      "M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771",
      "M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763",
      "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
      "M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747",
      "M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739",
      "M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731",
      "M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723",
      "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
      "M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707",
      "M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699",
      "M-219 -373C-219 -373 -151 32 313 159C777 286 845 691 845 691",
      "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
      "M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675",
      "M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667",
      "M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659",
      "M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651",
      "M-177 -421C-177 -421 -109 -16 355 111C819 238 887 643 887 643",
      "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
      "M-163 -437C-163 -437 -95 -32 369 95C833 222 901 627 901 627",
      "M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619",
      "M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611",
      "M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603",
      "M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595",
      "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
      "M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579",
      "M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571",
      "M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563",
      "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
      "M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547",
      "M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539",
      "M-79 -533C-79 -533 -11 -128 453 -1C917 126 985 531 985 531",
      "M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523",
      "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
      "M-58 -557C-58 -557 10 -152 474 -25C938 102 1006 507 1006 507",
      "M-51 -565C-51 -565 17 -160 481 -33C945 94 1013 499 1013 499",
      "M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491",
      "M-37 -581C-37 -581 31 -176 495 -49C959 78 1027 483 1027 483",
  ];

  const svg = document.querySelector('svg');
  
  paths.forEach((pathData, index) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("stroke", `url(#linearGradient-${index})`);
    path.setAttribute("stroke-opacity", "0.4");
    path.setAttribute("stroke-width", "0.5");
    
    const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    gradient.setAttribute("id", `linearGradient-${index}`);
    
    const stops = [
      { offset: "0%", color: "#18CCFC", opacity: "0" },
      { offset: "30%", color: "#18CCFC", opacity: "1" },
      { offset: "70%", color: "#6344F5", opacity: "1" },
      { offset: "100%", color: "#AE48FF", opacity: "0" }
    ];
    
    stops.forEach(stop => {
      const stopEl = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stopEl.setAttribute("offset", stop.offset);
      stopEl.setAttribute("stop-color", stop.color);
      stopEl.setAttribute("stop-opacity", stop.opacity);
      gradient.appendChild(stopEl);
    });
    
    const defs = svg.querySelector('defs');
    defs.appendChild(gradient);
    svg.appendChild(path);
    
    // Animate gradient
    let progress = 0;
    const animate = () => {
      progress = (progress + 1) % 100;
      gradient.setAttribute("gradientTransform", `translate(${progress}%)`);
      requestAnimationFrame(animate);
    };
    animate();
  });
});
    
;

</script>

<style>
html {
  scroll-behavior: smooth;
}
.background-beams {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.5;
  mask-image: radial-gradient(circle at center, transparent 0%, black 100%);
}

svg path {
  transition: stroke-dashoffset 0.5s ease;
}
#cursor-trail {
  position: fixed;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: screen;
  transition: transform 0.1s ease;
}

.cursor-trail-particle {
  position: fixed;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  mix-blend-mode: screen;
  transition: transform 0.2s ease, opacity 0.5s ease;
}
/* Grid Background Effect */
.grid-background {
  position: absolute;
  inset: 0;
  background-color: black;
  z-index: -1;
  opacity: 0.4;
  background-size: 50px 50px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  mask-image: radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0) 100%);
}

/* Spotlight Effect */
.spotlight-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.spotlight {
  position: absolute;
  inset: -100%;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  animation: spotlight 8s infinite;
}

@keyframes spotlight {
  0%, 100% {
    transform: translate(-25%, -25%);
  }
  25% {
    transform: translate(25%, -25%);
  }
  50% {
    transform: translate(25%, 25%);
  }
  75% {
    transform: translate(-25%, 25%);
  }
}

/* Animated Text */
.animated-text-wrapper {
  overflow: hidden;
}

.animated-text-wrapper > * {
  animation: slideUp 0.8s ease forwards;
  transform: translateY(100%);
  opacity: 0;
}

@keyframes slideUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Aceternity Button Styles */
.aceternity-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  border-radius: 0.375rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.aceternity-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.aceternity-button:hover::before {
  transform: translateX(100%);
}

.aceternity-button-outline {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
  transition: all 0.3s ease;
}

.aceternity-button-outline:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Aceternity Card Styles */
.aceternity-card {
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.aceternity-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.shadow-aceternity {
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
}

/* Aceternity 3D Card Effect */
.aceternity-3d-card {
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
}

.aceternity-3d-card:hover {
  transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
}

/* Aceternity Progress Bar Animation */
.aceternity-progress-bar {
  position: relative;
  transform-origin: left;
  animation: growBar 1.5s ease forwards;
  transform: scaleX(0);
}

@keyframes growBar {
  to {
    transform: scaleX(1);
  }
}

/* Aceternity Animated Border */
.aceternity-animated-border {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.aceternity-animated-border::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: 0;
  height: 0;
  background: transparent;
  border: 2px solid transparent;
  border-top-color: white;
  border-right-color: white;
}

.aceternity-animated-border::after {
  content: '';
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 0;
  height: 0;
  background: transparent;
  border: 2px solid transparent;
  border-bottom-color: white;
  border-left-color: white;
}

.aceternity-animated-border:hover::before,
.aceternity-animated-border:hover::after {
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  transition: width 0.3s ease, height 0.3s ease 0.3s;
}

/* Aceternity Badge */
.aceternity-badge {
  position: relative;
  overflow: hidden;
}

.aceternity-badge::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.aceternity-badge:hover::after {
  left: 100%;
}

/* Aceternity Input */
.aceternity-input {
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.aceternity-input:focus {
  border-color: white;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
}
</style>