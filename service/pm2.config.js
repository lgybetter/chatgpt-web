const pkg = require('./package.json')

module.exports = {
  apps: [{
    name: pkg.name,
    script: './build/index.mjs',
    instances: 1,
    exec_mode: 'cluster',
    max_memory_restart: '200M',
    error_file: '/dev/null',
    out_file: '/dev/null',
  }],
}
