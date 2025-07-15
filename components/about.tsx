import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Hi, I&apos;m Ravi. I love building things that move, think, and interact with the world—fast. My background is in Electrical and Computer Engineering with a focus on robotics, and I enjoy working across hardware, software, and machine learning to bring projects from sketches to working prototypes.
              </p>

              <p className="text-lg text-muted-foreground">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or enjoying the outdoors. I’m passionate about continuous learning and love staying up-to-date with the latest in tech and robotics.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">4+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
