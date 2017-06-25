import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017/roomio'

export function mongoConnect(req, res, next) {
    MongoClient.connect(url, (err, res) => {
        req.db = res
        next()
    })
}