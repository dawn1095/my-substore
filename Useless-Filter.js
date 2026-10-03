const illegal = /网址|流量|时间|应急|过期|剩余|官网|套餐|重置|公告|问题|导航|expire|traffic|official/i;
const port = Number($server.port);
return !!$server.name
    && !illegal.test($server.name)
    && !!$server.server
    && Number.isInteger(port) && port > 0 && port <= 65535;