const fs = require('fs');
const writeFile = fs.writeFile;

const getRValueArray = async (csvURL) => {
    const response = await fetch(csvURL);
    const body = await response.text();
        
    writeFile('./data.csv', body, "utf8", (error) => {
        if (error) {
            console.log(error)
        } else
        {
            console.log("Data retrieved succesfully");
        }
    })
}

module.exports = getRValueArray;

const csvURL = 'https://ca-covid-r.info/ca_daily_cases_ww_and_r.csv';
//cron.schedule('55 16 *  * *', async () => {
    getRValueArray(csvURL);
//})