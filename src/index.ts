import * as core from '@actions/core'

async function run(): Promise<void> {

    const url: string = core.getInput('url')
    let fileName = url.split("-").at(-1);
    let BDSVersion = fileName.replace(".zip","")
    core.setOutput("BDS_VERSION", BDSVersion);
    
}

run()