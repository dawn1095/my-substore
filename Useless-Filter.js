function operator(proxies = []) {
    const illegal = /网址|流量|时间|应急|过期|剩余|官网|套餐|重置|公告|expire|traffic|official/i;
    return proxies.filter(p => {
        if (!p || !p.name || illegal.test(p.name)) return false;   // 名字非法
        if (!p.server) return false;                                // 缺服务器
        const port = Number(p.port);
        if (!Number.isInteger(port) || port <= 0 || port > 65535) return false; // 端口非法
        return true;
    });
}