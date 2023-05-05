import DbConfig from '../database/dbConfig';
import ICustomer from '../models/customer';

class CustomerService {
    
    public async create(customer: ICustomer) {
        return new Promise(async (resolve, reject) => {
            const conn = DbConfig.getInstance();
            await conn.testConnection();
            try {
                const saveCustomer = await conn.customerEntity.create(customer);
                resolve(saveCustomer);
            } catch (error) {
                reject(error);
            }
        });
    }

    public async update(customer: ICustomer) {
        return new Promise(async (resolve, reject) => {
            const conn = DbConfig.getInstance();
            await conn.testConnection();
            try {
                const updateCustomer = await conn.customerEntity.update(customer, {
                    where: {
                        id: customer.id
                    }
                });
                resolve(updateCustomer[0]);
            } catch (error) {
                reject(error);
            }
        });
    }

    public async getCustomers(where?: any) {
        return new Promise(async (resolve, reject) => {
            const conn = DbConfig.getInstance();
            await conn.testConnection();
            try {
                const result = await conn.customerEntity.findAll({
                    where: {
                        ...where
                    }
                });
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

}

const customerService = new CustomerService();
export default customerService;