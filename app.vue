<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero Section with Meteors -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="meteors-container absolute inset-0">
        <Meteors
          :number="20"
          :speed="0.8"
          color="#ffffff"
        />
      </div>
      <div class="container mx-auto px-4 z-10 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Ryobi Surya Atmaja</h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8">Full Stack Developer</p>
        <button class="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors">
          View My Work
        </button>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 bg-white text-black">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
        <div class="max-w-3xl mx-auto">
          <p class="text-lg mb-6">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I create elegant, efficient, and user-friendly applications that solve real-world problems.
          </p>
          <p class="text-lg">
            With a strong foundation in both frontend and backend development, I bring ideas to life 
            through clean code and thoughtful design.
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 bg-black text-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div v-for="(skill, index) in skills" :key="index" class="border border-white/20 rounded-lg p-6 text-center hover:border-white/50 transition-colors">
            <h3 class="text-xl font-medium mb-2">{{ skill.name }}</h3>
            <div class="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
              <div class="bg-white h-full rounded-full" :style="{ width: `${skill.level}%` }"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="py-20 bg-white text-black">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="(project, index) in projects" :key="index" class="border border-black/10 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gray-200 relative">
              <div class="absolute inset-0 flex items-center justify-center text-gray-500">
                Project Image
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
              <p class="text-gray-700 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="(tech, techIndex) in project.technologies" :key="techIndex" class="px-3 py-1 bg-black text-white text-sm rounded-full">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-black text-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <div class="max-w-xl mx-auto">
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" class="w-full px-4 py-3 bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-white text-white" />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" class="w-full px-4 py-3 bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-white text-white" />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium mb-2">Message</label>
              <textarea id="message" rows="5" class="w-full px-4 py-3 bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-white text-white"></textarea>
            </div>
            <button type="submit" class="w-full bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors">
              Send Message
            </button>
          </form>
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
          <a href="#" class="text-white hover:text-gray-300">
            <span class="sr-only">Twitter</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </div>
        <p class="text-gray-400">© 2024 Ryobi Surya Atmaja. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { defineComponent, h } from 'vue';

// Meteors component implementation
const Meteors = defineComponent({
  props: {
    number: {
      type: Number,
      default: 20
    },
    speed: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: '#ffffff'
    }
  },
  setup(props) {
    return () => h('div', { class: 'meteors' }, 
      Array.from({ length: props.number }).map((_, index) => {
        const size = Math.random() * 2 + 0.5;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const animationDuration = (Math.random() * 10 + 10) / props.speed;
        
        return h('span', {
          key: index,
          class: 'meteor',
          style: {
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size * 30}px`,
            background: `linear-gradient(to bottom, transparent, ${props.color})`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${Math.random() * 10}s`
          }
        });
      })
    );
  }
});

// Sample data for skills
const skills = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'Vue/Nuxt', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'UI/UX Design', level: 70 },
  { name: 'Database', level: 85 },
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
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather information with interactive maps.',
    technologies: ['Vue 3', 'OpenWeather API', 'Chart.js']
  },
  {
    title: 'Blog Platform',
    description: 'Content management system with markdown support.',
    technologies: ['Nuxt 3', 'Prisma', 'PostgreSQL']
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media performance.',
    technologies: ['Vue 3', 'D3.js', 'REST API']
  }
];
</script>

<style>
.meteors-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.meteors {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.meteor {
  position: absolute;
  transform: rotate(45deg);
  border-radius: 50%;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.7));
  animation: meteor linear infinite;
}

@keyframes meteor {
  0% {
    transform: rotate(215deg) translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(215deg) translateX(-500px);
    opacity: 0;
  }
}
</style>