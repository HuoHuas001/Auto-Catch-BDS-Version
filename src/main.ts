import * as core from '@actions/core'
import request from 'request'

function getLINK(url: string): string {
  let data = ''
  request.get({url}, (err, httpResponse, body) => {
    if (err) {
      return ''
    }
    data = body
  })
  return data
}

async function run(): Promise<void> {
  //const url: string = core.getInput('url')
  const url: string = getLINK(
    'https://raw.githubusercontent.com/LiteLDev/LteLoaderBDS/develop/scripts/LINK.txt'
  )

  const fileName: string = url.split('-').at(-1) || '1.19.81.01'
  const BDSVersion: string = fileName.replace('.zip', '')
  core.setOutput('BDS_VERSION', BDSVersion)
  core.setOutput('BDS_URL', url)
}

run()
