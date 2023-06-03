import * as core from '@actions/core'
import request from 'request'

function getLINK(url: string): string {
  let data = ''
  request.get({url}, (err, httpResponse, body) => {
    if (err) {
      return ''
    }
    console.log("body:",body)
    const fileName: string = body.split('-').at(-1) || '1.19.81.01'
    const BDSVersion: string = fileName.replace('.zip', '')
    core.setOutput('BDS_VERSION', BDSVersion)
    core.setOutput('BDS_URL', body)
  })
  return data
}

async function run(): Promise<void> {
  //const url: string = core.getInput('url')
  getLINK(
    'https://raw.githubusercontent.com/LiteLDev/LiteLoaderBDS/develop/scripts/LINK.txt'
  )
  
}

run()
