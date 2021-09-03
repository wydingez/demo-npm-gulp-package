import packageInfo from './package.json'
import _ from 'lodash'

class DemoNpmPackage {
  constructor () {
    const { name, version } = packageInfo
    this.version = version
    this.name = name
  }

  doAdd(a, b) {
    if (arguments.length !== 2) {
      throw new Error('参数必须为两个!')
    }

    if (Number.isNaN(a) || Number.isNaN(b)) {
      throw new Error('参数必须为数字!')
    }

    return Number(a) + Number(b)
  }

  getPropByKey(obj, key) {
    return _.get(obj, key)
  }

  getDesc() {
    return `${this.name}-${this.version}`
  }
}

module.exports = DemoNpmPackage
