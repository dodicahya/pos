'use strict'

const VERSION = '/api/v1/order'
const orderService = require('../../services/order-service')

module.exports = (app) => {
    /*
     |--------------------------------------------------------------------------
     | POST /api/v1/order/item
     |--------------------------------------------------------------------------
     */
    /**
     * @swagger
     * /api/v1/order/item:
     *   post:
     *     tags:
     *       - Order
     *     description:
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: body
     *         description: order
     *         in: body
     *         required: true
     *         schema:  {
     *           "type": "object",
     *           "properties": {
     *                "item_id": {
     *                    "type": "number",
     *                    "example": "1"
     *                },
     *                "total": {
     *                    "type": "number",
     *                    "example": "2"
     *                }
     *            }
     *        }
     *     responses:
     *       200:
     *         description: Successfully fetch
     */
    app.post(VERSION +'/item',  (req, res, next) => {
         orderService.createOrder(req.body)
            .then((response) => {
                return res.send(response)
            })
            .catch(err => next(err))
    }) 
}