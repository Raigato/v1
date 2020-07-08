export const throttle = (func, wait = 100) => {
  let timer = null
  return function (...args) {
    if (timer === null) {
      timer = setTimeout(() => {
        func.apply(this, args)
        timer = null
      }, wait)
    }
  }
}

export const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}

export const shadeHex = (col, light) => {
  function hex2(c) {
    c = Math.round(c)
    if (c < 0) c = 0
    if (c > 255) c = 255

    var s = c.toString(16)
    if (s.length < 2) s = "0" + s

    return s
  }

  function rgb2hex(r, g, b) {
    return "#" + hex2(r) + hex2(g) + hex2(b)
  }

  light /= 100

  var r = parseInt(col.substr(1, 2), 16)
  var g = parseInt(col.substr(3, 2), 16)
  var b = parseInt(col.substr(5, 2), 16)

  if (light < 0) {
    r = (1 + light) * r
    g = (1 + light) * g
    b = (1 + light) * b
  } else {
    r = (1 - light) * r + light * 255
    g = (1 - light) * g + light * 255
    b = (1 - light) * b + light * 255
  }

  return rgb2hex(r, g, b)
}

export const skillSplit = skill => {
  const icon = skill.split(" | ")[0]
  const name = skill.split(" | ")[1]
  return { icon, name }
}
