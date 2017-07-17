const indexedDB = window.indexedDB

class NippoDao {
  constructor () {
    this._db = null
    this._connectPromise = null
  }
  async connect () {
    this._connectPromise = new Promise((resolve) => {
      const request = indexedDB.open('nippo', 1)
      request.onupgradeneeded = () => {
        const db = request.result
        const reportStore = db.createObjectStore('report', {keyPath: 'id'})
        reportStore.createIndex('by_title', 'title', {unique: false})
      }
      request.onsuccess = (event) => {
        this._db = event.target.result
        this._connectPromise = null
        resolve()
      }
    })
    return this._connectPromise
  }
  async _createTransaction (op, arg) {
    if (this._connectPromise) {
      await this._connectPromise.then()
    }
    return new Promise((resolve, reject) => {
      if (this._db == null) {
        reject(new Error('db not connected'))
      }
      const mode = op === 'get' || op === 'getAll' ? 'readonly' : 'readwrite'
      const req = this._db.transaction(['report'], mode)
        .objectStore('report')[op](arg)
      req.addEventListener('success', (event) => {
        resolve(event.target.result)
      })
      req.addEventListener('error', (event) => {
        reject(event)
      })
    })
  }
  async addReport (report) {
    return this._createTransaction('add', report)
  }
  async removeReport (id) {
    return this._createTransaction('delete', id)
  }
  async getReport (id) {
    return this._createTransaction('get', id)
  }
  async getAllReports () {
    return this._createTransaction('getAll')
  }
  async updateReport (report) {
    return this._createTransaction('put', report)
  }
}

export default NippoDao
