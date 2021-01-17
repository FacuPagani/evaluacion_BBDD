module.exports = function(sequelize, dataTypes) {
    let alias = "Nota";
    let cols = {
        id_notas: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING,
            notNull: true
        },
        descripcion: {
            type: dataTypes.DECIMAL,
            notNull: true
        }
    };
    let config = {
        tableName: 'notas',
        timestamps: false,
        
    }

    const Nota = sequelize.define(alias, cols, config);

    

    return Nota
}