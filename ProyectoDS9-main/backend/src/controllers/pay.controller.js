import axios from "axios";
import {
  HOST,
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
} from "../../config.js";

export class payController {
  static async payCreate(req, res) {
    try {
      // Definición de la orden
      const order = {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: "105.70",
            },
          },
        ],
        application_context: {
          brand_name: "studdySpuply",
          landing_page: "NO_PREFERENCE",
          user_action: "PAY_NOW",
          return_url: `${HOST}/captureOrder`,
          cancel_url: `${HOST}/cancelOrder`,
        },
      };

      // Formatear el cuerpo para obtener el token de acceso
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");

      // Generar el token de acceso
      
      const {
        data: { access_token },
      } = await axios.post(
        "https://api-m.sandbox.paypal.com/v1/oauth2/token",
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Asegúrate del tipo de contenido correcto
          },
          auth: {
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET,
          },
        }
      );

      console.log("Access Token:", access_token);

      // Crear la orden
      const response = await axios.post(
        `${PAYPAL_API}/v2/checkout/orders`,
        order,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json", // Asegúrate del tipo de contenido correcto
          },
        }
      );

      console.log("Order Response:", response.data);

      // Responder con la información de la orden
      return res.send(
        response.data.links.find((link) => link.rel === "approve")
      );
      //res.json(response.data);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      return res
        .status(500)
        .json({ error: error.response ? error.response.data : error.message });
    }
  }

  static async payCancel(req, res) {
    res.send("regreso supongamos");
    //res.redirect("/");
  }

  /*static async generateAccessToken() {
    const response = await axios({
        url: PAYPAL_API + '/v1/oauth2/token',
        method: 'post',
        data: 'grant_type=client_credentials',
        auth: {
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET
        }
    })
  }
    static async payCapture (orderId)  {
      const accessToken = await generateAccessToken()
  
      const response = await axios({
          url: PAYPAL_API + `/v2/checkout/orders/${orderId}/capture`,
          method: 'post',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + accessToken
          }
      })
  
      return response.data
  }*/

  static async payCapture(req, res) {
    const { token } = req.query;

    // Asegúrate de que el token esté presente
    if (!token) {
      return res.status(400).json({ message: "Token is required" });
    }

    try {
      // Generar el token de acceso
      const {
        data: { access_token },
      } = await axios.post(
        "https://api-m.sandbox.paypal.com/v1/oauth2/token",
        new URLSearchParams({ grant_type: "client_credentials" }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          auth: {
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET,
          },
        }
      );

      // Captura el pago
      const response = await axios.post(
        `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
        {},
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
            "PayPal-Request-Id": "unique-request-id", // Opcional
          },
        }
      );

      // Log de la respuesta para depuración
      console.log(response.data);

      // Responde con un mensaje de éxito
      res.send("Pago completado");
      // O redirige a otra página si lo prefieres
      // res.redirect("/payed.html");
    } catch (error) {
      // Log de errores detallado para depuración
      console.error(error.response ? error.response.data : error.message);

      // Responde con un mensaje de error
      return res.status(500).json({ message: "Internal Server error" });
    }
  }
}
