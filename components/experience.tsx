import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      title: "Undergraduate Research Assitant",
      company: "Surgical Robotics Lab",
      period: "Sept 2023 - May 2025",
      description:
        "Lead software delevopment of an autonomous ultrasound helmet for 3D brain imaging and stroke diagnosis, integrating EM tracking and image processing for fast, non-ionizing, point-of-care scans.",
    },
    {
      title: "Lead Software Engineer",
      company: "Texas Guadaloop (Student Org)",
      period: "Sept 2021 - Aug 2024",
      description:
        "Developed a secure C++ data transfer system and React-based GUI for high-speed vehicle telemetry, leading an 8-engineer team to deliver reliable communication, control, and testing tools.",
    },
    {
      title: "Software Engineering Intern",
      company: "LPL Financial",
      period: "May 2023 - Aug 2023",
      description:
        "Collaborated on Angular and .NET development to enhance account management systems, using SonarQube and unit testing to boost test coverage and reduce code issues by 50%, improving software reliability.",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Work Experience</h2>

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle>{experience.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 sm:mt-0">{experience.period}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{experience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
