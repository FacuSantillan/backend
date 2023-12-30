const { Turnos } = require('../../db');

const createTurno = async (turnoData) => {
    const { fecha, hora, servicio } = turnoData;
    const adminId = "41077e33-4cf2-4384-9804-4c0828746227";

    const newTurno = await Turnos.create({
        fecha,
        hora,
        servicio,
        AdminId: adminId,
    });

    const result = await Turnos.findOne({
        where: {
            id: newTurno.id,
        },
        attributes: ['id', 'fecha', 'hora', 'servicio'],
    });

    return result;
};

module.exports = {
    createTurno,
};
