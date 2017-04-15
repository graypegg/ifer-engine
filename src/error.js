function warn (name, description) {
  let err = new Error(name)
  console.warn(`%c[Ifer]%c ${description}\n%c` + err.stack, 'color: #ff6600; font-weight: bold', '', 'font-size: 0.6rem')
}

function error (name, description) {
  let err = new Error(name)
  console.warn(`%c[Ifer]%c ${description}\n%c` + err.stack, 'color: #ff0000; font-weight: bold', '', 'font-size: 0.6rem')
  throw err
}

export default { warn, error }
