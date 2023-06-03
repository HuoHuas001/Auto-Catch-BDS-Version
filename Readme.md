# Auto Catch BDS Version

This action catch BDS Version Number and Url from LiteLDev/LiteLoaderBDS

## Outputs

### `BDS_VERSION`

Catched BDS Version Number

### `BDS_URL`

Catched BDS Version URL

## Example usage

```yaml
- name: catch bds version
  uses: HuoHuas001/Auto-Catch-BDS-Version@v1.1.3
  id: bds

- name: Download Server
  run: |
    echo ${{steps.version.outputs.BDS_VERSION}}
    echo ${{steps.version.outputs.BDS_URL}}

```