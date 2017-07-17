import NippoDao from './db.js'

(async function () {
  const dao = new NippoDao()
  await dao.connect()

  await dao.addReport({id: 'hoge', title: 'foo'})
  const event = await dao.getReport('hoge')
  console.log(event.target.result)

  await dao.addReport({id: 'fuga', title: 'baz'})
  const event1 = await dao.getAllReports()
  console.log(event1.target.result)

  await dao.updateReport({id: 'hoge', title: 'bar'})
  const event2 = await dao.getReport('hoge')
  console.log(event2.target.result)

  await dao.removeReport('hoge')
  const event3 = await dao.getReport('hoge')
  console.log(event3.target.result)
})()
