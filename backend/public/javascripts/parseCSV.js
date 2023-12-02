const fs = require('fs');
const createReadStream = fs.createReadStream;
const csvParser = require('csv-parser');

const parseCSV = async (csvPath) => {
    try{
        const filteredData = [];

        await new Promise( (resolve, reject) => {
            createReadStream(csvPath)
                .pipe(csvParser({filter: (row) => row.County === 'San Bernardino' && row.Source === 'Cases'}))
                .on('data', (row)=> {
                    const selectedFeatures = {
                        Date: row.Date,
                        RVal: row['Estimated Effective R'],
                    };
                    filteredData.push(selectedFeatures);
                })
                .on('end', () => resolve(filteredData))
                .on('error', (error) => reject(error));
        });
        const thirtyDayData = filteredData.slice(-30,);
        return thirtyDayData;
    } catch(error) {
        console.error('Error parsing R values:', error.message);
        throw error;
    }
};

module.exports = parseCSV;