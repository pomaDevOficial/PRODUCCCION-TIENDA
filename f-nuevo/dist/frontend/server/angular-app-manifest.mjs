
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/Admin"
  },
  {
    "renderMode": 2,
    "route": "/Admin/inventario/talla"
  },
  {
    "renderMode": 2,
    "route": "/Admin/inventario/categoria"
  },
  {
    "renderMode": 2,
    "route": "/Admin/inventario/marca"
  },
  {
    "renderMode": 2,
    "route": "/Admin/inventario/producto"
  },
  {
    "renderMode": 2,
    "route": "/Admin/inventario/movimiento"
  },
  {
    "renderMode": 2,
    "route": "/Admin/inventario/lote"
  },
  {
    "renderMode": 2,
    "route": "/Admin/persona"
  },
  {
    "renderMode": 2,
    "route": "/Admin/usuario"
  },
  {
    "renderMode": 2,
    "route": "/Admin/pedido"
  },
  {
    "renderMode": 2,
    "route": "/Admin/comprobante"
  },
  {
    "renderMode": 2,
    "route": "/Admin/cliente"
  },
  {
    "renderMode": 2,
    "route": "/Admin/venta"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Admin",
    "route": "/Admin/**"
  },
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 30116, hash: '1b8075451b66df29c07e93eef55795637bf7280db43b938951414a87db873282', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17594, hash: 'a8b881b2012b491343e1583b4b6f2a4931bf0cb49cb492f2d374cf5633ba9b5a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Admin/index.html': {size: 48843, hash: 'be152baa8be4a71940695a374c99088e8b63cc335b504344c6c13f707e0e8e31', text: () => import('./assets-chunks/Admin_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 119279, hash: 'e9f5593e5c95be83cdf84f0ebf735d47d7602932ebc949efd94497cbdd0079ec', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'Admin/inventario/talla/index.html': {size: 48843, hash: 'be152baa8be4a71940695a374c99088e8b63cc335b504344c6c13f707e0e8e31', text: () => import('./assets-chunks/Admin_inventario_talla_index_html.mjs').then(m => m.default)},
    'Admin/inventario/marca/index.html': {size: 48843, hash: 'be152baa8be4a71940695a374c99088e8b63cc335b504344c6c13f707e0e8e31', text: () => import('./assets-chunks/Admin_inventario_marca_index_html.mjs').then(m => m.default)},
    'Admin/inventario/producto/index.html': {size: 48843, hash: 'be152baa8be4a71940695a374c99088e8b63cc335b504344c6c13f707e0e8e31', text: () => import('./assets-chunks/Admin_inventario_producto_index_html.mjs').then(m => m.default)},
    'Admin/inventario/categoria/index.html': {size: 48843, hash: 'be152baa8be4a71940695a374c99088e8b63cc335b504344c6c13f707e0e8e31', text: () => import('./assets-chunks/Admin_inventario_categoria_index_html.mjs').then(m => m.default)},
    'Admin/persona/index.html': {size: 48843, hash: 'be152baa8be4a71940695a374c99088e8b63cc335b504344c6c13f707e0e8e31', text: () => import('./assets-chunks/Admin_persona_index_html.mjs').then(m => m.default)},
    'Admin/inventario/movimiento/index.html': {size: 48843, hash: 'be152baa8be4a71940695a374c99088e8b63cc335b504344c6c13f707e0e8e31', text: () => import('./assets-chunks/Admin_inventario_movimiento_index_html.mjs').then(m => m.default)},
    'Admin/inventario/lote/index.html': {size: 48843, hash: 'be152baa8be4a71940695a374c99088e8b63cc335b504344c6c13f707e0e8e31', text: () => import('./assets-chunks/Admin_inventario_lote_index_html.mjs').then(m => m.default)},
    'Admin/usuario/index.html': {size: 48843, hash: 'be152baa8be4a71940695a374c99088e8b63cc335b504344c6c13f707e0e8e31', text: () => import('./assets-chunks/Admin_usuario_index_html.mjs').then(m => m.default)},
    'Admin/pedido/index.html': {size: 48843, hash: 'be152baa8be4a71940695a374c99088e8b63cc335b504344c6c13f707e0e8e31', text: () => import('./assets-chunks/Admin_pedido_index_html.mjs').then(m => m.default)},
    'Admin/comprobante/index.html': {size: 48843, hash: 'be152baa8be4a71940695a374c99088e8b63cc335b504344c6c13f707e0e8e31', text: () => import('./assets-chunks/Admin_comprobante_index_html.mjs').then(m => m.default)},
    'Admin/cliente/index.html': {size: 48843, hash: 'be152baa8be4a71940695a374c99088e8b63cc335b504344c6c13f707e0e8e31', text: () => import('./assets-chunks/Admin_cliente_index_html.mjs').then(m => m.default)},
    'Admin/venta/index.html': {size: 48843, hash: 'be152baa8be4a71940695a374c99088e8b63cc335b504344c6c13f707e0e8e31', text: () => import('./assets-chunks/Admin_venta_index_html.mjs').then(m => m.default)},
    'styles-LMJU6CBL.css': {size: 665754, hash: 'XjbuWLihzHg', text: () => import('./assets-chunks/styles-LMJU6CBL_css.mjs').then(m => m.default)}
  },
};
