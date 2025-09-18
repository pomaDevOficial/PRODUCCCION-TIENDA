
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
    'index.csr.html': {size: 30116, hash: '86f01f5cdbe52b1f0838ebd54fafb201a75196935eb674ba556ca94d6453a06c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17594, hash: '3788184a65b44025e4b8a047484edf3478cd661396f0d6a8b43b28b26beabc61', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Admin/index.html': {size: 48843, hash: '36e7d82f8eeddf50031166924c2e8b11209653ff32f5c0ce31973b2522432db4', text: () => import('./assets-chunks/Admin_index_html.mjs').then(m => m.default)},
    'Admin/inventario/categoria/index.html': {size: 48843, hash: '36e7d82f8eeddf50031166924c2e8b11209653ff32f5c0ce31973b2522432db4', text: () => import('./assets-chunks/Admin_inventario_categoria_index_html.mjs').then(m => m.default)},
    'Admin/inventario/talla/index.html': {size: 48843, hash: '36e7d82f8eeddf50031166924c2e8b11209653ff32f5c0ce31973b2522432db4', text: () => import('./assets-chunks/Admin_inventario_talla_index_html.mjs').then(m => m.default)},
    'Admin/inventario/marca/index.html': {size: 48843, hash: '36e7d82f8eeddf50031166924c2e8b11209653ff32f5c0ce31973b2522432db4', text: () => import('./assets-chunks/Admin_inventario_marca_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 119279, hash: '56f1ab0097f137d0b8875dcd531dc9f8fbc2211041ff4164f5140550ad043342', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'Admin/inventario/producto/index.html': {size: 48843, hash: '36e7d82f8eeddf50031166924c2e8b11209653ff32f5c0ce31973b2522432db4', text: () => import('./assets-chunks/Admin_inventario_producto_index_html.mjs').then(m => m.default)},
    'Admin/inventario/lote/index.html': {size: 48843, hash: '36e7d82f8eeddf50031166924c2e8b11209653ff32f5c0ce31973b2522432db4', text: () => import('./assets-chunks/Admin_inventario_lote_index_html.mjs').then(m => m.default)},
    'Admin/inventario/movimiento/index.html': {size: 48843, hash: '36e7d82f8eeddf50031166924c2e8b11209653ff32f5c0ce31973b2522432db4', text: () => import('./assets-chunks/Admin_inventario_movimiento_index_html.mjs').then(m => m.default)},
    'Admin/persona/index.html': {size: 48843, hash: '36e7d82f8eeddf50031166924c2e8b11209653ff32f5c0ce31973b2522432db4', text: () => import('./assets-chunks/Admin_persona_index_html.mjs').then(m => m.default)},
    'Admin/pedido/index.html': {size: 48843, hash: '36e7d82f8eeddf50031166924c2e8b11209653ff32f5c0ce31973b2522432db4', text: () => import('./assets-chunks/Admin_pedido_index_html.mjs').then(m => m.default)},
    'Admin/usuario/index.html': {size: 48843, hash: '36e7d82f8eeddf50031166924c2e8b11209653ff32f5c0ce31973b2522432db4', text: () => import('./assets-chunks/Admin_usuario_index_html.mjs').then(m => m.default)},
    'Admin/comprobante/index.html': {size: 48843, hash: '36e7d82f8eeddf50031166924c2e8b11209653ff32f5c0ce31973b2522432db4', text: () => import('./assets-chunks/Admin_comprobante_index_html.mjs').then(m => m.default)},
    'Admin/venta/index.html': {size: 48843, hash: '36e7d82f8eeddf50031166924c2e8b11209653ff32f5c0ce31973b2522432db4', text: () => import('./assets-chunks/Admin_venta_index_html.mjs').then(m => m.default)},
    'Admin/cliente/index.html': {size: 48843, hash: '36e7d82f8eeddf50031166924c2e8b11209653ff32f5c0ce31973b2522432db4', text: () => import('./assets-chunks/Admin_cliente_index_html.mjs').then(m => m.default)},
    'styles-LMJU6CBL.css': {size: 665754, hash: 'XjbuWLihzHg', text: () => import('./assets-chunks/styles-LMJU6CBL_css.mjs').then(m => m.default)}
  },
};
