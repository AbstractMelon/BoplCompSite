import {getCache} from '/utils/announce.js'
export default function handler(req, res) {
  res.status(200).send(getCache()[0])
}
