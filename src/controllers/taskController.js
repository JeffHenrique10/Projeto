const Task = require('../models/task')

class TaskController {
  async store (req, res) {
    const task = await Task.create(req.body)
    return res.json(task)
  }
  async update (req, res) {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.json(task)
  }
  async delete (req, res) {
    await Task.findByIdAndDelete(req.params.id)
    return res.json({ mensage: 'Deleted Successfully' })
  }
  async list (req, res) {
    const task = await Task.find()
    return res.json(task)
  }
  async show (req, res) {
    const task = await Task.findById(req.params.id)
    return res.json(task)
  }
}

module.exports = new TaskController()
