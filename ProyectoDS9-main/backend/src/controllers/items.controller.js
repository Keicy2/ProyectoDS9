import Item from "../models/item.model.js";
export class itemsController {
  static async getAllItems(req, res) {
    try {
      const tasks = await Item.find({});
      res.json(tasks);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getItem(req, res) {
    try {
      const task = await Item.findById(req.params.id);
      if (!task) return res.status(404).json({ message: "Task not found" });
      return res.json(task);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async createItem(req, res) {
    try {
      const { name, price, description, stock, images, category } = req.body;
      const newItem = new Item({
        name,
        price,
        description,
        category,
        stock,
        images,
      });
      await newItem.save();
      res.json(newItem);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deleteItem(req, res) {
    try {
      const deleteItem = await Item.findOneAndDelete(req.params.id);
      if (!deleteItem)
        return res.status(404).json({ message: "Task not found" });

      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async updateItem(req, res) {
    try {
      const { name, price, stock, description, images, category } = req.body;
      const itemsUpdate = await Item.findOneAndUpdate(
        { _id: req.params.id },
        { name, price, description, category, stock, images },
        { new: true }
      );

      return res.json(itemsUpdate);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
