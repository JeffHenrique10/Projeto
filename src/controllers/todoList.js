const Task = require('../models/task')

class TaskController {
  async storage (req, res) {
    const { id } = req.body
    if (await Task.findOne({ id })) {
      return res.status(400).json({ error: 'Task already registered' })
    }

    const task = await Task.create(req.body)
    return res.json(task)
  }
  async list (req, res) {
    const task = await Task.find()
    return res.json(task)
  }
  async delete (req, res) {
    await Task.findByIdAndDelete(req.params.id)
    return res.send('All Right')
  }
}

module.exports = new TaskController()