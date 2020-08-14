import axios from 'axios';
import logger from './logger';

class Helper {

    requiredFields(data, reqField) {
        const value = reqField.filter(item => {
            if (data[item] === undefined) return item;
            return false;
        });
        return value;
    }

    formatResponse(response) {
        const { status } = response;
        if (status === 200 || status === 201) {
            return response.data
        } else {
            return response
        }
    }

    async requestAPI(requestData) {
        const { url, data, method = 'Post' } = requestData;
        const formatData = {
            url,
            data,
            method,
            headers: {
                "Content-Type": "application/json",
            }
        }
        logger.info("requestAPI foramtData", formatData)
        try {
            const response = await axios({ ...formatData });
            const responseData = this.formatResponse(response);
            console.log("------", responseData)
            return responseData;

        } catch (error) {
            // logger.error("axios error", error);
            return error;
        }
    }
}
export default new Helper();
