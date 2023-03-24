const { readFileSync } = require('fs')
const { resolve } = require('path')
const { toArray } = require('lodash')

console.info('请输入导出文件的相对路径：')

process.stdin.once('data', (e) => {
  const data = JSON.parse(JSON.parse(readFileSync(resolve(e.toString().trim())).toString().trim()).extensions)

  toArray(data).forEach(item => {
    console.info(`"${item.identifier.id}",`)
  })
})
