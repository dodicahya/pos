'use strict'

const VERSION = '/api/v1/item'
const itemServices = require('../../services/item-service')

module.exports = (app) => {
    /*
     |--------------------------------------------------------------------------
     | GET /api/v1/item/list
     |--------------------------------------------------------------------------
     */
    /**
     * @swagger
     * /api/v1/item/list:
     *   get:
     *     tags:
     *       - Item
     *     description:
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Successfully fetch
     */
    app.get(VERSION + '/list',  (req, res, next) => {
         itemServices.getAllData()
            .then((response) => {
                return res.send(response)
            })
            .catch(err => next(err))
    }) 

    /*
     |--------------------------------------------------------------------------
     | GET /api/v1/item/list/{id}
     |--------------------------------------------------------------------------
     */
    /**
     * @swagger
     * /api/v1/item/list/{id}:
     *   get:
     *     tags:
     *       - Item
     *     description:
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         x-example: 1
     *         type: number
     *         description: item id
     *         in: path
     *         required: true
     *     responses:
     *       200:
     *         description: Successfully fetch
     */
    app.get(VERSION + '/list/:id',  (req, res, next) => {
         itemServices.getItemById(req.params.id)
            .then((response) => {
                return res.send(response)
            })
            .catch(err => next(err))
    }) 

    /*
     |--------------------------------------------------------------------------
     | GET /api/v1/item/detail/{id_item}
     |--------------------------------------------------------------------------
     */
    /**
     * @swagger
     * /api/v1/item/list/detail/{id_item}:
     *   get:
     *     tags:
     *       - Item
     *     description:
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id_item
     *         x-example: 1
     *         type: number
     *         description: item id
     *         in: path
     *         required: true
     *     responses:
     *       200:
     *         description: Successfully fetch
     */
    app.get(VERSION + '/list/detail/:id_item',  (req, res, next) => {
         itemServices.getDetailByItemId(req.params.id_item)
            .then((response) => {
                return res.send(response)
            })
            .catch(err => next(err))
    })
}