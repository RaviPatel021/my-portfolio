import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import { ExternalLink, Github } from "lucide-react"
// import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "Air Hockey Bot",
      description:
        "An autonomous air hockey robot using computer vision and reinforcement learning for real-time gameplay.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: [],
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com",
    },
    {
      title: "Jigsaw Puzzle Solver",
      description:
        "A computer vision system to autonomously solve jigsaw puzzles by detecting, classifying, and assembling pieces.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: [],
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com",
    },
    {
      title: "Autonomous Aerial Maze Solver",
      description: "A drone capable of autonomously navigating and solving mazes using onboard sensing and path planning.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: [],
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com",
    },
    {
      title: "Rock Paper Scissors ML Predictor",
      description: "A machine learning model to predict human moves in rock-paper-scissors for real-time gameplay against a computer.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: [],
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com",
    },
    {
      title: "Ghostbusters Gun",
      description: "An interactive game where players locate and 'shoot' targets based on directional sound cues from stereo headset.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: [],
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com",
    },
    {
      title: "Doodle Jump Game",
      description: "The classic Doodle Jump game on TM4C microcontroller using an LCD, physical buttons, and custom embedded logic for gameplay.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: [],
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com",
    },
    {
      title: "Fake Review Detector",
      description: "A machine learning tool to detect fake product reviews by analyzing linguistic patterns and metadata.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: [],
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com",
    },
            
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {/* <Button size="sm" asChild>
                      <Link href={project.liveUrl}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl}>
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
