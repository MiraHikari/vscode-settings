const { readFileSync } = require('fs')
const { resolve } = require('path')
const { toArray } = require('lodash')

console.info('请输入导出文件的相对路径：')

process.stdin.once('data', (e) => {
  const filePath = resolve(e.toString().trim())
  const extensionsData = readFileSync(filePath).toString().trim()
  const parsedData = JSON.parse(JSON.parse(extensionsData).extensions) // JSON 解析不知道为什么只有一层

  toArray(parsedData).forEach(item => {
    console.info(`"${item.identifier.id}",`)
  })
})
