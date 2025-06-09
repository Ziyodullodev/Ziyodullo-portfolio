"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Github,
  Mail,
  MessageCircle,
  Code,
  Database,
  Server,
  GitBranch,
  Container,
  Bot,
  FileCode,
  Settings,
  LayoutDashboard,
  Linkedin,
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

 const skills = [
  { name: "Python", icon: Code },
  { name: "Django", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "Docker", icon: Container },
  { name: "Telegram Bots", icon: Bot },
  { name: "PHP", icon: FileCode },            // FileCode - kod yozishni bildiradi
  { name: "Frontend", icon: LayoutDashboard }, // LayoutDashboard - UI/UX ishlanmalariga mos
  { name: "DevOps", icon: Settings },         // Settings - tizim va konfiguratsiyaga mos
];

  const projects = [
    {
      title: "E-commerce API",
      description: "RESTful API for online marketplace with Django REST framework",
      stack: ["Django", "PostgreSQL", "Redis"],
      category: "API",
    },
    {
      title: "Telegram Bot Framework",
      description: "Reusable framework for building Telegram bots with Python",
      stack: ["Python", "aiogram", "SQLite"],
      category: "Telegram Bot",
    },
    {
      title: "Task Management System",
      description: "Full-stack web application for team task management",
      stack: ["Django", "PostgreSQL", "Docker"],
      category: "Web App",
    },
    {
      title: "News Aggregator Bot",
      description: "Automated bot that aggregates tech news from multiple sources",
      stack: ["Python", "BeautifulSoup", "Telegram API"],
      category: "Telegram Bot",
    },
  ]

  const blogPosts = [
    {
      title: "Building Scalable Django APIs",
      snippet: "Learn best practices for creating robust and scalable REST APIs with Django REST framework...",
      image: "/placeholder.svg?height=200&width=300",
      date: "Dec 15, 2024",
    },
    {
      title: "Telegram Bot Development Guide",
      snippet: "Complete guide to building powerful Telegram bots using Python and aiogram library...",
      image: "/placeholder.svg?height=200&width=300",
      date: "Dec 10, 2024",
    },
    {
      title: "Docker for Django Developers",
      snippet: "Containerize your Django applications for better deployment and development workflow...",
      image: "/placeholder.svg?height=200&width=300",
      date: "Dec 5, 2024",
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TafSoft.uz
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <button onClick={() => scrollToSection("hero")} className="hover:text-blue-600 transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection("about")} className="hover:text-blue-600 transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection("portfolio")} className="hover:text-blue-600 transition-colors">
                  Portfolio
                </button>
               {/* <button onClick={() => scrollToSection("blog")} className="hover:text-blue-600 transition-colors">
                  Blog
                </button>*/}
                <button onClick={() => scrollToSection("contact")} className="hover:text-blue-600 transition-colors">
                  Contact
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>

                {/* Mobile menu button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block px-3 py-2 text-base font-medium hover:text-blue-600 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block px-3 py-2 text-base font-medium hover:text-blue-600 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="block px-3 py-2 text-base font-medium hover:text-blue-600 transition-colors"
                >
                  Portfolio
                </button>
                {/*<button
                  onClick={() => scrollToSection("blog")}
                  className="block px-3 py-2 text-base font-medium hover:text-blue-600 transition-colors"
                >
                  Blog
                </button>*/}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block px-3 py-2 text-base font-medium hover:text-blue-600 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ziyodullo Aliyev
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                Backend Developer & Founder of TafSoft.uz
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Crafting backend magic with Python, Django, and Telegram bots.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("portfolio")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
                >
                  View My Work
                </Button>
                {/*<Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("blog")}
                  className="px-8 py-3 rounded-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Read Blog
                </Button>
                */}
              </div>
            </div>
            <div className="mt-16 animate-bounce">
              <ChevronDown className="h-8 w-8 mx-auto text-gray-400" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  About Me
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
  With over 4 years of hands-on experience in software development, I’ve worked across backend, frontend, and Telegram bot development.
  I'm also the founder of Tafsoft.uz — a project focused on delivering full-stack web solutions tailored to client needs.
</p>
<p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
  My goal is to create clean, scalable, and efficient systems. Beyond coding, I enjoy sharing my knowledge, exploring new tech trends, and helping others grow in the tech space.
</p>


                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <IconComponent className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full p-1">
                    <img
                      src="https://i.postimg.cc/JzZ0nn0V/IMAGE-2025-06-07-18-07-07.jpg?height=320&width=320"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full bg-white dark:bg-gray-800"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-full">
                    <Code className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Here are some of my recent projects showcasing my expertise in backend development and automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {project.category}
                      </Badge>
                      <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section 
        <section id="blog" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Latest Blog Posts
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Sharing insights, tutorials, and experiences from my journey in backend development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</div>
                    <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-3">
                      {post.snippet}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                      Read More →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Have a project in mind or want to discuss backend development? I'd love to hear from you!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
  <Button
    asChild
    size="lg"
    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center space-x-2"
  >
    <a href="https://t.me/ziyodev" target="_blank" rel="noopener noreferrer">
      <MessageCircle className="h-5 w-5" />
      <span>Telegram</span>
    </a>
  </Button>

  <Button
    asChild
    variant="outline"
    size="lg"
    className="px-8 py-3 rounded-full border-gray-300 dark:border-gray-600 flex items-center space-x-2"
  >
    <a href="mailto:ziyodullodev@gmail.com">
      <Mail className="h-5 w-5" />
      <span>Email</span>
    </a>
  </Button>

  <Button
    asChild
    variant="outline"
    size="lg"
    className="px-8 py-3 rounded-full border-gray-300 dark:border-gray-600 flex items-center space-x-2"
  >
    <a href="https://github.com/ziyodullodev" target="_blank" rel="noopener noreferrer">
      <Github className="h-5 w-5" />
      <span>GitHub</span>
    </a>
  </Button>

  <Button
    asChild
    variant="outline"
    size="lg"
    className="px-8 py-3 rounded-full border-gray-300 dark:border-gray-600 flex items-center space-x-2"
  >
    <a href="https://www.linkedin.com/in/ziyodullo" target="_blank" rel="noopener noreferrer">
      <Linkedin className="h-5 w-5" />
      <span>LinkedIn</span>
    </a>
  </Button>

  <Button
    asChild
    variant="outline"
    size="lg"
    className="px-8 py-3 rounded-full border-gray-300 dark:border-gray-600 flex items-center space-x-2"
  >
    <a href="https://instagram.com/ziyo.dev" target="_blank" rel="noopener noreferrer">
      <Instagram className="h-5 w-5" />
      <span>Instagram</span>
    </a>
  </Button>
</div>

          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  TafSfot.uz
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Backend Developer & Tech Blogger passionate about building scalable solutions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    Portfolio
                  </button>
                  <button
                    onClick={() => scrollToSection("blog")}
                    className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    Blog
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    Contact
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Mail className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-600 dark:text-gray-300">© 2024 TafSfot.uz. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
