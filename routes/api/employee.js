const express = require('express')
const router = express.Router()

// model
const Employee = require('../../model/Employee')

// @route get /employees
// @desc  get all employees
// @access  Public

router.get('/', (req, res) => {
  Employee.find()
    .then((employee) => {
      if (employee) {
        res.json(employee)
      } else {
        return res.status(404).json({ noEmployee: 'There is no employee' })
      }
    })
    .catch((err) => res.status(404).json(err))
})

// @route delete /employees/remove/:id
// @desc  delete employee by its id
// @access  Public

router.delete('/:id', (req, res) => {
  Employee.findById(req.params.id).then((employee) => {
    employee
      .remove()
      .then(() => res.json({ success: true }))
      .catch((err) => res.status(500).json(err))
  })
})

// @route post /employees/add
// @desc  create employee
// @access  Public

router.post('/', (req, res) => {
  const employeeData = {}

  if (req.body.name) employeeData.name = req.body.name
  if (req.body.gender) employeeData.gender = req.body.gender
  if (req.body.dateOfBirth) employeeData.dateOfBirth = req.body.dateOfBirth
  if (req.body.salary) employeeData.salary = req.body.salary

  Employee(employeeData)
    .save()
    .then((employee) => res.json(employee))
    .catch((err) => res.status(500).json(err))
})

// @route patch /employees/update/:id
// @desc   update employee by employees id
// @access  Public

router.patch('/:id', (req, res) => {
  Employee.findById(req.params.id).then((employee) => {
    if (!employee) {
      return res.status(404).json({ message: 'no employee found' })
    } else {
      if (req.body.name) {
        employee.name = req.body.name
      }
      if (req.body.gender) {
        employee.gender = req.body.gender
      }
      if (req.body.dateOfBirth) {
        employee.dateOfBirth = req.body.dateOfBirth
      }
      if (req.body.salary) {
        employee.salary = req.body.salary
      }

      employee
        .save()
        .then(() => res.json({ success: true }))
        .catch((err) => res.status(500).json(err))
    }
  })
})

module.exports = router
