import Sequelize, { Model } from 'sequelize';

class User extends Model {

    static initModel(sequelize: Sequelize.Sequelize) {
        super.init(

            {
                id: {
                    type: Sequelize.UUID,
                    primaryKey: true,
                    allowNull: false,
                    defaultValue: Sequelize.UUIDV4
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                age: {
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: true
                }
            }
            ,

            { sequelize });
    }
}

export default User;