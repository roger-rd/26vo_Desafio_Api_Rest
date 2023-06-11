
export const reportarConsulta = async (req, res, next)=>{
    const url = req.url;
    const parametros = req.params;
    console.log(`
    Hoy ${new Date()}
    se ha recibido una solicitud en la ruta ${url}
    con los parametros`, parametros)
    next()
};