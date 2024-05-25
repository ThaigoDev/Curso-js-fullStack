"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//BABEl e "CAN I USE..." 
//compatibilidade de códigos com navegadores antigos. 
//Por exemplo, internet explore. 
//pesquisamos can I use para saber quais recurso são compatíveis com os outros navegadores. 
//Oque devemos fazer para escrever um código para que ele funcione em todos os navegadores ? 
//Usamos o Babel , ele é um transpilador de código, ele traduz e compila o código. 
//Para utilizarmos pesquisamos Babeljs.io 
//Utilizando o npm para instalar o Babel  
//Para instalar o Babel usamos :  
//iniciamos o  npm com npm init -y <-- vai gerar um arquivo package.json 
// no terminal instalamos dessa forma : 
//npm install --save-dev  @babel/cli @babel/preset-env @babel/core <-- dessa forma estamos instalando o babel como usa dev dependence   

//vamos converter esse codigo usando o babel. 
var nome = "Luiz";
var Obj = {
  nome: nome
};
var Obj2 = _objectSpread({}, Obj);
// para converter fazemos :    

//npx babel index.js -o bundle.js --presets=@babel/env 
// npx babel nome do arquivo -o = arquivo de saida e nome do arquivo, no caso bundle.js, e depois o preset que será usado para a conversão 
// todas as vezes que há alterações no código, podemos fazer com que o  código execute automaticamente 
// usamos no package.json colocamos 
/* 
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1", 
    "babel": "babel ./main.js -o ./budle.js --preset=@babel/env -w" <== adicionamos  essa configuração
  },  
  // depois disso devemos ir no terminal e executar  npm run babel 
  // toda alteração que for feita, devemos ir no terminal, car ctrl +c 
  e der novamete NPM run babel



*/
var Pessoa = /*#__PURE__*/_createClass(function Pessoa(nome, idade) {
  _classCallCheck(this, Pessoa);
  this.nome = nome;
  this.idade = idade;
});
var p1 = new Pessoa('THIAGO', 19);
