import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Hardware & Embedded Systems",
      skills: [
        "Microcontrollers (Arduino, STM32, ESP32)",
        "Embedded C/C++",
        "Circuit design (KiCAD)",
        "Motor control (PWM, PID tuning)",
        "Sensor integration",
        "3D printing",
      ],
    },
    {
      title: "Software & Algorithms",
      skills: [
        "Python",
        "C++",
        "MATLAB",
        "ROS (Robot Operating System)",
        "Computer vision (OpenCV, YOLO, SLAM)",
        "Motion planning & control (A*, RRT, MPC)",
        "Reinforcement learning (PPO)",
        "Simulation tools (PyBullet, Gazebo)",
      ],
    },
    {
      title: "Systems Integration & Tools",
      skills: [
        "Git and GitHub",
        "Linux & shell scripting",
        "Communication protocols",
        "Cloud tools for data pipelines",
        "Debugging and profiling",
      ],
    },
  ];


  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
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
