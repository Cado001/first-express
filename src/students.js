let students = ["Michael", "Debbie", "Tre", "Joelle", "Diego"]

export function getAllStudents(req,res) {
    res.send(students)
}

export function addStudent(req, res) {
    const newStudent = req.body
    students.push(newStudent.name)
    res.status(201).send({message: "student added.", success: true})
}

