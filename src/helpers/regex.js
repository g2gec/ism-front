export const expresiones = {
  user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  name: /^[a-zA-ZÀ-ÿ\s]*$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,14}$/, // 7 a 14 numeros.,
  numbers: /^[0-9]*$/, //solo numeros,
  address: /^[#.0-9a-zA-Z\s,-]+$/, //direccion
  credit_card: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/, //TDC,
  up_to_100: /^\b(0*(?:[1-9][0-9]?|100))\b/,
  year__tdc: /^\b(0*(?:[1-9][0-9]?|21))\b/,
  alpha_number: /^[a-zA-Z0-9]*$/, // Letras, numeros
};
