import * as core from '@actions/core'
import request from 'request';

async function getLINK(url:string) {
    let data = "";
    await request.get({ url: url }, (err, httpResponse, body) => {
        if (err) {
            return ""
        }
        data = body;
    });
    return data
}



async function run(): Promise<void> {
    //const url: string = core.getInput('url')
    let url:string = await getLINK('https://raw.githubusercontent.com/LiteLDev/LteLoaderBDS/develop/scripts/LINK.txt')
    
    let fileName: string = url.split("-").at(-1)||"1.19.81.01";
    let BDSVersion = fileName.replace(".zip","")
    core.setOutput("BDS_VERSION", BDSVersion);
}

run()