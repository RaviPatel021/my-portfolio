import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Electrical and Computer Engineering, Minor in Robotics",
      school: "University of Texas at Austin",
      location: "Austin, TX",
      period: "2021 - 2025",
      gpa: "3.97/4.0",
      description: "Hands-on experience in robotics, embedded systems, and machine learning applications.",
      achievements: ["High Honors", "Capstone Award Winner", "Ram’s Horn Award"],
      coursework: ["Aerial Robotics", "Embedded Systems Lab", "Image Processing", "Data Science Lab"],
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
            <p className="text-lg text-muted-foreground">My academic journey and continuous learning</p>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary mb-2">
                          {edu.school}
                        </CardDescription>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {edu.location}
                          </div>
                          {edu.gpa && (
                            <Badge variant="secondary" className="w-fit">
                              GPA: {edu.gpa}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{edu.description}</p>

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Achievements & Honors</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <Badge key={achievementIndex} variant="outline" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
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
