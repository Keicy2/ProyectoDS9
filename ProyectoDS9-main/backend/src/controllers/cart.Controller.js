import Cart from "../models/cart.model.js";
import Item from "../models/item.model.js";

export class cartController {

  static async addCart(req, res) {
    try {
      const itema = await Item.findById(req.params.id);
      if (!itema) {
        return res.status(404).json({ message: "Item not found" });
      }
  
      // Buscar el carrito del usuario
      let cartOrder = await Cart.findOne({ user_id: req.user.id }).populate("items");
  
      // Si no existe un carrito, crear uno nuevo
      if (!cartOrder) {
        cartOrder = new Cart({
          user_id: req.user.id,
          items: [itema._id],
          total_price: itema.price,
          status: 'pendiente'
        });
      } else {
        // Si existe el carrito, agregar el ítem y actualizar el total
        cartOrder.items.push(itema._id);
        cartOrder.total_price += itema.price;
      }
  
      // Guardar el carrito
      await cartOrder.save();
  
      // Poblar el carrito para devolver la información completa del ítem
      const populatedCart = await Cart.findById(cartOrder._id).populate('items');
  
      // Retornar el carrito actualizado
      return res.status(200).json(populatedCart);
  
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  

  /*catch(error) {
    return res.status(500).json({ message: error.message });

    /*try {
      // Encuentra el pedido por ID y popula los items
      const order = await Item.findById(req.params.id);
      const cartOrder = await Cart.find({ user : req.user.id }).populate("user_id");
      cartOrder
      console.log(cartOrder);
      console.log(req.params.id);
      console.log(order.price);
      console.log(cartOrder)
      //return res.json(order);
      console.log();

      const totalPrice = order.price + cartOrder.total_price;
      console.log(totalPrice)

      await addOrder.save();
      res.json(addOrder);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }*/
  

  static async getCart(req, res) {
    try {
      const cartOrder = await Cart.find({ user_id: req.user.id });
      if (!cartOrder)
        return res.status(404).json({ message: "Task not found" });
      res.json(cartOrder);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async updateCart(req, res) {}

  static async deleteCart(req, res) {}
}
